import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError('Enter your Hawkins credentials to continue.')
      return
    }

    // No backend yet — treat any filled-in credentials as a valid login,
    // unlock the Upside Down, and drop the user straight into it.
    setError('')
    login()
    navigate('/upside-down')
  }

  return (
    <section className="page-section">
      <h2>Login</h2>
      <p>Use your Hawkins credentials to access exclusive content and save your custom Stranger Things notes.</p>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          placeholder="••••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="auth-message">{error}</p>}

        <button type="submit">Sign In</button>
      </form>
    </section>
  )
}

export default Login
