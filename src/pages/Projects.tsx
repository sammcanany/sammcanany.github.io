import { FaGithub } from 'react-icons/fa'
import { SiUnrealengine, SiCplusplus, SiDotnet } from 'react-icons/si'
import { TbBrandCSharp, TbSql } from 'react-icons/tb'

const Projects = () => (
  <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 px-4 py-12">
    <h2 className="text-4xl font-bold mb-8 text-blue-800 dark:text-blue-400">
      Projects
    </h2>
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Project 1 */}
      <div className="bg-white/90 dark:bg-gray-800/95 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="flex items-center gap-3 mb-3">
          <SiUnrealengine
            className="text-2xl text-black dark:text-white"
            title="Unreal Engine"
          />
          <SiCplusplus className="text-2xl text-blue-500" title="C++" />
        </div>
        <h3 className="text-2xl font-semibold mb-2 text-blue-900 dark:text-blue-200">
          Realistic Biome Generator{' '}
          <span className="text-base text-gray-500 dark:text-gray-400">
            (2023)
          </span>
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Terrain generation plugin for Unreal Engine 5.1 using C++ and
          FastNoise.
        </p>
      </div>
      {/* Project 2 */}
      <div className="bg-white/90 dark:bg-gray-800/95 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="flex items-center gap-3 mb-3">
          <SiDotnet className="text-2xl text-purple-700" title="ASP.NET" />
          <TbBrandCSharp className="text-2xl text-blue-700" title="C#" />
          <TbSql className="text-2xl text-red-700" title="SQL Server" />
          <FaGithub
            className="text-2xl text-gray-800 dark:text-gray-200"
            title="GitHub"
          />
        </div>
        <h3 className="text-2xl font-semibold mb-2 text-blue-900 dark:text-blue-200">
          Plane Ticket Booking App{' '}
          <span className="text-base text-gray-500 dark:text-gray-400">
            (2022)
          </span>
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          ASP.NET web app with SQL Server backend and CRUD operations.
        </p>
        <a
          href="https://github.com/sammcanany/560Group21Project"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-blue-700 dark:text-blue-400 hover:underline font-medium"
        >
          <FaGithub className="inline mr-2" /> View on GitHub
        </a>
      </div>
    </div>
  </section>
)

export default Projects
