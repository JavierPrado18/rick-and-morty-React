import React from 'react';


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
        </div>
    );
};

export default Location