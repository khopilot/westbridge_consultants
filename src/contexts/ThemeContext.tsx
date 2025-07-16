import React, { createContext, useContext, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // ALWAYS USE LIGHT THEME
  const [theme] = useState<Theme>('light')

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', 'light')
    root.className = 'light'
    localStorage.setItem('theme', 'light')
    
    // Force light theme on body as well
    document.body.classList.add('light')
    document.body.classList.remove('dark')
  }, [])

  const toggleTheme = () => {
    // Disable theme toggling - always stay light
    return
  }

  const value = {
    theme,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}