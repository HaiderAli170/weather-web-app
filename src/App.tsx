import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Sidebar from './components/sidebar';
import background from "./assets/backgroundcover.gif"
import backgroundrain from "./assets/backgrundrain.gif"
import backgroundCloud from "./assets/cloud.jpg"
import WeatherDetail from './components/weatherDetail';
function Weather() {
    const [weather, setWeather]:any = useState(null);
    const [conutry, setCountry]:any = useState('Pakistan');
  
 
    useEffect(() => {
        const apiKey = 'd8b2b56f5fc4801b1320cb8e00361db5';  
        const city = conutry;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        axios.get(url)
            .then(response => {
              console.log(response.data)
                setWeather(response.data);
            })
            .catch(error => {
              if (error.response) {
                  // The request was made and the server responded with a status code
                  console.error('Error response:', error.response.data);
                  console.error('Error status:', error.response.status);
              } else if (error.request) {
                  // The request was made but no response was received
                  console.error('Error request:', error.request);
              } else {
                  // Something happened in setting up the request that triggered an Error
                  console.error('Error message:', error.message);
              }
          });
    }, [conutry]);

    if (!weather) return <p>Loading...</p>;
    const backgroundMain = () => {
      const sky = weather?.weather?.map((item: any) => item.main);
      console.log(sky)
      if (sky && sky[0] === 'Clouds') {  // Check if sky has data and the first item is 'Clear'
        return backgroundCloud;
      }
      if (sky && sky[0] === 'Rain') {  // Check if sky has data and the first item is 'Clear'
        return backgroundrain;
      }
      return background;
    };
    return (
      <>
      <div className=" font-poppins flex justify-center w-full h-screen bg-cover bg-bottom bg-no-repeat" style={{ backgroundImage: `url(${backgroundMain()})` }}>
          {/* <Sidebar/> */}
          <div className='flex absolute top-0  h-screen  bg-transparent '>
          <WeatherDetail weather={weather} setCountry={setCountry}/>
          </div>

        </div>
      </>
    );
}

export default Weather;
