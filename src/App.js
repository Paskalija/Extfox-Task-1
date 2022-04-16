import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import './app.css';


function App () {
  
  return (
       <div className="App">
       <Header />
       <BrowserRouter>
       <HomePage/>
       {/* <Slider/> */}
        </BrowserRouter>
        
      </div>

  );
}

export default App;