from django.shortcuts import render
from django.http import JsonResponse
import requests
import pickle
import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler,OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from xgboost import XGBClassifier
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from datetime import datetime
import joblib
from datetime import datetime
import tensorflow as tf 

GEO_MODEL_PATH='myapp/ml_models/geo_model.pkl'
SOIL_MODEL_PATH='myapp/ml_models/soil_condition_model.h5'
X_SCALER_PATH='myapp/ml_models/X_scaler.pkl'
Y_SCALER_PATH='myapp/ml_models/y_scaler.pkl'
CROP_MODEL_PATH='myapp/ml_models/crop_model.pkl'
LE_INPUT_PATH='myapp/ml_models/xg_input_le.pkl'
LE_TARGET_PATH='myapp/ml_models/xg_target_le.pkl'
IRRIGATION_AMOUNT_PATH='myapp/ml_models/irrigation_amount.pkl'
IRRIGATION_TIME_PATH='myapp/ml_models/irrigation_time.pkl'
MARKETPRICE_MODEL_PATH='myapp/ml_models/market_price_model.h5'
PRICE_FEATURE_SCALER='myapp/ml_models/price_feature_scaler.pkl'
PRICE_TARGET_SCALER='myapp/ml_models/price_target_scaler.pkl'
PRICE_ENCODER_PATH='myapp/ml_models/price_encoder.pkl'

with open(GEO_MODEL_PATH, 'rb') as geo_file:
    geo_model = pickle.load(geo_file)

with open(X_SCALER_PATH,'rb') as x_scaler_file:
    x_scaler_model=pickle.load(x_scaler_file)

with open(Y_SCALER_PATH,'rb') as y_scaler_file:
    y_scaler_model=pickle.load(y_scaler_file)

with open(CROP_MODEL_PATH, 'rb') as crop_file:
    crop_model = pickle.load(crop_file)

with open(LE_INPUT_PATH, 'rb') as le_file:
    le_xg_input = pickle.load(le_file)

with open(LE_TARGET_PATH, 'rb') as le_file:
    le_xg_target = pickle.load(le_file)

with open(IRRIGATION_AMOUNT_PATH,'rb') as iram_file:
    irrigation_amount=pickle.load(iram_file)

with open(IRRIGATION_TIME_PATH,'rb') as irtm_file:
    irrigation_time=pickle.load(irtm_file)

with open(PRICE_FEATURE_SCALER,'rb') as pfs_file:
    price_feature_scaler=joblib.load(pfs_file)

with open(PRICE_TARGET_SCALER,'rb') as pts_file:
    price_target_scaler=joblib.load(pts_file)

with open(PRICE_ENCODER_PATH,'rb') as pe_file:
    crop_encoder=joblib.load(pe_file)

soil_condition_model = tf.keras.models.load_model(SOIL_MODEL_PATH)
marketprice_model=tf.keras.models.load_model(MARKETPRICE_MODEL_PATH)

def get_current_data(request,location):
    api_key='eef1c6ff8ee149abb6a95259241110'
    url=f'http://api.weatherapi.com/v1/current.json?key={api_key}&q={location}'

    try:
        response=requests.get(url)
        response.raise_for_status()

        data=response.json()

        latitude=data['location']['lat']
        longitude=data['location']['lon']

        elevation=get_elevation_data(latitude,longitude)

        geo_data=geo_prediction(latitude,longitude,elevation)
        
        soil_data=predict_soil_condition(data,elevation,geo_data)

        crop=predict_crop(data,soil_data)

        irrigation_data=get_irrigation_data(data,soil_data)

        inflation_rate=get_inflation_rate(crop)

        marketprice=get_market_price(data,crop,inflation_rate,'2000-01-01')

        return JsonResponse({'weather_data':data, 
                            'soil_data': soil_data, 
                            'crop':crop , 
                            'irrigation':irrigation_data, 
                            'marketprice':marketprice
                            })
    
    except requests.exceptions.HTTPError as http_err:
        return JsonResponse({'error': f'HTTP error occurred: {str(http_err)}'}, status=response.status_code)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

    
def get_elevation_data(latitude,longitude):
    url = f"https://api.open-elevation.com/api/v1/lookup?locations={latitude}',{longitude}'"

    try:
        response = requests.get(url)
        response.raise_for_status()
        elevation_data = response.json()
        elevation=elevation_data['results'][0]['elevation']
        return elevation

    except requests.exceptions.HTTPError as http_err:
        return {'error': f'HTTP error occurred: {str(http_err)}'}
    except Exception as e:
        return {'error': str(e)}

def geo_prediction(latitude, longitude, elevation):
    input_data = np.array([[latitude, longitude, elevation]])
    prediction = geo_model.predict(input_data)[0]

    terrain_type, vegetation_type = prediction[0], prediction[1]
    return terrain_type, vegetation_type

