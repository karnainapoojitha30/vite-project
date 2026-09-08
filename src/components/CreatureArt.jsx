import React, { useState } from 'react'

// Tries to load a real photo from /public/images/creatures/. If it's not
// there yet, falls back to a themed SVG placeholder so the page never
// looks broken — swap in a real file at the same path and it upgrades
// automatically, no code changes needed.
const CreatureArt = ({ src, alt, accent }) => {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="creature-art-placeholder" style={{ '--accent': accent }}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <radialGradient id="glow" cx="50%" cy="45%" r="60%">
              <stop offset="0%" stopColor={accent} stopOpacity="0.55" />
              <stop offset="100%" stopColor={accent} stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="200" height="200" fill="url(#glow)" />
          <circle cx="100" cy="90" r="34" fill="none" stroke={accent} strokeWidth="2" opacity="0.8" />
          <path
            d="M70 90 Q100 40 130 90 Q100 60 70 90 Z"
            fill="none"
            stroke={accent}
            strokeWidth="2"
            opacity="0.6"
          />
          <circle cx="100" cy="90" r="5" fill={accent} />
        </svg>
        <span>Image coming soon</span>
      </div>
    )
  }

  return (
    <img
      className="creature-art-image"
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
    />
  )
}

export default CreatureArt
