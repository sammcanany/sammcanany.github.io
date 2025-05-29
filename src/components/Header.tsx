import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { FiSun, FiMoon } from 'react-icons/fi'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)

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
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-black shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo/Name */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-white drop-shadow-lg"
        >
          Sam McAnany
        </Link>
        {/* Navigation */}
        <nav className="flex-1 flex justify-center">
          <ul className="flex gap-4 md:gap-8">
            <li>
              <Link
                to="/"
                className="px-3 py-1 rounded-md text-gray-200 hover:bg-blue-700 hover:text-white transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/education"
                className="px-3 py-1 rounded-md text-gray-200 hover:bg-blue-700 hover:text-white transition"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                className="px-3 py-1 rounded-md text-gray-200 hover:bg-blue-700 hover:text-white transition"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="px-3 py-1 rounded-md text-gray-200 hover:bg-blue-700 hover:text-white transition"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="px-3 py-1 rounded-md text-gray-200 hover:bg-blue-700 hover:text-white transition"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="px-3 py-1 rounded-md text-gray-200 hover:bg-blue-700 hover:text-white transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* Dark mode toggle */}
        <button
          onClick={toggleDarkMode}
          className="ml-4 text-2xl text-blue-200 hover:text-yellow-300 dark:text-gray-300 dark:hover:text-yellow-400 transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </header>
  )
}

export default Header
