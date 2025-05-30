const About = () => (
  <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-blue-900 dark:to-black px-4 py-12">
    <div className="w-full max-w-3xl bg-white/95 dark:bg-gray-800/95 rounded-3xl shadow-2xl p-10 border-2 border-blue-200 dark:border-blue-700 flex flex-col md:flex-row items-center md:items-start gap-10 text-center md:text-left relative overflow-hidden">
      {/* Decorative floating shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 dark:bg-blue-900 rounded-full opacity-30 blur-2xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-200 dark:bg-yellow-700 rounded-full opacity-20 blur-2xl -z-10 animate-pulse" />
      {/* SVG Avatar */}
      <div className="hidden md:flex items-center justify-center">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
          <circle cx="90" cy="90" r="80" fill="#3B82F6" fillOpacity="0.15" />
          <circle cx="60" cy="60" r="40" fill="#2563EB" fillOpacity="0.25" />
          <rect
            x="100"
            y="100"
            width="60"
            height="60"
            rx="20"
            fill="#0EA5E9"
            fillOpacity="0.18"
          />
          <ellipse
            cx="120"
            cy="60"
            rx="18"
            ry="28"
            fill="#6366F1"
            fillOpacity="0.15"
          />
        </svg>
      </div>
      {/* Main Content */}
      <div>
        <h2 className="text-4xl font-extrabold mb-4 text-blue-800 dark:text-blue-400 tracking-tight drop-shadow">
          About Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded-lg font-semibold text-blue-700 dark:text-blue-200 mb-2">
            Hi! I'm Sam McAnany
          </span>
          , a passionate software developer with experience in full-stack web development, game development, and building modern, responsive user interfaces. I enjoy working with{" "}
          <span className="font-semibold text-blue-700 dark:text-blue-300">React</span>,{" "}
          <span className="font-semibold text-blue-700 dark:text-blue-300">TypeScript</span>, and{" "}
          <span className="font-semibold text-blue-700 dark:text-blue-300">C#</span>, and I'm always eager to learn new technologies and tackle challenging problems.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Outside of coding, I enjoy exploring new tech, gaming, and collaborating on creative projects.
          <span className="inline-block ml-2 px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded-lg font-semibold text-purple-700 dark:text-purple-300">
            Welcome to my portfolio!
          </span>
        </p>
      </div>
    </div>
  </section>
)

export default About