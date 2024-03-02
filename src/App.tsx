import { FormEvent, useEffect, useState } from "react";
import MainCard from "./MainCard/MainCard";
import { LocationType } from "./types";
import SearchBox from "./searchBox/SearchBox";
import "./App.scss";

const App = () => {
  const [w, setW] = useState<LocationType>();
  const [search, setSearch] = useState<string>("London");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };


  const getWeather = async () => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=ca9cfe00e9bb45cf9ff133104240203&q=${search}&days=2&aqi=yes&alerts=no`
    );
    const weatherData = await response.json();
    setW(weatherData);
  };

  useEffect(() => {
    getWeather();
    
  }, [search]);

  return (
    <div className="app">
      <nav>
      <SearchBox
        search={search}
        placeholder={"Search location"} 
        handleInput={handleInput}     />
        </nav>
      {w && <MainCard weather={w} />}
    </div>
  );
};

export default App;
