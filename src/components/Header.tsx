import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    const initialDark =
      localStorage.theme === 'dark' ||
      (!localStorage.theme &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    setDarkMode(initialDark)
    root.classList.toggle('dark', initialDark)
  }, [])

  const toggleDarkMode = () => {
    const root = window.document.documentElement
    const newMode = !darkMode
    setDarkMode(newMode)
    root.classList.toggle('dark', newMode)
    localStorage.theme = newMode ? 'dark' : 'light'
  }

  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-gray-900 dark:from-gray-900 dark:via-gray-900 dark:to-black shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between relative">
        {/* Logo/Icon */}
        <Link to="/" className="flex items-center">
          <img
            src="/favicon.svg"
            alt="Logo"
            className="w-12 h-12 md:w-16 md:h-16 drop-shadow-lg"
            style={{ filter: 'drop-shadow(0 0 8px #3b82f6)' }}
          />
        </Link>
        {/* Centered Arrow for Mobile */}
        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden flex items-center justify-center text-4xl text-blue-400 drop-shadow-lg hover:text-yellow-300 dark:text-blue-300 dark:hover:text-yellow-400 transition"
          aria-label="Toggle navigation"
          style={{ width: '48px', height: '48px' }}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-4 md:gap-8">
            <li>
              <Link
                to="/"
                className="px-3 py-1 rounded-md text-blue-400 hover:bg-blue-700 hover:text-white transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/education"
                className="px-3 py-1 rounded-md text-blue-400 hover:bg-blue-700 hover:text-white transition"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                className="px-3 py-1 rounded-md text-blue-400 hover:bg-blue-700 hover:text-white transition"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="px-3 py-1 rounded-md text-blue-400 hover:bg-blue-700 hover:text-white transition"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="px-3 py-1 rounded-md text-blue-400 hover:bg-blue-700 hover:text-white transition"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="px-3 py-1 rounded-md text-blue-400 hover:bg-blue-700 hover:text-white transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="px-3 py-1 rounded-md text-blue-400 hover:bg-blue-700 hover:text-white transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* Dark mode toggle */}
        <button
          onClick={toggleDarkMode}
          className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center ml-4 text-2xl text-blue-400 hover:text-yellow-300 dark:text-blue-300 dark:hover:text-yellow-400 transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FiSun size={32} /> : <FiMoon size={32} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      <div className="md:hidden flex flex-col items-center">
        {menuOpen && (
          <nav className="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-black py-2">
            <ul className="flex flex-col items-center gap-2">
              <li>
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-md text-blue-400 hover:bg-blue-700 hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/education"
                  className="block px-3 py-2 rounded-md text-blue-400 hover:bg-blue-700 hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to="/experience"
                  className="block px-3 py-2 rounded-md text-blue-400 hover:bg-blue-700 hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="block px-3 py-2 rounded-md text-blue-400 hover:bg-blue-700 hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  className="block px-3 py-2 rounded-md text-blue-400 hover:bg-blue-700 hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block px-3 py-2 rounded-md text-blue-400 hover:bg-blue-700 hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block px-3 py-2 rounded-md text-blue-400 hover:bg-blue-700 hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