def predict_soil_condition(weather_data,elevation,geo_data):
    latitude=weather_data['location']['lat']
    longitude=weather_data['location']['lon']
    terrain_type=geo_data[0]
    vegetation_type=geo_data[1]
    temperature = weather_data['current']['temp_c']
    heat_index = weather_data['current']['feelslike_c']
    humidity = weather_data['current']['humidity']
    precipitation = weather_data['current']['precip_mm']
    wind_speed = weather_data['current']['wind_kph']
    uv_index = weather_data['current']['uv']

    nn_input = pd.DataFrame({
        'latitude': [latitude],
        'longitude': [longitude],
        'elevation': [elevation],
        'terrain_type': [terrain_type],
        'vegetation_type': [vegetation_type],
        'temperature': [temperature],
        'heat_index': [heat_index],
        'humidity': [humidity],
        'precipitation': [precipitation],
        'wind_speed': [wind_speed],
        'uv_index': [uv_index]
    })

    nn_input_encoded = pd.get_dummies(nn_input, columns=['terrain_type', 'vegetation_type'], drop_first=True)

    expected_columns = x_scaler_model.get_feature_names_out()
    nn_input_encoded = nn_input_encoded.reindex(columns=expected_columns, fill_value=0)

    nn_input_scaled = x_scaler_model.transform(nn_input_encoded)

    prediction = soil_condition_model.predict(nn_input_scaled)

    predicted_values = y_scaler_model.inverse_transform(prediction)

    return {
        'N': float(predicted_values[0][0]),
        'P': float(predicted_values[0][1]),
        'K': float(predicted_values[0][2]),
        'pH': float(predicted_values[0][3]),
        'soil_moisture': float(predicted_values[0][4])
    }

def predict_crop(weather_data,soil_data):
    temperature = weather_data['current']['temp_c']
    humidity = weather_data['current']['humidity']
    precipitation = weather_data['current']['precip_mm']
    wind_speed = weather_data['current']['wind_kph']
    uv_index = weather_data['current']['uv']
    weather_condition=weather_data['current']['condition']['text']
    nitrogen=soil_data['N']
    phosphorus=soil_data['P']
    potassium=soil_data['K']
    ph=soil_data['pH']

    model_input = pd.DataFrame({
        'Temperature': [temperature],
        'Precipitation': [precipitation],
        'Humidity': [humidity],
        'Wind Speed': [wind_speed],
        'UV Index': [uv_index],
        'Weather Condition':map_weather_condition(weather_condition),
        'Nitrogen':[nitrogen],
        'Phosphorus':[phosphorus],
        'Potassium':[potassium],
        'pH':[ph]
    })

    model_input['Weather Condition']=le_xg_input.transform(model_input['Weather Condition'])

    encoded_prediction = crop_model.predict(model_input)

    predicted_crop= le_xg_target.inverse_transform(encoded_prediction)

    return predicted_crop[0]

def map_weather_condition(condition):
    condition_map = {
        'Mist': 'Cloudy',
        'Fog': 'Cloudy',
        'Rain': 'Rainy',
        'Thunderstorm': 'Rainy',
        'Drizzle': 'Rainy',
        'Overcast': 'Overcast',
        'Partly Cloudy': 'Partly Cloudy',
        'Sunny': 'Sunny',
        'Clear': 'Sunny',
        'Rainy':'Rainy',
        'Cloudy':'Cloudy'
    }

    condition=condition_map.get(condition, 'Sunny')  
    return condition

def get_irrigation_data(weather_data, soil_data):
    temperature = weather_data['current']['temp_c']
    precipitation = weather_data['current']['precip_mm']
    humidity = weather_data['current']['humidity']
    wind_speed = weather_data['current']['wind_kph']
    uv_index = weather_data['current']['uv']
    weather_condition = weather_data['current']['condition']['text']
    soil_moisture = soil_data['soil_moisture']

    data = pd.DataFrame({
        'Temperature': [temperature],
        'Precipitation': [precipitation],
        'Humidity': [humidity],
        'Wind Speed': [wind_speed],
        'UV Index': [uv_index],
        'Weather Condition': [map_weather_condition(weather_condition)],
        'Soil Moisture': [soil_moisture]
    })

    irrigation_am = irrigation_amount.predict(data)
    irrigation_tm = irrigation_time.predict(data)

    return {
        'Irrigation_Amount': irrigation_am[0],
        'Irrigation_Time': irrigation_tm[0]
    }

def get_inflation_rate(crop):
    api_key = "579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b"
    url = f'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key={api_key}&format=json&filters%5Bcommodity%5D={crop}'
    
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        
        records = data['records']
        
        if len(records) < 2:
            return {"error": "Not enough data to calculate inflation rate"}
        
        sorted_records = sorted(records, key=lambda x: x['arrival_date'])
        
        old_price = float(sorted_records[0]['modal_price'])
        new_price = float(sorted_records[-1]['modal_price'])
        
        inflation_rate = ((new_price - old_price) / old_price) * 100
        
        return float(inflation_rate)
    
    except requests.exceptions.HTTPError as http_err:
        return {"error": f"HTTP error occurred: {str(http_err)}"}
    except Exception as e:
        return {"error": f"An error occurred: {str(e)}"}

def get_market_price(weather_data, crop, inflation_rate, reference_date):
    sequence_length=10

    temperature = weather_data['current']['temp_c']
    precipitation = weather_data['current']['precip_mm']
    humidity = weather_data['current']['humidity']
    wind_speed = weather_data['current']['wind_kph']

    crop_encoded=crop_encoder.transform([[crop]])
    
    current_date = datetime.now()
    ref_date = datetime.strptime(reference_date, '%Y-%m-%d') 
    days_since_ref = (current_date - ref_date).days
    
    data = pd.DataFrame({
        'Temperature': [temperature],
        'Precipitation': [precipitation],
        'Humidity': [humidity],
        'Wind Speed': [wind_speed],
        'inflation Rate': [inflation_rate],
        'Days Since Ref': [days_since_ref]  
    })

    scaled_numerical_data = price_feature_scaler.transform(np.array(data).reshape(1,-1))

    processed_data=np.hstack((scaled_numerical_data,crop_encoded))

    sequence = np.tile(processed_data, (sequence_length, 1)).reshape(1, sequence_length, -1)

    predicted_price = marketprice_model.predict(sequence)

    final_price = price_target_scaler.inverse_transform(predicted_price.reshape(-1, 1))

    return float(final_price[0][0])
