import React from 'react';




const Location = () => {

    // Fonction
    const dateFonction = (dateDay?: any) => {      

        let mois    : string[]   = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let jours   : string []  = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
        let jour    = jours[new Date().getDate()];
        console.log(jour);
        console.log('-------');

        let date    = new Date().getDate();
        console.log(date);
        console.log('-------');

        let month  = mois[new Date().getMonth()];
        console.log(month);
        console.log('-------');

        let annee  = new Date().getFullYear();
        console.log(annee);
        console.log('-------');

        return `${jour} ${date} ${month} ${annee}`;
    };

    // Return
    return (
        <div className='location-container'>
            <div className="location">
                Montigny-en-Ostrevent
            </div>
            <div className="date">
                {` -  ${dateFonction()}  - `}    
            </div>
        </div>
    );
};

export default Location;