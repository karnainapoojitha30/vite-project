import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getCreatureBySlug } from '../data/creatures'
import CreatureArt from '../components/CreatureArt'
import './CreatureDetail.css'

const CreatureDetail = () => {
  const { slug } = useParams()
  const { isAuthenticated } = useAuth()
  const creature = getCreatureBySlug(slug)

  if (!isAuthenticated) {
    return (
      <section className="page-section ud-locked">
        <div className="ud-lock-icon">🔒</div>
        <span className="ud-eyebrow">GATE SEALED</span>
        <h2>The Upside Down is Locked</h2>
        <p>Sign in with your Hawkins credentials to view this file.</p>
        <div className="ud-locked-actions">
          <Link to="/login" className="st-btn">Login to Enter</Link>
        </div>
      </section>
    )
  }

  if (!creature) {
    return (
      <section className="page-section">
        <h2>Unknown Entity</h2>
        <p>No records exist for this creature. It may still be out there in the dark.</p>
        <Link to="/upside-down" className="ud-secondary-link">Back to the Upside Down</Link>
      </section>
    )
  }

  return (
    <section className="page-section creature-detail" style={{ '--accent': creature.accent }}>
      <Link to="/upside-down" className="ud-secondary-link creature-back">
        Back to the Upside Down
      </Link>

      <div className="creature-hero">
        <CreatureArt src={creature.image} alt={creature.name} accent={creature.accent} />
        <div className="creature-heading">
          <span className="ud-eyebrow">{creature.tagline}</span>
          <h2>{creature.name}</h2>
          <p>{creature.summary}</p>
        </div>
      </div>

      <h3 className="creature-section-title">Entity Profile</h3>
      <div className="creature-stats">
        {creature.stats.map((stat) => (
          <div className="creature-stat" key={stat.label}>
            <span className="creature-stat-label">{stat.label}</span>
            <span className="creature-stat-value">{stat.value}</span>
          </div>
        ))}
      </div>

      <h3 className="creature-section-title">Field Notes</h3><br></br>
      <div className="creature-body">
        {creature.details.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}

export default CreatureDetail
