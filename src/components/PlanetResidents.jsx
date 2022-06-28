import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import {fetchResidents} from '../services.js';
import {Container, Row} from 'react-bootstrap';

//components
import Navbar from './Navbar.jsx';
import Resident from './Resident.jsx';

export default function Residents() {
  const [residentsList, setResidents] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      let residents = await fetchResidents(location.state.planetName, location.state.residentsList);
      setResidents(residents);
    }

    fetchData();

  }, [location]);

  return (
    <Container className="p-3">
      <Navbar planetName={location.state.planetName}/>
      <Container className="p-5">
        <h5>Residents:</h5>
      </Container>
      <Row md={3}>
        {residentsList.map((resident, index) => (
          <Resident key={index} resident={resident} planet={location.state}/>
        ))}
      </Row>
    </Container>
  )
}