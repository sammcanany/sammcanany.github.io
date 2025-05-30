import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-gray-900 dark:from-gray-900 dark:via-gray-900 dark:to-black text-blue-200 dark:text-blue-200 p-4 text-center flex flex-col items-center gap-2 shadow-t">
    <div className="flex justify-center gap-8 mb-1">
      <a
        href="https://github.com/sammcanany"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition-colors"
        aria-label="GitHub"
      >
        <FaGithub className="text-2xl" />
      </a>
      <a
        href="https://linkedin.com/in/samuel-mcanany"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition-colors"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="text-2xl" />
      </a>
    </div>
    <p className="text-sm tracking-wide">
      &copy; 2025{' '}
      <span className="text-blue-400 font-semibold">Sam McAnany</span>
    </p>
  </footer>
)

export default Footer
