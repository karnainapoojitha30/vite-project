import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Characters.css'

const CHARACTERS = [
  { id: 'eleven', name: 'Eleven', alias: 'El · Jane Hopper', role: 'Psychokinetic' },
  { id: 'mike', name: 'Mike Wheeler', alias: 'Party Leader', role: 'The Heart' },
  { id: 'will', name: 'Will Byers', alias: 'Lost in the Upside Down', role: 'The Sensor' },
  { id: 'dustin', name: 'Dustin Henderson', alias: 'Comic Genius', role: 'The Voice of Reason' },
  { id: 'lucas', name: 'Lucas Sinclair', alias: 'The Skeptic', role: 'The Guard' },
  { id: 'max', name: 'Max Mayfield', alias: 'Zoomer', role: 'Runs the Fastest' },
  { id: 'hopper', name: 'Jim Hopper', alias: 'Chief', role: 'Hawkins Police' },
  { id: 'joyce', name: 'Joyce Byers', alias: 'Christmas Lights', role: 'Never Stopped Looking' },
  { id: 'steve', name: 'Steve Harrington', alias: 'Former King of Hawkins High', role: 'Reluctant Babysitter' },
  { id: 'nancy', name: 'Nancy Wheeler', alias: 'Investigative Reporter', role: 'Sharp Shooter' },
  { id: 'robin', name: 'Robin Buckley', alias: 'Scoops Ahoy', role: 'Code Breaker' },
]

const CONNECTIONS = [
  ['eleven', 'mike'],
  ['eleven', 'hopper'],
  ['will', 'joyce'],
  ['will', 'mike'],
  ['mike', 'dustin'],
  ['mike', 'lucas'],
  ['mike', 'nancy'],
  ['joyce', 'hopper'],
  ['dustin', 'lucas'],
  ['lucas', 'max'],
  ['mike', 'max'],
  ['steve', 'robin'],
  ['steve', 'nancy'],
  ['steve', 'dustin'],
]

// Auto-arranges any number of characters evenly around an ellipse,
// centered in the board, with enough margin from the edges that a
// card is never clipped by the board's overflow, no matter how many
// characters are added.
const layout = (count) => {
  const cx = 50
  const cy = 50
  const rx = 36
  const ry = 32
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2
    return {
      x: Math.round((cx + rx * Math.cos(angle)) * 10) / 10,
      y: Math.round((cy + ry * Math.sin(angle)) * 10) / 10,
    }
  })
}

const POSITIONS = layout(CHARACTERS.length)
const CHARACTERS_POSITIONED = CHARACTERS.map((c, i) => ({ ...c, ...POSITIONS[i] }))

const Characters = () => {
  const [hovered, setHovered] = useState(null)
  const [selected, setSelected] = useState(null)
  const active = hovered || selected

  const find = (id) => CHARACTERS_POSITIONED.find((c) => c.id === id)

  const grid = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04 } },
  }
  const item = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 14 } },
  }

  return (
    <section className="page-section ch-section">
      <div className="ch-header">
        <span className="ch-eyebrow">MISSING &amp; CONNECTED</span>
        <h2>Characters</h2>
        <p>Hover a face on the board to trace how the Party is connected.</p>
      </div>

      <motion.div className="ch-board" variants={grid} initial="hidden" animate="visible">
        <svg className="ch-svg">
          {CONNECTIONS.map(([a, b], i) => {
            const A = find(a)
            const B = find(b)
            if (!A || !B) return null
            const hot = active && (active === a || active === b)
            return (
              <line
                key={i}
                className={`ch-string ${hot ? 'hot' : ''}`}
                x1={`${A.x}%`}
                y1={`${A.y}%`}
                x2={`${B.x}%`}
                y2={`${B.y}%`}
              />
            )
          })}
        </svg>

        {CHARACTERS_POSITIONED.map((c) => (
          <motion.div
            key={c.id}
            variants={item}
            className={`ch-card ${selected === c.id ? 'active' : ''}`}
            style={{ left: `${c.x}%`, top: `${c.y}%` }}
            onMouseEnter={() => setHovered(c.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected(selected === c.id ? null : c.id)}
          >
            <span className="ch-pin" />
            <div className="ch-avatar">{c.name.charAt(0)}</div>
            <div className="ch-name" title={c.name}>{c.name}</div>
            <div className="ch-alias" title={c.alias}>{c.alias}</div>
          </motion.div>
        ))}
      </motion.div>

      <div className="ch-detail">
        {active ? (
          <>
            <h3>{find(active).name}</h3>
            <p>{find(active).role}</p>
          </>
        ) : (
          <p className="ch-hint">Click a photo to pin your selection · hover to trace the string</p>
        )}
      </div>
    </section>
  )
}

export default Characters
