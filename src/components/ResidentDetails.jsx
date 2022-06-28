import { useLocation } from 'react-router-dom';
import {Card, Container} from 'react-bootstrap';

//components
import Navbar from './Navbar.jsx';

export default function ResidentDetails() {
  const location = useLocation();
  let {residentDetails, planet} = location.state;

  return (
    <Container className="p-3">
      <Navbar planetName={planet.planetName} residentsList={planet.residentsList}
      residentName={residentDetails.name} />
      <Container className="p-5">
        <Card style={{ width: '30rem' }} bg="warning">
          <Card.Title style={{textAlign: "center"}}>{residentDetails.name}</Card.Title>
          <Container>
            <ul>Birth-Year: {residentDetails.birthYear}</ul>
            <ul>Gender: {residentDetails.gender}</ul>
            <ul>Eye-Color: {residentDetails.eyeColor}</ul>
            <ul>Hair-Color: {residentDetails.hairColor}</ul>
            <ul>Height: {residentDetails.height} (cm)</ul>
            <ul>Mass: {residentDetails.mass} (kg)</ul>
            <ul>Skin-Color: {residentDetails.skinColor}</ul>
          </Container>
        </Card>
    </Container>
    </Container>
  )
}