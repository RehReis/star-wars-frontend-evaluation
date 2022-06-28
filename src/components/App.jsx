import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {fetchPlanets} from '../services.js';

//components
import MainPage from './MainPage.jsx';
import PlanetResidents from './PlanetResidents.jsx';
import ResidentDetails from './ResidentDetails.jsx';

import '../styles/App.css';

function App() {
  const [planetsList, setPlanets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let planets = await fetchPlanets();
      console.log(planets);
      setPlanets(planets);
    }

    fetchData();

    return () => {
      console.log('unmounted');
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage planetsList={planetsList}/>} />
        <Route path="/planet-residents" element={<PlanetResidents />} />
        <Route path="/resident-details" element={<ResidentDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
