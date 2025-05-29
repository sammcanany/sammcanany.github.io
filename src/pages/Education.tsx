const Education = () => (
  <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 px-4 py-12">
    <h2 className="text-4xl font-bold mb-8 text-blue-800 dark:text-blue-400">
      Education
    </h2>
    <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 border border-gray-200 dark:border-gray-700">
      <h3 className="text-2xl font-semibold mb-2 text-blue-900 dark:text-blue-200">
        Bachelor of Science in Computer Science
      </h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
        Kansas State University
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
