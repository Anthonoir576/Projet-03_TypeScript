import React from 'react';




const Location = () => {

    const dateDay : string | number = `${new Date()}`;
 
    const dateFonction = (dateDay: string | number) => {
        return dateDay;
    };

    return (
        <div className='location-container'>
            <div className="location">
                Localisation
            </div>
            <div className="date">
            {`${dateFonction(dateDay)}`}    
            </div>
        </div>
    );
};

export default Location;