import React from 'react';
import { Wheat,Beaker, Droplet, Sun } from 'lucide-react';
import Header from '../Components/Header';
import '../pagestyles/CropDetails.css';
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

const CropDetails = () => {

  const CropInfo = [
     {
      name:"Bhindi",
      image:bhindi,
      description:"Bhindi, also known as okra, is a Bhindi, also known as okra or ladyfinger, is a warm-season vegetable that thrives in tropical and subtropical climates. To grow and cultivate bhindi, choose a well-drained, fertile soil with a pH between 6.5 and 7.5. The ideal temperature for bhindi cultivation ranges from 25°C to 35°C. Start by sowing seeds directly in the soil or transplanting seedlings after the last frost date. Maintain a row spacing of 30 to 45 cm, and space the plants 15 to 30 cm apart. Regular watering is crucial, especially during dry periods, but avoid waterlogging. Mulching helps retain moisture and control weeds. To maximize profit, practice timely harvesting, as bhindi is best harvested when the pods are tender, usually 2-3 days after flowering. Frequent harvesting promotes continuous production. Additionally, incorporating organic matter and using integrated pest management techniques can improve yield quality and reduce costs. Crop rotation with legumes can also help maintain soil fertility. Bhindi requires minimal maintenance, making it a profitable crop for farmers, especially when marketed in local and export markets.-season vegetable that grows best in tropical and subtropical climates. It requires well-drained sandy loam soil with a pH of 6.0-6.8. To cultivate bhindi, sow seeds directly in the field with a spacing of 30 cm between plants and 45-60 cm between rows. Ensure the soil is adequately moist during germination but avoid overwatering. Apply organic compost or nitrogen-rich fertilizers to promote healthy growth. Regularly weed the field and use mulching to retain soil moisture. Harvest the pods when they are tender and green, typically 5-7 days after flowering, for maximum market value."
     },
     {
      name:"Cabbage",
      image:cabbage,
      description:"Cabbage thrives in cool climateCabbage is a cool-season vegetable that grows best in well-drained, fertile soil with a pH between 6.0 and 6.8. The ideal temperature for cabbage cultivation ranges from 15°C to 20°C. To grow cabbage, start by sowing seeds indoors 6-8 weeks before the last frost date, or directly sow seeds outdoors in early spring. When transplanting, space cabbage plants about 45 cm apart in rows, with 60 cm between each row. Cabbage requires consistent moisture, so regular watering is essential, especially during dry spells, but avoid overwatering to prevent root rot. Mulching can help retain moisture and suppress weeds. To maximize profit, select disease-resistant cabbage varieties and practice crop rotation to prevent soil depletion and pest build-up. Cabbage should be harvested when the heads are firm and fully matured, typically 70 to 120 days after planting, depending on the variety. Timely harvesting prevents splitting and maximizes yield. Implementing integrated pest management and using organic fertilizers can enhance quality and reduce costs, ensuring better market prices. Cabbage is a high-value crop in both local and international markets, making it a profitable choice for farmers.s and well-drained loamy soil with a pH of 6.5-7.5. Start by sowing seeds in a nursery and transplanting seedlings to the field after 4-6 weeks, maintaining a spacing of 40-50 cm between plants and 60 cm between rows. Provide consistent watering, especially during the head formation stage, and ensure proper drainage to prevent root diseases. Apply balanced fertilizers rich in nitrogen, phosphorus, and potassium, and use crop rotation to minimize pest infestations. Harvest the heads when they are firm and compact, and store them in a cool, dry place for extended shelf life."
     },
     {
      name:"Carrot",
      image:carrot,
      description:"Carrots grow best in cool climates with Carrots are root vegetables that thrive in loose, well-drained, and fertile soil with a pH range of 6.0 to 6.8. They grow best in cool weather, with temperatures between 16°C and 24°C, and can be grown in both spring and fall. To grow carrots, sow seeds directly in the soil as they do not transplant well. Plant seeds in shallow furrows, spacing them about 2-4 cm apart, and thin seedlings to 5-8 cm apart once they have sprouted. Carrots require consistent watering to keep the soil evenly moist, especially during germination, but avoid waterlogging. To maximize profit, practice proper weed control, as carrots have a shallow root system and are sensitive to competition. Incorporating organic matter and using slow-release fertilizers can enhance soil fertility and promote better root development. Harvest carrots when they have reached the desired size, usually 70 to 80 days after sowing, depending on the variety. Harvesting at the right time prevents oversize or underdeveloped roots and ensures better quality. Regular pest monitoring and implementing organic pest control methods can minimize damage. Carrots can be stored for a long period after harvest, providing an extended selling window and enhancing their profitability in both fresh and processed markets., well-drained sandy loam soil and a pH of 6.0-7.0. Sow seeds directly in the field at a depth of 1-2 cm, maintaining a spacing of 5-8 cm between plants. Ensure consistent moisture levels during germination and early growth, but avoid overwatering. Apply potassium-rich fertilizers to improve root development and yield. Weed the field regularly to minimize competition for nutrients. Harvest carrots when the roots are firm, brightly colored, and reach the desired size, ensuring they are carefully pulled to prevent damage."
     },
     {
      name:"Coconut",
      image:coconut,
      description:"Coconut palms thrive in tropical Coconut trees thrive in tropical and subtropical climates, requiring a warm environment with temperatures ranging from 27°C to 30°C. They prefer well-drained, sandy loam soils with a pH of 5.0 to 8.0. Coconuts are typically grown from seeds, with the mature nuts being planted in a pit or directly into the soil. Plant coconut trees at a spacing of about 7-9 meters apart to allow adequate sunlight and air circulation. Coconuts need plenty of water, especially during the early stages of growth, but should not be waterlogged. Irrigation systems or regular rainfall of 1,500 to 2,500 mm annually are ideal for healthy tree development. To maximize profit, ensure the trees are well-maintained through proper fertilization with organic matter and micronutrients to support strong growth and high yield. Regular pest management is important, especially to control coconut pests like rhinoceros beetles and termites. The trees start producing coconuts after 6-10 years, with peak production occurring around 15-20 years. Harvest mature coconuts, which are typically ready for harvesting 12 months after flowering. Timely harvesting ensures high-quality copra (dried coconut meat) and fresh coconuts, which are in demand for both domestic consumption and export markets. With proper care and management, coconut cultivation can provide a long-term, sustainable, and profitable source of income. regions with sandy loam or alluvial soil and a pH range of 5.2-8.0. Plant seedlings in well-drained pits at a spacing of 7-10 meters to ensure sufficient sunlight and airflow. Apply organic manure and potassium-rich fertilizers to enhance fruiting. Regularly irrigate the palms, especially during dry spells, but avoid waterlogging. Protect the trees from pests like rhinoceros beetles and red palm weevils using biological controls. Harvest coconuts at different stages depending on their intended use, such as tender coconuts for water or mature ones for oil extraction."
     },
     {
      name:"Drumstick",
      image:drumstick,
      description:"Drumstick Drumstick, also known as moringa, is a fast-growing, drought-tolerant tree that thrives in tropical and subtropical climates. It prefers well-drained, sandy or loamy soils with a pH between 6.3 and 7.0. Drumsticks grow best in warm temperatures ranging from 25°C to 35°C. To grow drumsticks, plant seeds directly in the soil or use stem cuttings for propagation. The seeds are typically sown in holes 2-3 cm deep, with a spacing of about 1.5 to 2 meters between each tree. The trees require minimal water once established, but regular watering during the dry season helps ensure healthy growth. To maximize profit, ensure the trees receive adequate sunlight and fertilizer, as they have high nutrient requirements, especially nitrogen, phosphorus, and potassium. Drumsticks can be grown as a single crop or intercropped with other vegetables and fruits. The leaves, pods, and flowers of the drumstick tree are all highly nutritious and in demand, which increases the market value. Harvest drumsticks when the pods are young and tender, usually about 6-8 months after planting, to ensure the best quality and taste. Regular harvesting encourages continuous pod production, and the leaves can be harvested multiple times a year for their nutritional value. Proper pest control and disease management, especially for pests like aphids and caterpillars, are essential for maintaining healthy trees and maximizing yield. Drumstick cultivation is a highly profitable venture due to its multiple uses, both in the culinary and medicinal markets. grow well in warm climates with sandy loam soil and a pH of 6.2-7.0. Plant seeds or cuttings directly in the field at a spacing of 2.5-3 meters. Ensure regular irrigation during the initial growth phase, but mature trees are drought-tolerant and require less water. Apply organic manure or compost annually for healthy growth. Prune the trees regularly to promote branching and enhance fruit production. Harvest the drumsticks when they are green and tender, typically 60-70 days after flowering, to ensure high market demand and quality."
     },
     {
      name:"Ginger",
      image:ginger,
      description:"Ginger thrives in warm, humid Ginger is a tropical herb that thrives in warm, humid conditions and grows best in well-drained, loamy or sandy soil with a pH between 5.5 and 6.5. The ideal temperature for ginger cultivation ranges from 25°C to 30°C. To grow ginger, plant rhizomes (ginger seeds) in early spring after the last frost, ensuring the soil is warm and moist. The rhizomes should be planted 2-5 cm deep with enough space between them, typically 20-30 cm apart. Ginger requires a lot of water, especially during the growing season, but the soil should never be waterlogged. Regular irrigation is essential, especially in dry periods, but well-drained soil helps prevent root rot. To maximize profit, apply organic fertilizers and mulches to improve soil quality, retain moisture, and suppress weeds. Ginger benefits from partial shade, so it is often grown under taller crops, like banana or coconut, to protect it from direct sunlight. It is also crucial to practice crop rotation to prevent soil depletion and reduce pest and disease risks. Ginger takes about 8-10 months to mature, and harvesting should be done when the plant's leaves begin to yellow, indicating the rhizomes are fully developed. Timely harvesting ensures high-quality ginger with strong flavor and aroma. Ginger is highly profitable due to its high demand in the food, spice, and medicinal industries. Implementing good pest management practices, such as controlling aphids and rhizome rot, is important for maintaining healthy crops and maximizing yield. with well-drained loamy soil rich in organic matter and a pH of 5.5-6.5. Plant ginger rhizomes with healthy buds in furrows or pits, maintaining a spacing of 20-25 cm between plants. Cover the rhizomes with mulch to retain soil moisture and prevent weed growth. Regularly irrigate the crop, especially during dry periods, but avoid waterlogging. Apply organic compost or manure periodically to enhance growth. Harvest ginger 8-10 months after planting when the leaves turn yellow, ensuring proper curing before marketing for optimal value."
     },
     {
      name:"Green Chilly",
      image:green_chilly,
      description:"Green chilies thrive Green chilies are a warm-season crop that thrives in hot and sunny climates with temperatures ranging from 20°C to 35°C. They prefer well-drained, fertile soil with a pH between 6.0 and 7.0. To grow green chilies, start by sowing seeds indoors in seed trays or directly in the soil after the last frost, ensuring the soil temperature is above 20°C. Transplant seedlings when they are 6-8 weeks old, spacing them 30-40 cm apart in rows. Green chilies require consistent moisture, but overwatering can lead to root rot, so ensure the soil is well-drained. Regular watering, especially during dry spells, is essential for healthy fruit development. To maximize profit, provide the plants with organic fertilizers, rich in nitrogen, to promote strong vegetative growth and higher yields. Mulching around the plants helps retain soil moisture, prevent weed growth, and maintain a stable root environment. Green chilies are sensitive to pests like aphids, whiteflies, and thrips, so regular pest management is necessary. Harvest chilies when they reach the desired size and are still green, typically 60 to 90 days after planting, depending on the variety. Frequent harvesting encourages continuous fruiting and increases overall yield. Green chilies are in high demand in both local and international markets, especially for culinary and medicinal purposes. By adopting good cultivation practices, including proper irrigation, pest control, and timely harvesting, farmers can achieve a high yield and maximize profitability from chili cultivation. warm, tropical climates and require well-drained, fertile soil with a pH between 6.0 and 7.0. To cultivate green chilies, begin by sowing seeds in a nursery or seed tray, and transplant the seedlings to the field after 4-6 weeks when they are strong enough to handle. Maintain a spacing of 45-60 cm between rows and 30-45 cm between plants to allow proper airflow and sunlight penetration. Ensure consistent watering, especially during flowering and fruiting stages, but avoid waterlogging, which can lead to root rot. Regularly apply organic compost or balanced fertilizers rich in nitrogen, phosphorus, and potassium to boost plant growth and fruit yield. Use integrated pest management (IPM) techniques to control pests like aphids and fruit borers, and monitor for diseases such as powdery mildew. Harvest the chilies when they are green and mature for maximum market value. Timely harvesting and proper storage enhance shelf life, while targeting peak market demand ensures maximum profit."
     },
     {
      name:"Onion",
      image:onion,
      description:"Onions grow well in mild climates with Onions are a cool-season crop that thrives in well-drained, fertile soil with a pH between 6.0 and 7.5. The ideal temperature for onion cultivation ranges from 13°C to 24°C. To grow onions, start by sowing seeds indoors 8-10 weeks before the last frost date, or plant sets (small onion bulbs) directly in the soil after the danger of frost has passed. Onions prefer full sunlight, so choose a planting location that receives at least 6 hours of direct sunlight per day. Space onion plants about 10-15 cm apart in rows with a row spacing of 30-40 cm. Onions require consistent moisture, particularly during the growing season, but overwatering should be avoided to prevent bulb rot. Regular, light watering is ideal, especially during the bulbing phase. To maximize profit, apply organic fertilizers and compost to ensure the soil is rich in nutrients, and practice proper weed control, as onions are sensitive to competition. Onions are also vulnerable to pests like onion flies and fungal diseases, so integrated pest management strategies are crucial. Harvest onions when the tops begin to fall over and dry out, typically 90 to 120 days after planting, depending on the variety. Timely harvesting ensures that the bulbs are mature and have developed the best flavor and size. Curing onions by drying them in a warm, dry area for a few days after harvest helps extend their shelf life. Onions are highly versatile and in demand year-round, making them a profitable crop with strong market value in both fresh and processed forms.-drained sandy loam soil and a pH of 6.0-7.5. Sow seeds in a nursery and transplant seedlings after 4-6 weeks, keeping a spacing of 10-15 cm between plants. Ensure consistent watering but reduce irrigation during the bulb maturation stage to prevent rot. Apply nitrogen-based fertilizers early in the growing stage and phosphorus-potassium fertilizers during bulb development. Weed the fields regularly and protect the crop from pests like thrips. Harvest the bulbs when the tops begin to yellow and dry, and cure them in the sun before storage."
     },
     {
      name:"Rice",
      image:rice,
      description:"Rice is a staple crop that grows bRice is a staple cereal crop that grows best in warm, humid conditions, requiring temperatures between 25°C and 32°C for optimal growth. It thrives in flooded conditions, so it is typically cultivated in paddies or fields with controlled water levels. Rice prefers slightly acidic to neutral soil, with a pH between 5.5 and 7.0. To grow rice, start by preparing the land and ensuring it is properly flooded to create ideal conditions for the seedlings. Rice is commonly grown from seeds, which are first sown in nurseries and then transplanted into the flooded field when they are about 3-4 weeks old. Space the seedlings 15-20 cm apart to allow sufficient room for growth. Regular irrigation is crucial to maintain consistent water levels in the field throughout the growing season, particularly during the tillering and flowering stages. To maximize profit, ensure proper soil management by incorporating organic matter and balanced fertilizers, particularly nitrogen, phosphorus, and potassium. Control weeds and pests like rice weevil, rice bug, and stem borers through integrated pest management practices. Rice typically takes 3-6 months to mature, depending on the variety, and should be harvested when the grains are fully matured and the panicles are golden in color. Timely harvesting ensures high-quality grains and reduces losses due to shattering. Rice is a high-demand crop in both domestic and international markets, making it a vital source of income for farmers, especially when grown with efficient water management, pest control, and good post-harvest processing practices.est in areas with high rainfall, warm temperatures (20-30°C), and clayey or loamy soil with good water retention capacity. Depending on the variety, sow seeds directly or transplant seedlings after 4-6 weeks into flooded fields. Maintain a spacing of 20-25 cm between plants to allow optimal growth. Regularly monitor water levels and ensure proper drainage during the maturation stage. Apply nitrogen-rich fertilizers at different stages of growth for high yields. Harvest the rice when the grains are firm and the stalks turn golden brown."
     },
     {
      name:"Tomato",
      image:tomato,
      description:"Tomatoes are versatile crops that grow well in Tomatoes are warm-season vegetables that thrive in full sunlight and well-drained, fertile soil with a pH between 6.0 and 6.8. The ideal temperature for tomato cultivation ranges from 20°C to 30°C, with nighttime temperatures around 15°C to 20°C. To grow tomatoes, start by sowing seeds indoors 6-8 weeks before the last frost date, or purchase young plants from a nursery. Transplant seedlings outdoors when the soil has warmed up and all danger of frost has passed, typically when daytime temperatures are above 20°C. Space tomato plants about 45-60 cm apart in rows, ensuring proper airflow to reduce the risk of disease. Tomatoes require regular watering, especially during dry spells, but the soil should be well-drained to prevent waterlogging and root rot. To maximize profit, apply balanced fertilizers rich in phosphorus and potassium to promote strong root development and fruit production. Regular pruning and staking or caging help support plant growth, improve air circulation, and prevent disease. Tomatoes are susceptible to pests like aphids, whiteflies, and tomato hornworms, so integrated pest management practices are essential for maintaining healthy plants. Harvest tomatoes when they are fully ripe, firm, and have developed rich color. Timely harvesting ensures better quality and prevents over-ripening or cracking. Tomatoes have high market demand, both fresh and processed, making them a profitable crop when grown with proper care, pest management, and efficient harvesting techniques. climates with well-drained, fertile soil and a pH of 6.0-6.8. Sow seeds in a nursery and transplant healthy seedlings to the field after 4-5 weeks, maintaining a spacing of 45-60 cm between plants. Provide consistent irrigation, especially during flowering and fruiting stages, but avoid waterlogging. Support the plants with stakes or trellises to prevent fruit damage. Use nitrogen-rich fertilizers initially, followed by potassium and phosphorus-based fertilizers for fruit development. Harvest tomatoes when they are firm and uniformly colored for best quality."
     },
    ]

  return (
    <>
      <Header />
      <div className="agriculture-home-page">
        <header className="hero-section">
          <div className="hero-content">
            <h1>Empowering Young Farmers with Machine Learning</h1>
            <p>Discover how AI-driven insights revolutionize farming practices and boost productivity.</p>
          </div>
        </header>

        <section className="features-section">
          <div className="feature">
            <Wheat className="feature-icon" />
            <h3>Crop Recommendations</h3>
            <p>Predict the best crops to grow based on soil, weather, and market data.</p>
          </div>
          <div className="feature">
            <Beaker className="feature-icon" />
            <h3>Soil Monitoring</h3>
            <p>Track soil nutrients and moisture to provide useful insights to grow crops.</p>
          </div>
          <div className="feature">
            <Droplet className="feature-icon" />
            <h3>Irrigation advice</h3>
            <p>Optimize water usage with real-time irrigation scheduling.</p>
          </div>
          <div className="feature">
            <Sun className="feature-icon" />
            <h3>Climate Insights</h3>
            <p>Provides useful agriculture insights through climate analysis.</p>
          </div>
        </section>

        <section className="crop-details-section">
          <div className="crop-details">
            <h1>Crop Cultivation Guide</h1>
          <div className='crop-detail-outer'>
            {CropInfo.map((crop,index)=>(
              <div key={index} className='crop-detil-index'>
              <h2>{crop.name}</h2>
              <div className='crop-detail-card'>
                  <img src={crop.image} alt='crop-image' className='cropimage'></img>
                  <p>{crop.description}</p>
              </div>
              </div>
            ))}
          </div>
          </div>
        </section>

        <footer>
          <div className='homepage-footer'>
            <p>Weather Based farming Assisant</p>
          </div>
        </footer>
        </div>
    </>
  );
};

export default CropDetails;
