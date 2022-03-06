
import React, { useState }      from 'react';
import { apiKey }               from '../Api/apiKey';



const Meteo = () => {


    const [request, setRequest]   = useState('');
    const [meteo, setMeteo]       = useState({});


    return (
        <div className='meteo-container'>
            <div className="temperature">
                25°
            </div>
            <div className="meteo">
                Sun
            </div>
        </div>
    );
};

export default Meteo;