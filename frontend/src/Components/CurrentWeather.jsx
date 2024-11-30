import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/CurrentWeather.css';
import {
  Sun, Cloud, CloudRain, CloudLightning, 
  Droplets, Wind, Thermometer, Gauge 
} from 'lucide-react';

function CurrentWeather({ location }) {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const getWeatherIcon = (condition) => {
    const normalizedCondition = condition.toLowerCase();

    if (normalizedCondition.includes('sunny') || normalizedCondition.includes('clear')) {
      return <Sun size={40} color="gold" />;
    }
    if (normalizedCondition.includes('cloudy') || normalizedCondition.includes('overcast')) {
      return <Cloud size={40} color="gray" />;
    }
    if (normalizedCondition.includes('rain') || normalizedCondition.includes('showers')) {
      return <CloudRain size={40} color="blue" />;
    }
    if (normalizedCondition.includes('thunder')) {
      return <CloudLightning size={40} color="purple" />;
    }
    if (normalizedCondition.includes('drizzle')) {
      return <Droplets size={40} color="#3B82F6" />;
    }
    if (normalizedCondition.includes('fog') || normalizedCondition.includes('mist')) {
      return <Wind size={40} color="#94A3B8" />;
    }
    if (normalizedCondition.includes('heavy rain') || normalizedCondition.includes('torrential')) {
      return <CloudRain size={50} color="darkblue" />;
    }
    return <Cloud size={40} color="gray" />;
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/weather/current/${location}/`);
        const weather_info=response.data
        setWeatherData(weather_info.weather_data);
        setError('');
      } catch (error) {
        setError('Failed to fetch weather data');
        setWeatherData(null);
      }
    };
    if (location) {
      fetchWeather();
    }
  }, [location]);

  return (
    <div className="current-weather">
      {error && <p>{error}</p>}
      {weatherData ? (
        <div>
          <div className="weather-details-container">
            {getWeatherIcon(weatherData.current.condition?.text)}
            <div className="weather-details">
              <p className="temp">{Math.round(weatherData.current.temp_c)}°C</p>
              <p className="weather-location">{weatherData.location.name}</p>
              <p className="weather-condition">{weatherData.current.condition?.text}</p>
            </div>
          </div>
          <div className="mid-container">
            <div className="feelslike">
              <Thermometer color="#F97316" className="f-icon" />
              <div className="feelslike-details">
                <p className="f-text">Feelslike</p>
                <p className="f-temp">{Math.round(weatherData.current.feelslike_c)}°C</p>
              </div>
            </div>
            <div className="humidity">
              <Droplets color="#3B82F6" className="humidity-icon" />
              <div className="humidity-details">
                <p className="h-text">Humidity</p>
                <p className="h-percentage">{weatherData.current.humidity}%</p>
              </div>
            </div>
          </div>
          <div className="bottom-container">
            <div className="wind">
              <Wind color="#8B5CF6" className="wind-icon" />
              <div className="wind-details">
                <p className="w-text">Wind Speed</p>
                <p className="w-kph">{Math.round(weatherData.current.wind_kph)} kph</p>
              </div>
            </div>
            <div className="pressure">
              <Gauge color="#10B981" className="pressure-icon" />
              <div className="pressure-details">
                <p className="p-text">Pressure</p>
                <p className="p-hPa">{weatherData.current.pressure_mb} hPa</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default CurrentWeather;
