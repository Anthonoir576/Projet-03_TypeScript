import React        from 'react';
import { apiKey }   from './Components/Api/apiKey';



function App() {

  console.log(apiKey);
  

  return (
    <div className="App">
      <main>
        <div className="recherche">
          <input type="text" 
                 className="recherche-bar"
                 placeholder='  Recherche...' 
          />
        </div>
      </main>
    </div>
  );
}

export default App;
