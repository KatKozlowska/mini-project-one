
import { LocationType } from "../types";
import "./AdditionalCrads.scss";


type AdditionalCardsProps = {
    information: LocationType;
}

const AdditionalCards = ({information}:AdditionalCardsProps) => {
    
    return <div className="container">
    
    <div className="small-card">
    <p>{information.forecast.forecastday[0].date}</p> 
    <img  className= "small-card__img"src={information.forecast.forecastday[0].day.condition.icon}/>
    <p>{information.forecast.forecastday[0].day.avgtemp_c} °C</p>
    </div>

    <div className="small-card">
    <p>{information.forecast.forecastday[1].date}</p> 
    <img className= "small-card__img" src={information.forecast.forecastday[1].day.condition.icon}/>
    <p>{information.forecast.forecastday[1].day.avgtemp_c} °C</p>
    </div>

    <div className="small-card">
    <p>{information.forecast.forecastday[2].date}</p> 
    <img className= "small-card__img" src={information.forecast.forecastday[2].day.condition.icon}/>
    <p>{information.forecast.forecastday[2].day.avgtemp_c} °C</p>
    </div>

    <div className="small-card">
    <p>{information.forecast.forecastday[3].date}</p> 
    <img className= "small-card__img" src={information.forecast.forecastday[3].day.condition.icon}/>
    <p>{information.forecast.forecastday[3].day.avgtemp_c} °C</p>
    </div>

    <div className="small-card">
    <p>{information.forecast.forecastday[4].date}</p> 
    <img className= "small-card__img" src={information.forecast.forecastday[4].day.condition.icon}/>
    <p>{information.forecast.forecastday[4].day.avgtemp_c} °C</p>
    </div>

    </div>
}

export default AdditionalCards ;