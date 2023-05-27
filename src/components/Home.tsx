import { useParams } from 'react-router-dom'
import Navigation from './Navigation'

function Home () {
  const { id } = useParams()

  // Fetch the Home data using the id

  return (
    <div>
      <Navigation />
      
      <h1>Home {id}</h1>
      {/* Display the Home content */}
    </div>
  )
}

export default Home
