import {useState, useEffect} from 'react';

//components
import Planet from './Planet.jsx';

export default function MainPage({planetsList}) {
  const [searchedPlanets, setPlanets] = useState([]);

  useEffect(() => {
    setPlanets(planetsList);
  }, [planetsList])

  let searchPlanetsOnChange = (e) => {
    let searchedPlanet = e.target.value.toLowerCase();
    let searchedPlanetsList = planetsList.filter((planet) => planet.name.toLowerCase().includes(searchedPlanet));
    setPlanets(searchedPlanetsList);
  }

  return (
    <div>
      <input onChange={searchPlanetsOnChange} type="text" id="search-planet" placeholder="Search Planet" name="search-planet" />
      {searchedPlanets.map((planet, index) => (
        <Planet key={index} planet={planet}/>
      ))}
    </div>
  )
}