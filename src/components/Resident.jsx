import { useNavigate } from 'react-router-dom';

export default function Resident({ resident, planet }) {
  let navigate = useNavigate();

  const renderResidentDetailsOnCLick = () => {
    navigate("/resident-details", {state: {residentDetails: resident}})
  }

  return (
    <p onClick={renderResidentDetailsOnCLick}>{resident.name}</p>
  )
}