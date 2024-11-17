"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IconExternalLink, IconChevronDown } from "@tabler/icons-react";

export function ProjectGrid() {
  const [modalOpen, setModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const handleProjectClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  // Separate featured and non-featured projects
  const featuredProjects = projects.filter((project) =>
    ["Neohyre", "Hey Blytz!", "Clarity"].includes(project.title)
  );
  const otherProjects = projects.filter(
    (project) => !["Neohyre", "Hey Blytz!", "Clarity"].includes(project.title)
  );

  return (
    <div className="container mx-auto px-4">
      {/* Featured Projects Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {featuredProjects.map((project, index) => (
          <div
            key={index}
            className="relative group cursor-pointer rounded-xl overflow-hidden bg-[#3F556F] shadow-lg transition-transform duration-300 hover:scale-[1.02] h-[450px]"
            onClick={() => handleProjectClick(project)}
          >
            {/* Image Container */}
            <div className="absolute inset-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
            </div>

            {/* Content */}
            <div className="relative h-full p-6 flex flex-col justify-end text-white">
              <div className="absolute top-4 left-4">
                <span className="bg-[#3F556F] px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-200 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-white/20 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* External Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 flex items-center gap-2 text-white hover:text-gray-200 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <IconExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other Projects - Shown when "Show More" is clicked */}
      {showAll && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="relative group cursor-pointer rounded-xl overflow-hidden bg-[#3F556F] shadow-lg transition-transform duration-300 hover:scale-[1.02] h-[350px]"
              onClick={() => handleProjectClick(project)}
            >
              <div className="absolute inset-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
              </div>

              <div className="relative h-full p-6 flex flex-col justify-end text-white">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-200 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-white/20 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Show More Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="group flex items-center gap-2 px-6 py-3 bg-[#3F556F] text-white rounded-full hover:bg-[#778899] transition-colors"
        >
          {showAll ? "Show Less" : "Show More"}
          <IconChevronDown
            className={`w-5 h-5 transition-transform duration-300 ${
              showAll ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Modal - Keep the same as before */}
      {modalOpen && selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-[#3F556F]">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-6">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#3F556F]/10 text-[#3F556F] text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {selectedProject.description}
                </p>

                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#3F556F] hover:text-[#778899] transition-colors"
                  >
                    View Project <IconExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Update the projects data to include Clarity's link
const projects = [
  {
    title: "Neohyre",
    description:
      "AI-powered hiring platform that facilitates automated recruitment processes, including resume screening, interview assessments, and candidate evaluations.",
    image: "/neohyre.png",
    tags: [
      "Sveltekit",
      "Pocketbase",
      "Deepgram",
      "Langchain",
      "Firebase",
      "Azure",
      "Pinecone",
    ],
    link: "https://neohyre.com",
  },
  {
    title: "Hey Blytz!",
    description:
      "Voice-activated Chrome AI assistant, enabling hands-free browsing and multitasking. Search, manage tabs, ask ChatGPT, and control Chrome—all with simple voice commands.",
    image: "/heyblytz.jpg",
    tags: [
      "ReactJS",
      "Chrome Extension",
      "Cloudflare Workers",
      "Deepgram",
      "OpenAI",
    ],
    link: "https://heyblytz.com",
  },
  {
    title: "Clarity",
    description:
      "An AI-powered IDE extension that helps developers navigate codebases, speed up documentation, and learn coding faster.",
    image: "/clarity.jpg",
    tags: [
      "Langchain",
      "Cohere",
      "FAISS",
      "OpenAI",
      "Express",
      "VSCode Extension",
    ],
    link: "https://newsbytes.ph/2023/12/08/ai-powered-coding-tool-from-tuguegarao-tops-ph-startup-challenge-8/",
  },
  {
    title: "PowerGuard",
    description:
      "An energy-saving system that automatically turns off outlets and lights at specified times to reduce electricity consumption.",
    image: "/powerguard.jpg",
    tags: ["Ionic", "NodeJS", "MongoDB", "ESP32"],
  },
  {
    title: "BillSmart",
    description:
      "An all-in-one billing system for managing electricity and water utilities, simplifying billing processes and improving accuracy.",
    image: "/smartbill.png",
    tags: ["Thunkable", "NodeJS", "MongoDB", "ESP32"],
  },
  {
    title: "X1 Capture",
    description:
      "A software for X1 Technologies that monitors and captures activities on virtual machines, enhancing security and insights.",
    image: "/x1cap.jpg",
    tags: ["C#", "WindowsForm"],
  },
  {
    title: "Illegal Logging Detection System",
    description:
      "This system uses TinyML to detect chainsaw sounds on edge devices, sending real-time notifications to combat illegal logging.",
    image: "/trees.jpg",
    tags: ["C", "TinyML", "DSP", "RP2040", "C#"],
  },
  {
    title: "Trial Balance Generator",
    description:
      "A web app that automates ledger creation and trial balance generation, improving accuracy and efficiency for accountants.",
    image: "/tbl.png",
    tags: ["NextJS", "NodeJS", "PostgreSQL", "Supabase"],
  },
  {
    title: "Smart Vendo Fridge",
    description:
      "A proof-of-concept system that innovates vending machines with smart technology, optimizing inventory and providing real-time data analytics.",
    image: "/fridge.jpg",
    tags: ["Ionic", "C#", "NextJS", "NodeJS", "MongoDB", "Arduino"],
  },
];
