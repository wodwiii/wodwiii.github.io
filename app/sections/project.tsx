import { ProjectGrid } from "../components/bentogrid";

export function Projects() {
  return (
    <section
      id="project"
      className="relative min-h-screen bg-[#778899] py-16 text-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute h-full w-full">
          <svg className="absolute w-full h-full text-[#3F556F]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 50h25l5-5h20l5 5h45" fill="none" stroke="white" strokeWidth="1"/>
                <path d="M0 25h35l5 5h25" fill="none" stroke="white" strokeWidth="1"/>
                <path d="M0 75h10l5-5h15l5 5h65" fill="none" stroke="white" strokeWidth="1"/>
                <circle cx="50" cy="50" r="3" fill="white"/>
                <circle cx="75" cy="25" r="3" fill="white"/>
                <circle cx="25" cy="75" r="3" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-[#778899] mx-auto mt-4 rounded-full"/>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto px-4">
            A showcase of my technical projects combining hardware, software, and artificial intelligence.
          </p>
        </div>

        <ProjectGrid />
      </div>
    </section>
  );
}