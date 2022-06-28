import {useState, useEffect} from 'react';
import {Container, Row} from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store.js';

//components
import Navbar from './Navbar.jsx';
import Planet from './Planet.jsx';

export default observer(function MainPage() {
  const [searchedPlanets, setPlanets] = useState([]);
  const planetStore = useStore();

  useEffect(() => {
    setPlanets(planetStore.planetsList);
  }, [planetStore])

  let searchPlanetsOnChange = (e) => {
    let searchedPlanet = e.target.value.toLowerCase();
    let searchedPlanetsList = planetStore.planetsList.filter((planet) => planet.name.toLowerCase().includes(searchedPlanet));
    setPlanets(searchedPlanetsList);
  }

  return (
    <Container className="p-3">
      <Navbar/>
      <Container className="p-5">
        <input onChange={searchPlanetsOnChange} type="text" id="search-planet" placeholder="Search Planet" name="search-planet" />
      </Container>
      <Row md={4}>
        {searchedPlanets.map((planet, index) => (
          <Planet key={index} planet={planet}/>
        ))}
      </Row>
    </Container>
  )
});