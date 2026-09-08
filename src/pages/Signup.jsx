import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Signup = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !email || !password) {
      setError('Fill in every field to create your account.')
      return
    }

    // No backend yet — creating an account also logs the user in
    // and unlocks the Upside Down straight away.
    setError('')
    login()
    navigate('/upside-down')
  }

  return (
    <section className="page-section">
      <h2>Signup</h2>
      <p>Create an account for access to character notes, episodes history, and Upside Down secrets.</p>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="signup-name">Name</label>
        <input
          id="signup-name"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="signup-email">Email</label>
        <input
          id="signup-email"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="signup-password">Password</label>
        <input
          id="signup-password"
          type="password"
          placeholder="••••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="auth-message">{error}</p>}

        <button type="submit">Create Account</button>
      </form>
    </section>
  )
}

export default Signup
