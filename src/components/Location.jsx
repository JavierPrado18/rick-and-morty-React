import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const Location = ({location}) => {
    
    return (
        <div className='location'>
            <div className='location-item'>
                <h4>Nombre:</h4>
                <p>{location.name}</p>
            </div>
            <div className='location-item'>
                <h4>Tipo:</h4>
                <p>{location.type}</p>
            </div>
            <div className='location-item'>
                <h4>Dimensión:</h4>
                <p>{location.dimension}</p>
            </div>
            <div className='location-item'>
                <h4>Población</h4>
                <p>{location.residents?.length}</p>
            </div>

            {/* <ul>
                <li>Nombre:<h4>{location.name}</h4></li>
                <li>tipo:{location.type}</li>
                <li>Dimension: {location.dimension}</li>
                <li>poblacion: {location.residents?.length}</li>
            </ul>
            
            <h4><strong>Type: </strong></h4>
            <h4><strong>Dimension: </strong></h4>
            <h4><strong>Population: </strong></h4> */}
        </div>
    );
};

export default Location