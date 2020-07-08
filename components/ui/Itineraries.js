import React, { useState } from 'react';
import Itinerary from './Itinerary';

const respuesta = [
    {
        codigo_reserva: "RK2V89",
        origen: "FLA",
        destino: "BOG",
        FechaSalida: "2018-03-14",
        HoraSalida: "13:48",
        FechaLLegada: "2018-03-14",
        HoraLLegada: "15:18",
        numero_vuelo: "9250",
        aerolinea_validadora: "AV"
    },
    {
        codigo_reserva: "RK2V89",
        origen: "BOG",
        destino: "BGA",
        FechaSalida: "2018-03-14",
        HoraSalida: "17:25",
        FechaLLegada: "2018-03-14",
        HoraLLegada: "18:31",
        numero_vuelo: "9480",
        aerolinea_validadora: "AV"
    }
];

const Itineraries = () => {
    const [itineraries, setItineraries] = useState(respuesta);
    console.log(itineraries);
    return (
        <div>
            {/* <h1>Itinerarios</h1> */}
            {
                itineraries.map( i => (
                    <Itinerary
                        key={ i.numero_vuelo }
                        itinerary={ i }
                    />
                ))
            }
        </div>
    );
}

export default Itineraries;
