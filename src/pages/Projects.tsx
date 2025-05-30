import { FaGithub, FaReact } from 'react-icons/fa'
import {
  SiTypescript,
  SiVite,
  SiTailwindcss,
  SiUnrealengine,
  SiCplusplus,
  SiDotnet
} from 'react-icons/si'
import { TbBrandCSharp, TbSql } from 'react-icons/tb'

const Projects = () => (
  <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-blue-900 dark:to-black px-4 py-12">
    <h2 className="text-4xl font-bold mb-8 text-blue-800 dark:text-blue-400 tracking-tight drop-shadow">
      Projects
    </h2>
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Project 1: Portfolio App */}
      <div className="relative group bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-xl p-8 border border-blue-200 dark:border-blue-700 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="absolute -top-4 -left-4 bg-blue-700 text-white px-3 py-1 rounded-lg text-xs font-bold shadow group-hover:bg-yellow-400 group-hover:text-blue-900 transition-colors">
          You're Here!
        </div>
        <div className="flex items-center gap-3 mb-3">
          <FaReact className="text-2xl text-blue-500" title="React" />
          <SiTypescript className="text-2xl text-blue-700" title="TypeScript" />
          <SiVite className="text-2xl text-purple-500" title="Vite" />
          <SiTailwindcss
            className="text-2xl text-cyan-500"
            title="Tailwind CSS"
          />
          <FaGithub
            className="text-2xl text-gray-800 dark:text-gray-200"
            title="GitHub"
          />
        </div>
        <h3 className="text-2xl font-semibold mb-2 text-blue-900 dark:text-blue-200">
          Portfolio Website{' '}
          <span className="text-base text-gray-500 dark:text-gray-400">
            (2025)
          </span>
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          This portfolio site, built with React, TypeScript, Vite, TanStack
          Router, Query, and Form, features a contact form and GitHub Pages
          deployment.
        </p>
        <div className="flex flex-wrap gap-4 mt-2">
          <a
            href="https://github.com/sammcanany/sammcanany.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700 text-white hover:bg-yellow-400 hover:text-blue-900 dark:hover:bg-yellow-400 dark:hover:text-blue-900 font-medium shadow transition-colors"
          >
            <FaGithub /> View on GitHub
          </a>
        </div>
      </div>
      {/* Project 2 */}
      <div className="relative group bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="absolute -top-4 -left-4 bg-gray-700 text-white px-3 py-1 rounded-lg text-xs font-bold shadow group-hover:bg-yellow-400 group-hover:text-blue-900 transition-colors">
          Unreal Engine
        </div>
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
      {/* Project 3*/}
      <div className="relative group bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="absolute -top-4 -left-4 bg-purple-700 text-white px-3 py-1 rounded-lg text-xs font-bold shadow group-hover:bg-yellow-400 group-hover:text-blue-900 transition-colors">
          ASP.NET
        </div>
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
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          ASP.NET web app with SQL Server backend and CRUD operations.
        </p>
        <a
          href="https://github.com/sammcanany/560Group21Project"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-700 text-white hover:bg-yellow-400 hover:text-blue-900 dark:hover:bg-yellow-400 dark:hover:text-blue-900 font-medium shadow transition-colors"
        >
          <FaGithub /> View on GitHub
        </a>
      </div>
    </div>
  </section>
)

export default Projects
