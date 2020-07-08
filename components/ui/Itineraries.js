import React, { useState, useEffect } from 'react';
import Itinerary from './Itinerary';

const Itineraries = () => {
    const [itineraries, setItineraries] = useState([]);
    // console.log(itineraries);

    useEffect(() => {
        async function fetchData() {
            const iti = [];
            let response = await 
                fetch(`https://intranet.tiquetesytiquetes.com/testeos/r_controller.php?itinerarios=RK2V89`);
            let data = await response.json();
            iti.push( ...data.respuesta );

            response = await 
                fetch(`https://intranet.tiquetesytiquetes.com/testeos/r_controller.php?itinerarios=MO4737`);
            data = await response.json();
            iti.push( ...data.respuesta );

            console.log(iti);

            setItineraries(iti);
        }

        fetchData();
    }, []);
    return (
        <div className="card-container">
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
