import { useParams } from 'react-router-dom'
import Navigation from './Navigation'

function NotFound () {
  const { id } = useParams()

  // Fetch the NotFound data using the id

  return (
    <div>
      <Navigation />
      <h1>NotFound {id}</h1>
      {/* Display the NotFound content */}
    </div>
  )
}

export default NotFound
