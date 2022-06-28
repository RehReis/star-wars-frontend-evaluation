import { useNavigate } from 'react-router-dom';

export default function Planet({planet}) {
  let navigate = useNavigate();

  const renderResidentsOnCLick = () => {
    let planetDetails = planet.toJSON();
    navigate("/planet-residents", {state: {residentsList: planetDetails.residents, planetName: planetDetails.name}})
  }

  return (
    <p onClick={renderResidentsOnCLick}>
      {planet.name}
    </p>
  )
}