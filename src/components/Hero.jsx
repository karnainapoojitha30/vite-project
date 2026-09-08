import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)
  const navigate = useNavigate()

  const handleEnterClick = () => {
    navigate('/upside-down')
  }
  const revealRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const reveal = revealRef.current

    let mouseX = 0
    let mouseY = 0
    let x = 0
    let y = 0
    let visible = false

    const animate = () => {
      x += (mouseX - x) * 0.05
      y += (mouseY - y) * 0.05

      reveal.style.setProperty('--x', `${x}px`)
      reveal.style.setProperty('--y', `${y}px`)

      requestAnimationFrame(animate)
    }

    animate()

    const move = (e) => {
      const rect = hero.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top

      if (!visible) {
        visible = true
        reveal.classList.add('active')
      }
    }

    const leave = () => {
      visible = false
      reveal.classList.remove('active')
    }

    hero.addEventListener('mousemove', move)
    hero.addEventListener('mouseleave', leave)

    return () => {
      hero.removeEventListener('mousemove', move)
      hero.removeEventListener('mouseleave', leave)
    }
  }, [])

  return (
    <div className="hero" ref={heroRef}>
      {/* Dialogue boxes render fully visible immediately — only the
          background (via .fire-reveal below) carries a mouse effect. */}
      <div className="hero-content">
        <div className="left">
          <h1 className="st-title">
            STRANGER<br />THINGS
          </h1>
          <p className="st-desc">
            When the lights begin to flicker and reality bends,
            a hidden world awakens beneath Hawkins.
            Some doors, once opened, can never be closed.
          </p>
          <button className="st-btn active" onClick={handleEnterClick}>
            Enter the Upside Down
          </button>
        </div>

        <div className="right">
          <h1 className="st-title">The Mind Flayer</h1>
          <p className="st-text">
            Shadows creep from another dimension, consuming everything in their path.
            Unravel the mystery and face the darkness head-on.
            Will you survive the terror of the Upside Down?
          </p>
        </div>
      </div>

      <div className="fire-reveal" ref={revealRef}></div>
    </div>
  )
}

export default Hero
