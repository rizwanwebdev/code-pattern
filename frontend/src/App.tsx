import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={< Homepage />} />
        <Route path='*' element={< NotFoundPage />} />
      </Routes>

    </Router>
  )
}

export default App
