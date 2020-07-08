import React from 'react';

const Itinerary = ({ itinerary }) => {

    const {
        codigo_reserva,
        origen,
        destino,
        FechaSalida,
        HoraSalida,
        FechaLLegada,
        HoraLLegada,
        numero_vuelo,
        aerolinea_validadora
    } = itinerary;

    return (
        <div className="card">
            <p>Aerolínea</p>
            <p className="aerolinea">{ aerolinea_validadora }</p>
            <div></div>
            <div></div>
            <p>Salida</p>
            <p>{ FechaSalida }</p>
            <p>Llegada</p>
            <p>{ FechaLLegada }</p>
            <p>Hora</p>
            <p>{ HoraSalida }</p>
            <p>Hora</p>
            <p>{ HoraLLegada }</p>
            <p>No. de vuelo</p>
            <p>{ numero_vuelo }</p>
            <p>Ruta</p>
            <p>{ origen } - { destino }</p>
        </div>
    );
}

export default Itinerary;
