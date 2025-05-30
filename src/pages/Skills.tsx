import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaLinux,
  FaDocker,
  FaEthernet,
  FaGitAlt
} from 'react-icons/fa'
import { SiCplusplus, SiJavascript } from 'react-icons/si'
import { TbBrandCSharp, TbSql } from 'react-icons/tb'

const AZURE_CERT_LINK =
  'https://learn.microsoft.com/en-us/users/SamMcAnany-5350/credentials/B707D27C3800F988'
const AZURE_BADGE_IMG =
  'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg'

const Skills = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-blue-900 dark:to-black px-4 py-12">
      <h2 className="text-4xl font-bold mb-8 text-blue-800 dark:text-blue-300 tracking-tight drop-shadow">
        Skills &amp; Awards
      </h2>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Programming Languages */}
        <div className="relative group bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-xl p-8 border border-blue-200 dark:border-blue-700 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full">
          <div className="absolute -top-4 -left-4 bg-blue-700 text-white px-3 py-1 rounded-lg text-xs font-bold shadow group-hover:bg-yellow-400 group-hover:text-blue-900 transition-colors">
            Code
          </div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-900 dark:text-blue-100 mt-0">
            Programming Languages
          </h3>
          <ul className="grid grid-cols-2 gap-4 text-lg text-gray-900 dark:text-gray-100">
            <li className="flex items-center gap-2">
              <TbBrandCSharp className="text-blue-700" /> C#
            </li>
            <li className="flex items-center gap-2">
              <SiJavascript className="text-yellow-400" /> JavaScript
            </li>
            <li className="flex items-center gap-2">
              <FaHtml5 className="text-orange-600" /> HTML
            </li>
            <li className="flex items-center gap-2">
              <FaCss3Alt className="text-blue-400" /> CSS
            </li>
            <li className="flex items-center gap-2">
              <FaPython className="text-yellow-500" /> Python
            </li>
            <li className="flex items-center gap-2">
              <SiCplusplus className="text-blue-500" /> C++
            </li>
            <li className="flex items-center gap-2">
              <TbSql className="text-red-700" /> Transact-SQL
            </li>
            <li className="flex items-center gap-2">
              <FaJava className="text-red-600" /> Java
            </li>
          </ul>
        </div>
        {/* Computer Skills */}
        <div className="relative group bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-xl p-8 border border-blue-200 dark:border-blue-700 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full">
          <div className="absolute -top-4 -left-4 bg-blue-700 text-white px-3 py-1 rounded-lg text-xs font-bold shadow group-hover:bg-yellow-400 group-hover:text-blue-900 transition-colors">
            Tools
          </div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-900 dark:text-blue-100 mt-0">
            Computer Skills
          </h3>
          <ul className="space-y-3 text-lg text-gray-900 dark:text-gray-100">
            <li className="flex items-center gap-2">
              <FaLinux className="text-black dark:text-white" /> Linux
            </li>
            <li className="flex items-center gap-2">
              <FaGitAlt className="text-orange-600" /> Version Control{' '}
              <span className="text-gray-500 dark:text-gray-400">
                Git, GitHub
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaEthernet className="text-green-600" /> Networking
            </li>
            <li className="flex items-center gap-2">
              <FaDocker className="text-blue-500" /> Docker
            </li>
          </ul>
        </div>
        {/* Awards Box */}
        <div className="relative group bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-xl p-8 border border-blue-200 dark:border-blue-700 flex flex-col items-center justify-start transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl h-full">
          <div className="absolute -top-4 -left-4 bg-blue-700 text-white px-3 py-1 rounded-lg text-xs font-bold shadow group-hover:bg-yellow-400 group-hover:text-blue-900 transition-colors">
            Recognition
          </div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-900 dark:text-blue-100 mt-0 text-center">
            Awards
          </h3>
          <ul className="text-lg text-gray-900 dark:text-gray-100">
            <li className="flex items-center gap-2">
              🏅 Eagle Scout{' '}
              <span className="text-sm text-gray-500 dark:text-gray-400">
                (4/21/16)
              </span>
            </li>
          </ul>
        </div>
        {/* Azure Certificate Box */}
        <div className="col-span-1 md:col-span-3 relative group bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-xl p-8 border border-blue-400 dark:border-blue-500 flex flex-col items-center justify-start transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl mt-4">
          <div className="absolute -top-4 -left-4 bg-blue-700 text-white px-3 py-1 rounded-lg text-xs font-bold shadow group-hover:bg-yellow-400 group-hover:text-blue-900 transition-colors">
            Certification
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-900 dark:text-blue-100 mt-0 text-center">
            Microsoft Certification
          </h3>
          <a
            href={AZURE_CERT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 underline text-blue-700 dark:text-blue-400"
          >
            <img
              src={AZURE_BADGE_IMG}
              alt="Azure Fundamentals Badge"
              className="w-16 h-16 mb-2 object-contain"
              style={{ aspectRatio: '1 / 1' }}
            />
            <span className="font-medium text-lg">
              Microsoft Certified: Azure Fundamentals
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Issued: January 27, 2025
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Skills
