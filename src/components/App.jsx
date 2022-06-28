import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import {useEffect} from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store.js';

//components
import MainPage from './MainPage.jsx';
import PlanetResidents from './PlanetResidents.jsx';
import ResidentDetails from './ResidentDetails.jsx';

import '../styles/App.scss';

export default observer(function App() {
  const planetStore = useStore();

  useEffect(() => {
    planetStore.fetchPlanetsList();
  }, [planetStore]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/planet-residents" element={<PlanetResidents />} />
        <Route path="/resident-details" element={<ResidentDetails />} />
      </Routes>
    </Router>
  );
});

