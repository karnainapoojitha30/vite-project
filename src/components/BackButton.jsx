import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './BackButton.css'

const BackButton = () => {
  const location = useLocation()
  const navigate = useNavigate()

  if (location.pathname === '/') return null

  const fallbackPath = location.pathname.startsWith('/creature/') ? '/upside-down' : '/'

  const handleBack = () => {
    if (location.key !== 'default') {
      navigate(-1)
      return
    }

    navigate(fallbackPath)
  }

  return (
    <button type="button" className="back-button" onClick={handleBack} aria-label="Go back" title="Go back">
      <span className="back-button-arrow" aria-hidden="true">&#8592;</span>
      <span>Back</span>
    </button>
  )
}

export default BackButton