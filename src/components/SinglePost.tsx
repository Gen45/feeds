import { useParams, useSearchParams } from 'react-router-dom'
import Navigation from './Navigation'

function SinglePost () {
  const { id } = useParams()
  const [URLSearchParams] = useSearchParams()

  // Fetch the post data using the id

  return (
    <div>
      <Navigation />
      <h1>Post {id}</h1>
      <p>source: {URLSearchParams.get('source')}</p>
      {URLSearchParams.get('age') && <p>age: {URLSearchParams.get('age')}</p>}
    </div>
  )
}

export default SinglePost
