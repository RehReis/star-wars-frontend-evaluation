import { useNavigate } from 'react-router-dom';

export default function Planet({planet}) {
  let navigate = useNavigate();

  const renderResidentsOnCLick = () => {
    navigate("/planet-residents", {state: {residentsList: planet.residents}})
  }

  return (
    <p onClick={renderResidentsOnCLick}>
      {planet.name}
    </p>
  )
}