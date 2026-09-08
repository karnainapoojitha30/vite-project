import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Navbar.css'

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="navbar">
      <div className="nav-logo">STRANGER THINGS</div>

      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/characters" className={({ isActive }) => (isActive ? 'active' : '')}>
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink to="/episodes" className={({ isActive }) => (isActive ? 'active' : '')}>
            Episodes
          </NavLink>
        </li>
        <li>
          <NavLink to="/upside-down" className={({ isActive }) => (isActive ? 'active' : '')}>
            Upside Down
          </NavLink>
        </li>
        {isAuthenticated ? (
          <li>
            <button type="button" className="nav-logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" className={({ isActive }) => (isActive ? 'active' : '')}>
                Signup
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
