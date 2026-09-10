import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { CREATURES } from '../data/creatures'
import './UpsideDown.css'

const UpsideDown = () => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return (
      <section className="page-section ud-locked">
        <div className="ud-lock-icon">🔒</div>
        <span className="ud-eyebrow">GATE SEALED</span>
        <h2>The Upside Down is Locked</h2>
        <p>
          This world only opens for those who've crossed over.
          Sign in with your Hawkins credentials to unlock it.
        </p>
        <div className="ud-locked-actions">
          <Link to="/login" className="st-btn">Login to Enter</Link>
          <Link to="/signup" className="ud-secondary-link">Don't have an account? Sign up</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="page-section">
      <h2>Upside Down</h2>
      <p>
        Step into the shadow world where everything familiar is twisted and corrupted.
        Click any entity below to open its full file in a new tab — creatures, dangers,
        and mysteries that lurk beneath Hawkins.
      </p>
      <div className="page-grid">
        {CREATURES.map((creature) => (
          <Link
            key={creature.slug}
            to={`/creature/${creature.slug}`}
            className="page-card ud-creature-card"
            style={{ '--accent': creature.accent }}
            aria-label={`Open file for ${creature.name}`}
          >
            <h3>{creature.name}</h3>
            <p>{creature.summary}</p>
            <span className="ud-creature-link">Open file &rarr;</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default UpsideDown
