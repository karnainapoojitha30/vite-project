import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)
const STORAGE_KEY = 'st_isAuthenticated'

export const AuthProvider = ({ children }) => {
  // Read any previous session on first render so a refresh doesn't
  // kick a logged-in user back out of the Upside Down.
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem(STORAGE_KEY) === 'true'
  )

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, isAuthenticated ? 'true' : 'false')
  }, [isAuthenticated])

  const login = () => setIsAuthenticated(true)
  const logout = () => setIsAuthenticated(false)

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used inside an AuthProvider')
  }
  return ctx
}
