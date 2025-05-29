import { FaFileDownload, FaFolderOpen } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Home = () => (
  <section
    className="flex flex-col items-center justify-center text-center min-h-screen
    bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black
    px-4 transition-colors duration-500"
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="w-full flex flex-col items-center"
    >
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white sm:text-6xl mb-6">
        Hi, I'm{' '}
        <span className="text-blue-600 dark:text-blue-400">Sam McAnany</span>
      </h1>
      <p className="text-lg sm:text-xl max-w-2xl text-gray-700 dark:text-gray-300 mb-2">
        I'm a software engineer with a foundation in full-stack development, web technologies, and problem-solving.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href="/resume.pdf"
          download
          className="rounded-lg border border-transparent px-6 py-3 text-white font-medium
            bg-blue-800 hover:bg-blue-600 hover:border-blue-400 transition-all flex items-center gap-4 text-lg shadow"
        >
          Download Resume
          <FaFileDownload className="text-xl" />
        </a>
        <a
          href="/projects"
          className="px-6 py-3 bg-gray-800 hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-900
            dark:hover:bg-gray-300 text-white text-lg font-medium rounded-lg shadow
            flex items-center gap-2 transition-colors duration-300"
        >
          View Projects
          <FaFolderOpen className="text-xl" />
        </a>
      </div>
    </motion.div>
  </section>
)

export default Home
