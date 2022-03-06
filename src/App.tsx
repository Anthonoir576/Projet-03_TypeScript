
import React        from 'react';
import { apiKey }   from './Components/Api/apiKey';
import Location     from './Components/Location/Location';
import Meteo        from './Components/Meteo/Meteo';
import Search       from './Components/Search/Search';



function App() {


  console.log(apiKey);
  

  return (
    <div className="App">
      <main>
        <Search />
        <Location />
        <Meteo />
      </main>
    </div>
  );
}

export default App;
