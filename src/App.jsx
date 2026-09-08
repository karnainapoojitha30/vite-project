
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Characters from './pages/Character'
import Episodes from './pages/Episode'
import UpsideDown from './pages/UpsideDown'
import CreatureDetail from './pages/CreatureDetail'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <Router>
      <Navbar />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/upside-down" element={<UpsideDown />} />
          <Route path="/creature/:slug" element={<CreatureDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
