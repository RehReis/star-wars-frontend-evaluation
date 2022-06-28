//components
import Planet from './Planet.jsx';

export default function MainPage({planetsList}) {

  return (
    <div>
        {planetsList.map((planet, index) => (
          <Planet key={index} planet={planet}/>
        ))}
    </div>
  )
}