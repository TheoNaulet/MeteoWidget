import './App.css';
import React from 'react';
import Meteo from './Components/meteo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (  
    <Router>
      <Routes>
        <Route exact path='/meteo' element={<Meteo />} ></Route>
      </Routes>
    </Router>
  );
}
export default App;