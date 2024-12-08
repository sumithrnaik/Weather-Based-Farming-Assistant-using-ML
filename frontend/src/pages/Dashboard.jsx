import { useState } from 'react'
import Header from '../Components/Header'
import Location from '../Components/Location'
import WeatherAlert from '../Components/WeatherAlert'
import SoilCondition from '../Components/SoilCondition'
import CurrentWeather from '../Components/CurrentWeather'
import CropRecommendation from '../Components/CropRecommendation'
import Forecast from '../Components/Forecast'
import MarketPrice from '../Components/MarketPrice'
import Irrigation from '../Components/Irrigation'
import '../pagestyles/Dashboard.css'

function Dashboard() {
  const [location, setLocation] = useState('Mangalore');
  return (
    <>
      <Header/>
      <div className='location-container'>
      <Location setLocation={setLocation}/>
      </div>
      <div className='top-container'>
      <CurrentWeather location={location} />
      <Forecast location={location}/>
      </div>
      <div className='bottom-container'>
      < div className='weather-container'>
      <SoilCondition location={location}/>
      <Irrigation location={location}/>
      <MarketPrice location={location}/>
      </div>
      <div className='crop-container'>
      <CropRecommendation location={location}/>
      </div>
      </div>
    </>
  )
}

export default Dashboard;
