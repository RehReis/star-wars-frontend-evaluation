import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store.js';

//components
import Navbar from './Navbar.jsx';
import Resident from './Resident.jsx';

export default observer(function Residents() {
  const [residentsList, setResidents] = useState([]);
  const location = useLocation();
  const planetStore = useStore();

  useEffect(() => {
    planetStore.fetchResidentsList(location.state.planetName, location.state.residentsList);
    setResidents(planetStore.residentsList);
  }, [location, planetStore]);

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
});