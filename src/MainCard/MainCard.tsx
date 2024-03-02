import { LocationType } from "../types";


type MainCardProps = {
 weather: LocationType;
 
}

const MainCard = ({weather} : MainCardProps) => {
    return <div>

    <h2> Greeting </h2>
    <h3> Your name here </h3>
    <h4> {weather.location.name} </h4>

    <img src={weather.current.condition.icon}/> 
    <h1>{weather.current.temp_c} </h1>
    <h3> {weather.current.condition.text}</h3>

    </div>
}

export default MainCard ;