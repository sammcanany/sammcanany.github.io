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

const Skills = () => (
  <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 px-4 py-12">
    <h2 className="text-4xl font-bold mb-8 text-blue-800 dark:text-blue-300">
      Skills & Awards
    </h2>
    <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Programming Languages */}
      <div className="bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <h3 className="text-2xl font-semibold mb-4 text-blue-900 dark:text-blue-100">
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
      {/* Computer Skills & Awards */}
      <div className="bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-300 flex flex-col gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-900 dark:text-blue-100">
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
        <div>
          <h3 className="text-2xl font-semibold mb-2 text-blue-900 dark:text-blue-100">
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
      </div>
    </div>
  </section>
)

export default Skills
