import '../styles/Irrigation.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Irrigation({ location }) {
    const [irrigationData, setIrrigationData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchIrrigationInfo = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/weather/current/${location}/`);
                const irrigation_info = response.data;
                setIrrigationData(irrigation_info.irrigation);
                setError('');
            } catch (error) {
                setError('Failed to fetch irrigation data');
                setIrrigationData(null);
            }
        };

        if (location) {
            fetchIrrigationInfo();
        }
    }, [location]);

    return (
        <div className="irrigation">
            {error && <p className="error">{error}</p>}
            {irrigationData ? (
                <>
                    <h4>Irrigation Advice</h4>
                    <hr />
                    <div className="gauge-container">
                        <div className="gauge">
                            <CircularProgressbar
                                value={Math.round(irrigationData.Irrigation_Amount)}
                                maxValue={100} 
                                text={`${Math.round(irrigationData.Irrigation_Amount)} mm`}
                                styles={buildStyles({
                                    textColor: '#083ba2',
                                    pathColor: '#083ba2',
                                    trailColor: '#a4dbee',
                                })}
                            />
                            <p>Irrigation Amount</p>
                        </div>
                        <div className="gauge">
                            <CircularProgressbar
                                value={Math.round(irrigationData.Irrigation_Time)}
                                maxValue={24}
                                text={`${Math.round(irrigationData.Irrigation_Time)} hrs`}
                                styles={buildStyles({
                                    textColor: '#047c2a',
                                    pathColor: '#047c2a',
                                    trailColor: '#e4f9ea',
                                })}
                            />
                            <p>Irrigation Duration</p>
                        </div>
                    </div>
                </>
            ) : (
                <p className="loading">Loading irrigation data...</p>
            )}
        </div>
    );
}

export default Irrigation;
