import { useEffect, useState } from "react";
import AdditionalCards from "./AdditionalCards/AdditionalCrads"
import MainCard from "./MainCard/MainCard"
import { LocationType } from "./types";



const App = () => {

  const [w, setW] = useState<LocationType>();


  const getWeather = async () => {
    const response = await fetch("http://api.weatherapi.com/v1/forecast.json?key=ca9cfe00e9bb45cf9ff133104240203&q=51.5072,-0.1276&days=1&aqi=yes&alerts=no");
    const weatherData = await response.json();
    setW(weatherData);
    
    console.log(weatherData)
  };

  

  useEffect(() => {
    getWeather();
  }, []);


  return (
    <>
  { w && < MainCard weather={w} />}
  <AdditionalCards/>
    </>
  )
}

export default App
