import { useLocation } from 'react-router-dom';

export default function ResidentDetails() {
  const location = useLocation();
  let {residentDetails} = location.state;

  return (
    <div>
    <h3>{residentDetails.name}</h3>
    <ul>Birth-Year: {residentDetails.birth_year}</ul>
    <ul>Gender: {residentDetails.gender}</ul>
    <ul>Eye-Color: {residentDetails.eye_color}</ul>
    <ul>Hair-Color: {residentDetails.hair_color}</ul>
    <ul>Height: {residentDetails.height}</ul>
    <ul>Mass: {residentDetails.mass}</ul>
    <ul>Skin-Color: {residentDetails.skin_color}</ul>
    </div>
  )
}