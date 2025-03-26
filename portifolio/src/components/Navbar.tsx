import React, { useState } from 'react'
import './Navbar.css'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (section: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <button onClick={() => handleNavClick('home')} className="nav-button">
            Bruno Souza
          </button>
        </div>
        <div className="navbar-right">
          <button 
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <button onClick={() => handleNavClick('home')} className="navbar-link">Home</button>
        <button onClick={() => handleNavClick('about')} className="navbar-link">About</button>
        <button onClick={() => handleNavClick('projects')} className="navbar-link">Projects</button>
        <button onClick={() => handleNavClick('contact')} className="navbar-link">Contact</button>
      </div>
    </nav>
  )
}

export default Navbar 