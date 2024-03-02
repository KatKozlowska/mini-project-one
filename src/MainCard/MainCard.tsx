import { LocationType } from "../types";
import "./MainCard.scss";

type MainCardProps = {
  weather: LocationType;
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

const MainCard = ({ weather }: MainCardProps) => {
  const currentHour = new Date().getHours();
  const greetingMessage = getGreetingMessage(currentHour);
  return (
    <div className="card">
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

  
    </div>
  );
};

export default MainCard;
