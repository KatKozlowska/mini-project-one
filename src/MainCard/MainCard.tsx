import { useEffect, useState } from "react";
import { MyLocationType } from "../geolocation";
import { LocationType } from "../types";
import "./MainCard.scss";

type MainCardProps = {
  locations: MyLocationType | undefined;
 
};

const getGreetingMessage = (hour: number): string => {
  if (hour < 12) {
    return "Good Morning";
  }

  if (hour < 18) {
    return "Good Afternoon";
  }

  return "Good Evening";
};

const MainCard = ({ locations }: MainCardProps) => {
  const currentHour = new Date().getHours();
  const greetingMessage = getGreetingMessage(currentHour);
  const [weather, setWeather] = useState<LocationType>();

  const getWeather = async () => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=ca9cfe00e9bb45cf9ff133104240203&q=${locations?.latitude},${locations?.longitude}&days=5&aqi=yes&alerts=no`
    );
    const weatherData = await response.json();
    setWeather(weatherData);
  };

  useEffect(() => {
    if (location) {
      getWeather();
    }
  }, [location]);

  return (
    <div className="card">
     
      {weather && (
        <>
          <div className="  card__greeting">
            <p>{greetingMessage} </p>
            <p> Kat</p>
          </div>
          <div className=" card__info">
            <h2> {weather.location.name} </h2>
            <img src={weather.current.condition.icon} />
            <h1>{weather.current.temp_c} °C </h1>
            <h3> {weather.current.condition.text}</h3>
          </div>
          <div>
          
            <p>Feels like {weather.current.feelslike_c} °C</p>
            <p>Wind {weather.current.gust_mph} mph</p>
            <p>Humidity {weather.current.humidity} %</p>
            <p>UV index {weather.current.uv}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default MainCard;
