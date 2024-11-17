"use client";
import BlurFade from "../components/magicui/blurfade";
import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#3F556F] py-16 text-white overflow-hidden"
    >
      {/* New decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute h-full w-full">
          {/* Circuit board inspired pattern */}
          <svg
            className="absolute w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="circuit"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 50h25l5-5h20l5 5h45"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
                <path
                  d="M0 25h35l5 5h25"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
                <path
                  d="M0 75h10l5-5h15l5 5h65"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
                <circle cx="50" cy="50" r="3" fill="white" />
                <circle cx="75" cy="25" r="3" fill="white" />
                <circle cx="25" cy="75" r="3" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
          {/* Glowing orbs */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-white/20 to-transparent blur-xl"
                style={{
                  width: Math.random() * 150 + 50 + "px",
                  height: Math.random() * 150 + 50 + "px",
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                  animation: `float ${
                    Math.random() * 10 + 20
                  }s linear infinite`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-12">
        <BlurFade delay={0.25} inView>
          <div className="relative group">
            <Image
              src="/logo.png"
              alt="Profile"
              width={300}
              height={300}
              className="transform transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3F556F]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </BlurFade>

        <div className="lg:max-w-2xl text-center lg:text-left">
          <BlurFade delay={0.25} inView>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Hi, I'm Rod!
            </h2>
          </BlurFade>
          <BlurFade delay={0.5} inView>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed px-4 lg:px-0">
              I'm an electronics engineer with a strong background in embedded
              systems, machine learning and AI, and software development. My
              passion for technology drives me to continually innovate and stay
              at the forefront of industry advancements.
            </p>
          </BlurFade>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Journey & Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#778899] to-[#3F556F]" />

          {/* Timeline items */}
          {[
            {
              year: "Aug - Present",
              role: "Full Stack + AI Developer",
              organization: "Jur PH",
              type: "work",
            },
            {
              year: "Jun 2024",
              role: "BS Electronics Engineering",
              organization: "University of Saint Louis",
              type: "education",
            },
            {
              year: "Mar 2023 - Present",
              role: "Freelance Developer",
              organization: "Upwork",
              type: "work",
            },
            {
              year: "Jun 2023 - May 2024",
              role: "Organizational President",
              organization: "IECEP Cagayan Valley ESC",
              type: "work",
            },
            {
              year: "Jun - Aug 2023",
              role: "Emerging Technologies Intern",
              organization: "Globe Telecom Inc.",
              type: "work",
            },
            {
              year: "Apr 2020",
              role: "Secondary Education (STEM)",
              organization: "Saint Paul University Philippines",
              type: "education",
            },
          ].map((item, index) => (
            <BlurFade key={index} delay={0.25 * (index + 1)} inView>
              <div
                className={`relative mb-6 lg:-mb-4 ${
                  // Normal spacing on mobile, overlap on lg
                  index % 2 === 0
                    ? "lg:ml-auto lg:pl-6 lg:pr-0 lg:w-1/2 px-4 text-center lg:text-left"
                    : "lg:mr-auto lg:pr-6 lg:pl-0 lg:w-1/2 px-4 text-center lg:text-left"
                }`}
              >
                <div className="bg-[#778899] backdrop-blur-sm rounded-lg p-5 lg:p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 relative">
                  {/* Circle indicator */}
                  <div
                    className={`hidden lg:block absolute top-6 ${
                      index % 2 === 0
                        ? "left-1/2 lg:left-0 lg:-translate-x-1/2 -translate-x-1/2"
                        : "left-1/2 lg:left-auto lg:right-0 lg:translate-x-1/2 -translate-x-1/2"
                    } w-4 h-4 bg-[#3F556F] rounded-full border-2 border-[#778899]`}
                  />

                  <div className="flex flex-col lg:flex-row justify-between items-center gap-2 mb-2">
                    <span className="bg-[#3F556F] px-2 py-0.5 rounded-full text-sm">
                      {item.year}
                    </span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        item.type === "education"
                          ? "bg-blue-500/20 text-blue-200"
                          : "bg-green-500/20 text-green-200"
                      }`}
                    >
                      {item.type === "education" ? "Education" : "Experience"}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">
                    {item.organization}
                  </h3>
                  <p className="text-gray-200 text-sm">{item.role}</p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>

      {/* Keeping the existing float animation styles */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(10px, 10px) rotate(5deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }
      `}</style>
    </section>
  );
}
