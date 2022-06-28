import { useNavigate } from 'react-router-dom';

export default function Resident({ resident, planet }) {
  let navigate = useNavigate();

  const renderResidentDetailsOnCLick = () => {
    let residentDetails = resident.toJSON();
    navigate("/resident-details", {state: {residentDetails, planet}})
  }

  return (
    <p onClick={renderResidentDetailsOnCLick}>{resident.name}</p>
  )
}