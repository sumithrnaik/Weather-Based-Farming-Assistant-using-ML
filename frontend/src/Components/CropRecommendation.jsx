import '../styles/CropRecommendation.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import bhindi from '../assets/crops/bhindi.avif';
import cabbage from '../assets/crops/cabbage.jpg';
import carrot from '../assets/crops/carrot.jpg';
import coconut from '../assets/crops/coconut.jpg';
import drumstick from '../assets/crops/drumstick.jpg';
import ginger from '../assets/crops/ginger.webp';
import green_chilly from '../assets/crops/green_chilly.jpg';
import onion from '../assets/crops/onion.jpg';
import rice from '../assets/crops/rice.jpg';
import tomato from '../assets/crops/tomato.jpg';

function CropRecommendation({ location }) {
    const [cropData, setCropData] = useState(null);
    const [error, setError] = useState(null);

    const cropDetails = {
        'Green Chilly': {
            description: 'Green chili is a heat-loving crop that thrives in warm temperatures, with an ideal growing range between 25°C to 35°C. It requires well-drained, loamy soil with a pH of 6.0 to 7.0 for optimal growth. The forecasted warm weather with moderate humidity and rainfall aligns with the ideal growth conditions for green chili, ensuring healthy development and high yield potential.',
            image: green_chilly,
        },
        'Bhindi': {
            description: 'Bhindi is a warm-season crop that thrives in temperatures ranging from 25°C to 35°C. It grows best in well-drained, sandy loam soil with a pH level of 6.0 to 6.8. The forecasted warm and sunny weather, combined with moderate rainfall, provides ideal conditions for robust growth, ensuring tender and high-yield pods.',
            image: bhindi,
        },
       'Cabbage': {
            description: 'Cabbage prefers cooler temperatures, with an optimal growing range between 15°C and 25°C. It grows well in fertile, well-drained loamy soil with a pH of 6.0 to 6.8. Forecasted moderate rainfall and humidity are favorable for cabbage, supporting firm heads and high-quality yields.',
            image: cabbage,
        },
        'Carrot': {
            description: 'Carrots prefer cool to moderate temperatures, with an ideal range of 15°C to 25°C. They grow best in sandy loam soil with good drainage and a pH of 6.0 to 6.8. The forecasted moderate rainfall and humidity support steady root growth and high-quality yields.',
            image: carrot,
        },
        'Coconut': {
            description: 'Coconut trees thrive in tropical climates, with ideal temperatures between 25°C and 30°C. They require sandy loam soil with a pH range of 5.5 to 7.0 and plenty of sunlight. The forecasted warm weather and moderate rainfall provide ideal conditions for healthy fruit development and a good yield.',
            image: coconut,
        },
        'Drumstick': {
            description: 'Drumstick trees thrive in hot and semi-arid climates, with ideal temperatures ranging from 25°C to 35°C. They prefer sandy or loamy soil with good drainage and a pH of 6.0 to 7.5. The forecasted warm weather and light to moderate rainfall are perfect for their rapid growth and high yield potential.',
            image: drumstick,
        },
        'Ginger': {
            description: 'Ginger thrives in warm and humid climates, with an optimal temperature range of 20°C to 30°C. It requires loamy or clayey soil that is rich in organic matter, with a pH of 5.5 to 6.5. The forecasted warm weather with moderate rainfall ensures steady rhizome development and a healthy yield.',
            image: ginger,
        },
        'Onion': {
            description: 'Onions grow well in cool to moderate climates, with an optimal temperature range of 15°C to 30°C. They require loamy soil with good drainage and a pH of 6.0 to 7.0. Forecasted warm weather with moderate humidity and light rainfall supports strong bulb formation and high-quality yields.',
            image: onion,
        },
        'Rice': {
            description: 'Rice is a water-loving crop that grows best in warm and humid climates, with an ideal temperature range of 20°C to 30°C. It thrives in clayey or loamy soil with good water retention and a pH of 5.5 to 6.5. The forecasted rainfall and high humidity ensure optimal growth and high yields for rice.',
            image: rice,
        },
        'Tomato': {
            description: 'Tomatoes thrive in temperatures between 20°C and 30°C, with well-drained sandy loam soil that has a pH of 6.0 to 6.8. The forecasted warm weather with moderate rainfall and humidity is perfect for steady flowering, fruit set, and achieving a bountiful harvest.',
            image: tomato,
        },
    };

    useEffect(() => {
        const fetchCropInfo = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/weather/current/${location}/`);
                const crop_info = response.data;
                setCropData(crop_info.crop);
                setError(null);
            } catch (error) {
                setError('Failed to fetch crop data');
                setCropData(null);
            }
        };
        fetchCropInfo();
    }, [location]);

    return (
        <div className="crop-recommendation">
            {error && <p className="error">{error}</p>}
            {cropData ? (
                cropDetails[cropData] ? (
                    <>
                        <h4 className="crop-title">Recommended Crop</h4>
                        <img
                            src={cropDetails[cropData].image}
                            alt={`${cropData}-image`}
                            className="crop-image"
                        />
                        <h6 className="crop-name">{cropData}</h6>
                        <p className="crop-description">{cropDetails[cropData].description}</p>
                    </>
                ) : (
                    <p className="error">Crop details not available for "{cropData}".</p>
                )
            ) : (
                <p className="loading">Loading crop data...</p>
            )}
        </div>
    );
}

export default CropRecommendation;
