const Education = () => (
  <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-blue-900 dark:to-black px-4 py-12">
    <h2 className="text-4xl font-bold mb-8 text-blue-800 dark:text-blue-400 tracking-tight drop-shadow">
      Education
    </h2>
    <div className="w-full max-w-2xl bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-xl p-10 border border-blue-200 dark:border-blue-700 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl relative group">
      <div className="absolute -top-4 -left-4 bg-blue-700 text-white px-3 py-1 rounded-lg text-xs font-bold shadow group-hover:bg-yellow-400 group-hover:text-blue-900 transition-colors">
        Degree
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-blue-900 dark:text-blue-200">
        Bachelor of Science in Computer Science
      </h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-1">
        Kansas State University
      </p>
      <p className="text-base text-gray-500 dark:text-gray-400 mb-4">
        Manhattan, Kansas
      </p>
      <h4 className="text-xl font-bold mt-6 mb-2 text-blue-700 dark:text-blue-300">
        Relevant Courses
      </h4>
      <ul className="list-disc list-inside text-lg text-gray-800 dark:text-gray-200 space-y-1 pl-4">
        <li>Data Structures</li>
        <li>Foundations of Software</li>
        <li>Programming Languages</li>
      </ul>
    </div>
  </section>
)

export default Education
