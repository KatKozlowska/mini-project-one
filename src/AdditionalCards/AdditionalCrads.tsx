
import { LocationType } from "../types";


type AdditionalCardsProps = {
    information: LocationType[];
}

const AdditionalCards = ({information}:AdditionalCardsProps) => {
    return <div>
        {information.map((info) => <p>{info.forecast.forecastday[0].day.avgtemp_c}</p>)}
    
    </div>
}

export default AdditionalCards ;