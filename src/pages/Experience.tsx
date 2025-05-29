const Experience = () => (
  <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 px-4 py-12">
    <h2 className="text-4xl font-bold mb-8 text-blue-800 dark:text-blue-400">
      Work Experience
    </h2>
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* HCI Energy */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold mb-2 text-blue-900 dark:text-blue-200">
          Embedded Systems Engineer Intern
          <span className="block text-base font-normal text-gray-500 dark:text-gray-400">
            HCI Energy &mdash; 2021
          </span>
        </h3>
        <ul className="list-disc list-inside text-lg text-gray-800 dark:text-gray-200 space-y-1 pl-4">
          <li>Engineered and programmed the hybrid power system controller.</li>
          <li>Configured central computer software for system performance.</li>
          <li>Created detailed wiring schematics and documentation.</li>
        </ul>
      </div>
      {/* McAnany Construction */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold mb-2 text-blue-900 dark:text-blue-200">
          Construction Laborer
          <span className="block text-base font-normal text-gray-500 dark:text-gray-400">
            McAnany Construction &mdash; 2013-2021
          </span>
        </h3>
        <ul className="list-disc list-inside text-lg text-gray-800 dark:text-gray-200 space-y-1 pl-4">
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
