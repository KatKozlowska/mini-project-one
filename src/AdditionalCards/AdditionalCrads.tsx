import { useEffect, useState } from "react";
import { LocationType } from "../types";
import "./AdditionalCrads.scss";
import { MyLocationType } from "../geolocation";

type AdditionalCardsProps = {
  locations: MyLocationType | undefined;
};

const AdditionalCards = ({ locations }: AdditionalCardsProps) => {
  const [weather, setWeather] = useState<LocationType>();

  const getWeather = async () => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=ca9cfe00e9bb45cf9ff133104240203&q=${locations?.latitude},${locations?.longitude}&days=8&aqi=yes&alerts=no`
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
    <div className="container">
      {weather && (
        <>
          <h1>7 Day Forecast</h1>
          <div className="small-card">
            <p>{weather.forecast.forecastday[1].date}</p>
            <img
              className="small-card__img"
              src={weather.forecast.forecastday[1].day.condition.icon}
            />
            <p>{weather.forecast.forecastday[1].day.avgtemp_c} °C</p>
          </div>
          <div className="small-card">
            <p>{weather.forecast.forecastday[2].date}</p>
            <img
              className="small-card__img"
              src={weather.forecast.forecastday[2].day.condition.icon}
            />
            <p>{weather.forecast.forecastday[2].day.avgtemp_c} °C</p>
          </div>
          <div className="small-card">
            <p>{weather.forecast.forecastday[3].date}</p>
            <img
              className="small-card__img"
              src={weather.forecast.forecastday[3].day.condition.icon}
            />
            <p>{weather.forecast.forecastday[3].day.avgtemp_c} °C</p>
          </div>
          <div className="small-card">
            <p>{weather.forecast.forecastday[4].date}</p>
            <img
              className="small-card__img"
              src={weather.forecast.forecastday[4].day.condition.icon}
            />
            <p>{weather.forecast.forecastday[4].day.avgtemp_c} °C</p>
          </div>
          <div className="small-card">
            <p>{weather.forecast.forecastday[5].date}</p>
            <img
              className="small-card__img"
              src={weather.forecast.forecastday[5].day.condition.icon}
            />
            <p>{weather.forecast.forecastday[5].day.avgtemp_c} °C</p>
          </div>
          <div className="small-card">
            <p>{weather.forecast.forecastday[6].date}</p>
            <img
              className="small-card__img"
              src={weather.forecast.forecastday[6].day.condition.icon}
            />
            <p>{weather.forecast.forecastday[6].day.avgtemp_c} °C</p>
          </div>
          <div className="small-card">
            <p>{weather.forecast.forecastday[7].date}</p>
            <img
              className="small-card__img"
              src={weather.forecast.forecastday[7].day.condition.icon}
            />
            <p>{weather.forecast.forecastday[7].day.avgtemp_c} °C</p>
          </div>
        </>
      )}
    </div>
  );
};

export default AdditionalCards;
