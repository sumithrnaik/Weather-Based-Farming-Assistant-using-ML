import '../styles/MarketPrice.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

function MarketPrice({ location }) {
  const [priceData, setPriceData] = useState(null); 
  const [predictedprice,setPredictedPrice]=useState(null)
  const [crop, setCrop] = useState(null); 
  const [error, setError] = useState(null);

  const api_key = '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b';

  useEffect(() => {
    const fetchPriceInfo = async () => {
      try {
        // Fetch crop information from the local weather API
        const response = await axios.get(
          `http://127.0.0.1:8000/weather/current/${location}/`
        );
        const market_info = response.data;
        setPredictedPrice(market_info.marketprice)
        setCrop(market_info.crop);

        // Fetch modal price data for the crop from the government API
        const apiUrl = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${api_key}&format=json&filters%5Bcommodity%5D=${market_info.crop}`;
        const priceResponse = await axios.get(apiUrl);
        const apiData = priceResponse.data.records;

        // Process data for the chart
        const chartData = apiData.map((record) => ({
          market: record.market,
          modalPrice: parseFloat(record.modal_price),
        }));

        setPriceData(chartData);
        setError(null);
      } catch (error) {
        setError('Failed to fetch market price data');
        setPriceData(null);
      }
    };

    fetchPriceInfo();
  }, [location]);

  return (
    <div className="market-price">
      {error && <p className="error">{error}</p>}
      {priceData ? (
        <>
          <h2 className="marketprice-title">Market-Price</h2>
          <div className='price-details'>
            <p>Predicted price of <b>{crop}</b> per Quintal(100kg): ₹{Math.round(predictedprice)}</p>
          </div>
          <div className='graph'>
          <LineChart
            width={800}
            height={200}
            data={priceData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <Line
              type="monotone"
              dataKey="modalPrice"
              stroke="#8884d8"
              strokeWidth={2}
              activeDot={{r:6}}
              name="Modal Price"
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="market" />
            <YAxis />
            <Tooltip />
            </LineChart>
          </div>
        </>
      ) : (
        <p className="loading">Loading market price data...</p>
      )}
    </div>
  );
}

export default MarketPrice;
