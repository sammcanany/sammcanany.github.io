import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => (
  <footer className="fixed bottom-0 left-0 w-full z-50 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700 dark:from-black dark:via-gray-900 dark:to-gray-800 text-gray-200 p-4 text-center flex flex-col items-center gap-2 shadow-t">
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
