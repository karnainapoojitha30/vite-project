import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './Characters.css'

const CHARACTERS = [
  { id: 'eleven', name: 'Eleven', alias: 'El · Jane Hopper', role: 'Psychokinetic', x: 50, y: 14 },
  { id: 'mike', name: 'Mike Wheeler', alias: 'Party Leader', role: 'The Heart', x: 18, y: 34 },
  { id: 'will', name: 'Will Byers', alias: 'Lost in the Upside Down', role: 'The Sensor', x: 82, y: 34 },
  { id: 'dustin', name: 'Dustin Henderson', alias: 'Comic Genius', role: 'The Voice of Reason', x: 10, y: 62 },
  { id: 'lucas', name: 'Lucas Sinclair', alias: 'The Skeptic', role: 'The Guard', x: 90, y: 62 },
  { id: 'hopper', name: 'Jim Hopper', alias: 'Chief', role: 'Hawkins Police', x: 34, y: 86 },
  { id: 'joyce', name: 'Joyce Byers', alias: 'Christmas Lights', role: 'Never Stopped Looking', x: 66, y: 86 },
]

const CONNECTIONS = [
  ['eleven', 'mike'],
  ['eleven', 'hopper'],
  ['will', 'joyce'],
  ['will', 'mike'],
  ['mike', 'dustin'],
  ['mike', 'lucas'],
  ['joyce', 'hopper'],
  ['dustin', 'lucas'],
]

const Characters = () => {
  const [hovered, setHovered] = useState(null)
  const [selected, setSelected] = useState(null)
  const active = hovered || selected

  const find = (id) => CHARACTERS.find((c) => c.id === id)

  const grid = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } },
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

        {CHARACTERS.map((c) => (
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
            <div className="ch-name">{c.name}</div>
            <div className="ch-alias">{c.alias}</div>
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
