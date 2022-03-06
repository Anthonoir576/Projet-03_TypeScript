
import React        from 'react';
import { apiKey }   from './Components/Api/apiKey';
import Location     from './Components/Location/Location';
import Meteo        from './Components/Meteo/Meteo';
import Search       from './Components/Search/Search';
import { useState } from 'react';



function App() {
  

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

    const [request, setRequest]   = useState('');
    const [meteo, setMeteo]       = useState({});

  return (
    <div className="App">
      <main>

        <div className="recherche">
            <input type="text" 
                  className="recherche-bar"
                  placeholder='  Recherche...' 
            />
          </div>

          <div className='location-container'>
            <div className="location">
                Montigny-en-Ostrevent
            </div>
            <div className="date">
                {` -  ${dateFonction()}  - `}    
            </div>
          </div>

          <div className='meteo-container'>
            <div className="temperature">
                25°
            </div>
            <div className="meteo">
                Sun
            </div>
          </div>

      </main>
    </div>
  );
}

export default App;
