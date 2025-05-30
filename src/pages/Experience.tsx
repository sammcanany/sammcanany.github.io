const Experience = () => (
  <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-blue-900 dark:to-black px-4 py-12">
    <h2 className="text-4xl font-bold mb-8 text-blue-800 dark:text-blue-400 tracking-tight drop-shadow">
      Work Experience
    </h2>
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* HCI Energy */}
      <div className="relative group bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-xl p-10 border border-blue-200 dark:border-blue-700 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="absolute -top-4 -left-4 bg-blue-700 text-white px-3 py-1 rounded-lg text-xs font-bold shadow group-hover:bg-yellow-400 group-hover:text-blue-900 transition-colors">
          Internship
        </div>
        <h3 className="text-2xl font-semibold mb-2 text-blue-900 dark:text-blue-200 flex items-center gap-2">
          Embedded Systems Engineer Intern
        </h3>
        <span className="block text-base font-normal text-gray-500 dark:text-gray-400 mb-3">
          HCI Energy &mdash; 2021
        </span>
        <ul className="list-disc list-inside text-lg text-gray-800 dark:text-gray-200 space-y-2 pl-4">
          <li>Engineered and programmed the hybrid power system controller.</li>
          <li>Configured central computer software for system performance.</li>
          <li>Created detailed wiring schematics and documentation.</li>
        </ul>
      </div>
      {/* McAnany Construction */}
      <div className="relative group bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-xl p-10 border border-blue-200 dark:border-blue-700 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="absolute -top-4 -left-4 bg-blue-700 text-white px-3 py-1 rounded-lg text-xs font-bold shadow group-hover:bg-yellow-400 group-hover:text-blue-900 transition-colors">
          Laborer
        </div>
        <h3 className="text-2xl font-semibold mb-2 text-blue-900 dark:text-blue-200 flex items-center gap-2">
          Construction Laborer
        </h3>
        <span className="block text-base font-normal text-gray-500 dark:text-gray-400 mb-3">
          McAnany Construction &mdash; 2013-2021
        </span>
        <ul className="list-disc list-inside text-lg text-gray-800 dark:text-gray-200 space-y-2 pl-4">
          <li>Managed traffic flow and site safety.</li>
          <li>Communicated with homeowners and addressed concerns.</li>
          <li>
            Adapted to manual labor challenges and dynamic work environments.
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Experience
