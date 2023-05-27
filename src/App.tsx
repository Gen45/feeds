import { Route, Routes } from 'react-router-dom'
import './App.css'
import NotFound from './components/NotFound'
import Home from './components/Home'
import SinglePost from './components/SinglePost'

function App () {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/posts/:id' element={<SinglePost />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
