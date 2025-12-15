import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

interface HeaderProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export default function Header({
  mobileMenuOpen,
  setMobileMenuOpen,
}: HeaderProps): React.ReactElement {
  const navItems = ['Home', 'Projects', 'Skills', 'Contact']

  return (
    <header>
      <nav>
        <div className="logo">LLC Davis Automation</div>

        {/* Desktop Menu */}
        <div className="nav-desktop">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-item"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="nav-menu active">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-item"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
