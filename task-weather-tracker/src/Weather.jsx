import { useState } from "react";
import { useEffect } from "react";

function Weather(){
    const apiKey = "0af5588215a1eae42c5da0435aab14dc";

    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const savedCity = localStorage.getItem('savedCity');

    
    async function handleSubmit(e){
        e.preventDefault();
        // city ? getWeatherData(city) : displayError("please enter a city yo");
        if (city){
            fetchWeather(city)
        }else{
            displayError("please enter a city yo");
        }
    };
    
    async function fetchWeather(city){
        try{
            const apiURL= `https://api.weatherstack.com/current?access_key=${apiKey}&query=${city}&units=f`; 
            const response = await fetch(apiURL);
            const data = await response.json(); 
            
            setWeatherData(data)
            localStorage.setItem("savedCity", city);
        }
        catch(error){
            console.log(error);
            displayError(error)
        }
    }
    // useEffect(()=> {
    //     if (savedCity){
    //         setCity(savedCity);
    //         fetchWeather(savedCity);

    //     }

    // }, [])
    
    console.log(weatherData)

    return(
        <div className="weather-container">
            <form className="weather-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter City Here:" value={city} onChange={e => setCity(e.target.value)}></input>
            </form>
            {weatherData && 
                <div className="weather-card">
                    <h3>{weatherData.location.name}, {weatherData.location.region}</h3>
                    <p>{weatherData.current.temperature}°F</p>
                    <p>{weatherData.current.humidity}% Humidity</p>
                    <p>"{weatherData.current.weather_descriptions[0]}"</p>
                </div>
            }
        </div>
    );
}

export default Weather;