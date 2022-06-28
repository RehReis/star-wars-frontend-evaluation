import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import {fetchResidents} from '../services.js';

//components
import Resident from './Resident.jsx';

export default function Residents() {
  const [residentsList, setResidents] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      let residents = await fetchResidents(location.state.residentsList);
      setResidents(residents);
    }

    fetchData();

  }, [location.state.residentsList]);

  return (
    <div>
      <h5>Residents:</h5>
      {residentsList.map((resident, index) => (
        <Resident key={index} resident={resident} planet={location.state}/>
      ))}
    </div>
  )
}