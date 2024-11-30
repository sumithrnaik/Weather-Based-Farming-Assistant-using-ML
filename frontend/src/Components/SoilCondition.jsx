import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/SoilCondition.css';
import { Droplets, Leaf, Beaker, Gauge ,TestTube2 ,Pipette } from "lucide-react";

function SoilCondition({ location }) {
    const [soilData, setSoilData] = useState(null);
    const [error, setError] = useState('');
  
    useEffect(() => {
      const fetchSoilInfo = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/weather/current/${location}/`);
          const soil_info = response.data;
          console.log(soil_info.soil_data);
          setSoilData(soil_info.soil_data);
          setError('');
        } catch (error) {
          setError('Failed to fetch soil data');
          setSoilData(null);
        }
      };
  
      if (location) {
        fetchSoilInfo();
      }
    }, [location]);
  
    if (error) return <div>Error: {error}</div>;
    if (!soilData) return <div>Loading soil data...</div>;
  
    const metrics = [
      { icon: Leaf, label: 'Nitrogen (N)', value: Math.round(soilData.N), unit: 'mg/kg', color: 'text-green-500' },
      { icon: Beaker, label: 'Phosphorus (P)', value: Math.round(soilData.P), unit: 'mg/kg', color: 'text-yellow-500' },
      { icon: TestTube2, label: 'Potassium (K)', value: Math.round(soilData.K), unit: 'mg/kg', color: 'text-orange-500' },
      { icon: Pipette, label: 'pH Value', value: Math.round(soilData.pH), unit: '', color: 'text-teal-500' },
      { icon: Droplets, label: 'Moisture', value: Math.round(soilData.soil_moisture), unit: 'm³/m³', color: 'text-blue-500' }
    ];
  
  const getStatusColor = (value, label) => {
    switch (label) {
      case 'Nitrogen':
        return value >= 130 ? 'bg-emerald-500' : value >= 80 ? 'bg-amber-500' : 'bg-rose-500';
      case 'Phosphorus':
        return value >= 40 ? 'bg-emerald-500' : value >= 20 ? 'bg-amber-500' : 'bg-rose-500';
      case 'Potassium':
        return value >= 200 ? 'bg-emerald-500' : value >= 120 ? 'bg-amber-500' : 'bg-rose-500';
      case 'pH':
        return value >= 6.0 && value <= 7.0 ? 'bg-emerald-500' :
               value >= 5.5 && value <= 7.5 ? 'bg-amber-500' : 'bg-rose-500';
      case 'Moisture':
        return value >= 0.3 ? 'bg-emerald-500' : value >= 0.2 ? 'bg-amber-500' : 'bg-rose-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="soil-condition">
      <div className="soil-title">
        <h4>Soil Condition</h4>
      </div>
      <hr className="separation-line" />
      <div className='moisture-container'>
          <div className='moisture'>
            <Droplets color='blue' size={30} className='moisture-icon'/>
            <div className='moisture-text'>
            <p className='moisture-label'>{metrics[4].label}</p>
            <p className='moisture-metrics'>{metrics[4].value} {metrics[4].unit}</p>
            </div>
          </div>
        </div>
      <div className="soil-content">
        <div className='nitrogen-phosphorus'>
          <div className='nitrogen'>
            <Leaf color='green'/>
            <div className='nitrogen-text'>
                <p className='ele-label'>{metrics[0].label}</p>
                <p className='ele-metrics'>{metrics[0].value} {metrics[0].unit}</p>
            </div>
          </div>
          <div className='phosphorus'>
            <TestTube2 color='red'/>
            <div className='nitrogen-text'>
                <p className='ele-label'>{metrics[1].label}</p>
                <p className='ele-metrics'>{metrics[1].value} {metrics[1].unit}</p>
            </div>
          </div>
        </div>
        <div className='pottasium-ph'>
        <div className='pottasium'>
            <Beaker color='orange'/>
            <div className='pottasium-text'>
                <p className='ele-label'>{metrics[2].label}</p>
                <p className='ele-metrics'>{metrics[2].value} {metrics[2].unit}</p>
            </div>
          </div>
          <div className='ph'>
            <Pipette color='teal'/>
            <div className='ph-text'>
                <p className='ele-label'>{metrics[3].label}</p>
                <p className='ele-metrics'>{metrics[3].value} {metrics[3].unit}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SoilCondition;
