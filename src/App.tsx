
import React        from 'react';
import { apiKey }   from './Components/Api/apiKey';
// import Location  from './Components/Location/Location';
// import Meteo     from './Components/Meteo/Meteo';
// import Search    from './Components/Search/Search';
import { useState } from 'react';
import axios        from 'axios';



function App() {
  

  // Fonction
  const dateFonction = (dateDay?: any) => {      

    let mois    : string[]   = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let jours   : string []  = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    let jour    = jours[new Date().getDate()];
    // console.log(jour);
    // console.log('-------');

    let date    = new Date().getDate();
    // console.log(date);
    // console.log('-------');

    let month  = mois[new Date().getMonth()];
    // console.log(month);
    // console.log('-------');

    let annee  = new Date().getFullYear();
    // console.log(annee);
    // console.log('-------');

    return `${jour} ${date} ${month} ${annee}`;
  };

  const [request, setRequest]      = useState('');
  const [meteo, setMeteo]:any      = useState({});
  

  const search = (e: any) => {

    if (e.key === "Enter") {
 
      axios({        
        method: 'GET',
        url: `${apiKey.base}weather?q=${request}&units=metric&APPID=${apiKey.key}`
      })
      .then((result :any) => {
        console.log('Saisi réussie - code 01!');

        setMeteo(result.data);   
        console.log(meteo);

      }).catch((err   :any) => {
        setRequest('');    
        // console.log(err);
      });
    };

  };



  return (
    <div className={(typeof meteo.main != 'undefined') ? ((meteo.main.temp > 16) ? 'App ete' : 'App') : ('App') }>
      <main>

        <div className="recherche">
            <input type="text" 
                  className="recherche-bar"
                  placeholder='  Recherche...'
                  onChange={(e :any) => {setRequest(e.target.value);}}
                  value={request}
                  onKeyPress={search} 
            />
          </div>

          <div className='location-container'>
            <div className="location">
              {(typeof meteo.name != 'undefined') ? (
                `${meteo.name}, ${meteo.sys.country}`
              ) : ('Saisir une ville...')}
            </div>
            <div className="date">
                {` -  ${dateFonction()}  - `}    
            </div>
          </div>

          <div className='meteo-container'>
            <div className="temperature">
            {(typeof meteo.name != 'undefined') ? (
              `${Math.round(meteo.main.temp)} °` 
            ) : (
              '°'
            )}
            </div>
            <div className="meteo">
              {(typeof meteo.weather[0].main != 'undefined') ? (
                `${meteo.weather[0].main}`
              ) : (
                ''
              )}
            </div>
          </div>

      </main>
    </div>
  );
}

export default App;
