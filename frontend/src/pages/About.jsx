import React from 'react';
import Header from '../Components/Header'
import '../pagestyles/About.css'

function About(){
    return(
        <>
        <Header/>
        <div className="about-container">
            <section className="mission-section">
                <h2>Project Aim</h2>
                <p>
                    Our Aim is to empower farmers with innovative, data-driven solutions that optimize agricultural practices, promote sustainability, and enhance productivity. Through our Weather-Based Farming Assistant, we provide farmers with real-time, localized weather data, precise irrigation scheduling, crop recommendations, and market price predictions, all tailored to current and forecasted weather conditions. By integrating cutting-edge weather forecasting technologies and AI-driven analytics, we help farmers make well-informed decisions about irrigation, crop selection, fertilization, pest control, and harvesting. Our platform aims to reduce resource wastage, improve crop yields, and help farmers adapt to changing climate conditions. Additionally, by predicting market trends and pricing, we enable farmers to better time their harvests and maximize profits. We are dedicated to fostering a smarter, more resilient agricultural system that not only meets the challenges of today but also anticipates the needs of tomorrow, creating a sustainable future for farmers and their communities.
                </p>
            </section>

            <div className="features-grid">
                <div className="feature-card">
                <div className="feature-icon crop-icon">🌱</div>
                <h3>Crop Recommendation</h3>
                <p>
                    The Crop Recommendation feature helps farmers select the most suitable crops based on local environmental conditions like soil type, temperature, humidity, and precipitation. By providing personalized, data-driven suggestions, it helps optimize land usage, improve crop yields, and reduce risks from unfavorable weather. This tool empowers farmers to make informed decisions, ensuring better productivity and profitability.                </p>
                </div>

                <div className="feature-card">
                <div className="feature-icon soil-icon">🌍</div>
                <h3>Soil Condition</h3>
                <p>
                    The model provides detailed soil condition insights, including N, P, K, pH levels, and soil moisture, by analyzing weather and location data. By factoring in real-time weather conditions and local environmental factors, it offers accurate soil health information, helping farmers adjust their practices for optimal crop growth, irrigation, and fertilization. This data-driven approach ensures that farmers can maintain healthy soil and improve crop yields efficiently                </p>
                </div>

                <div className="feature-card">
                <div className="feature-icon weather-icon">☁️</div>
                <h3>Real-time Weather Data</h3>
                <p>
                    The Weather-Based Farming Assistant provides real-time weather data through a reliable API, offering up-to-date information on temperature, humidity, precipitation, and other weather conditions. This data helps farmers make timely decisions about irrigation, crop management, and resource allocation, ensuring they stay ahead of changing weather patterns and optimize their farming practices for better outcomes.                </p>
                </div>

                <div className="feature-card">
                <div className="feature-icon irrigation-icon">💧</div>
                <h3>Irrigation Advice</h3>
                <p>
                The Irrigation Advice feature offers tailored recommendations on the amount of water needed (in mm) and the duration of irrigation (in hours) based on weather data, soil moisture levels, and crop requirements. By analyzing these factors, the model helps farmers optimize water usage, ensuring crops receive the right amount of irrigation while conserving water resources for sustainable farming practices. </p>               
                </div>

                <div className="feature-card" >
                <div className="feature-icon market-icon">📈</div>
                <h3>Market Price Predictions</h3>
                <p>
                    The Market Price Prediction feature predicts crop prices by analyzing weather patterns and crop inflation rates. By considering factors like weather conditions, crop yield, and market trends, it provides farmers with valuable insights into the best time to sell their crops. This helps farmers make informed decisions, maximizing profitability and minimizing risks associated with market fluctuations.                </p>
                </div>

                <div className="feature-card">
                <div className="feature-icon forecast-icon">⛅</div>
                <h3>Weather Forecast</h3>
                <p>
                The Weather Forecast feature leverages API data to provides, location-specific forecasts for up to seven days. It includes key metrics like temperature, precipitation, humidity, and wind speed, enabling farmers to plan activities such as planting, irrigation, and harvesting. With timely weather insights, farmers can mitigate risks and make proactive decisions to improve productivity.</p>               
                </div>
            </div>

            <section className="technology-section">
                <h2>Technologies Used</h2>
                <div className="tech-stack-card">
                <ul>
                    <li>
                        <strong>Frontend - Vite + React.js:</strong>Chosen for its fast build times and efficient development workflow, Vite ensures a smooth developer experience, while React.js provides a robust and reusable component-based architecture for creating a dynamic user interface.
                    </li>
                    <li>
                        <strong>Backend - Django:</strong> A high-level Python web framework that enables rapid development with clean and pragmatic designs. Django's powerful ORM and scalability make it an ideal choice for managing the backend of a data-intensive application.
                    </li>
                    <li>
                        <strong>Crop Recommendation Model - XGBoost Classifier:</strong> A highly efficient and scalable gradient-boosting algorithm that provides accurate crop predictions based on environmental and soil data.
                    </li>
                    <li>
                        <strong>Soil Condition Model - Artificial Neural Network:</strong> Utilized for its ability to capture complex relationships between soil properties, weather data, and location to deliver precise soil condition insights.
                    </li>
                    <li>
                        <strong>Irrigation Advice Model - Random Forest Regressor:</strong> Selected for its robustness in handling diverse data inputs to predict optimal irrigation amount and duration for crops.
                    </li>
                    <li>
                        <strong>Market Price Model - LSTM:</strong> A Long Short-Term Memory (LSTM) network is used for its effectiveness in analyzing sequential data like market trends and inflation rates to predict future crop prices.
                    </li>
                    <li>
                        <strong>Current Weather API - WeatherAPI:</strong> Provides real-time weather data, ensuring farmers receive up-to-date and accurate weather conditions crucial for day-to-day farming decisions.
                    </li>
                    <li>
                        <strong>Weather Forecast API - Visual Crossing Weather:</strong> Offers reliable weather forecasts for up to seven days, enabling proactive planning for farming activities like planting, irrigation, and harvesting.
                    </li>
                </ul>
                </div>
            </section>
            </div>
            <footer>
            <div className='aboutpage-footer'>
                <p>Weather Based farming Assisant</p>
            </div>
            </footer>
        </>
    )
}

export default About;

   