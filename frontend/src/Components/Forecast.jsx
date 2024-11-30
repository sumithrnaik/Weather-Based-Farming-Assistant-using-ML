import { useEffect, useState } from 'react';
import axios from 'axios';
import { 
  Sun, 
  CloudRain, 
  Cloud, 
  CloudLightning, 
  CloudSnow, 
  Wind, 
  Droplets 
} from 'lucide-react';
import '../styles/Forecast.css';

const WeatherForecast = ({ location }) => {
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/weather/forecast/${location}/`
        );
        setForecastData(response.data.forecast || []);
      } catch (err) {
        console.error('Error fetching forecast data:', err);
        setError('Unable to load Forecast data')
        setForecastData(null)
      }
    };

    fetchForecast();
  }, [location]);

  const getWeatherIcon = (description) => {
    const desc = description.toLowerCase();
    if (desc.includes('rain')) return <CloudRain  color='darkblue' size={32} className="icon" />;
    if (desc.includes('cloud')) return <Cloud color='gray' size={32} className="icon" />;
    if (desc.includes('snow')) return <CloudSnow color='white' size={32} className="icon" />;
    if (desc.includes('thunder')) return <CloudLightning color='purple' size={32} className="icon" />;
    return <Sun size={32} color='gold' className="icon" />;
  };

  return (
    <div className="forecast-container">
      {error && <p>{error}</p>}
      {forecastData.length > 0 ? ( 
      <div> 
      <h3 className="forecast-title">6-Day Weather Forecast</h3>
      <div className="forecast-cards">
        {forecastData.slice(0, 6).map((day, index) => (
          <div key={index} className="forecast-card">
            <p className="day">
              {new Date(day.datetime).toLocaleDateString('en-US', { weekday: 'long' })}
            </p>
            {getWeatherIcon(day.weather.description)}
            <p className="temp">{Math.round(day.temp)}°C</p>
            <div className="additional-info">
              <div className="info-item">
                <Wind className="small-icon" color='purple' />
                <span className='info-text'>{day.wind_spd.toFixed(1)}m/s</span>
              </div>
              <div className="info-item">
                <Droplets className="small-icon" color='blue' />
                <span className='info-text'>{day.rh}%</span>
              </div>
            </div>
          </div>
        ))}
      </div> 
      </div>) : (
        <p>Loading forecast data...</p>
      )}
      
    </div>
  );
};

export default WeatherForecast;
