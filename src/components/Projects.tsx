import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Github, Link } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "ft_transcendence",
      description: "Full-stack web application with real-time features including chat, game matchmaking, and user authentication.",
      image: "./ft_tra.png",
      category: "web",
      technologies: ["NestJS", "PostgreSQL", "React", "TypeScript", "Docker"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed with bonus",
      date: "May 2025"
    },
    {
      id: 2,
      title: "ft_irc",
      description: "Implementation of an IRC server in C++ supporting multiple clients and channels with network protocols.",
      image: "./ft_irc.jpg",
      category: "network",
      technologies: ["C++", "TCP/IP", "Sockets", "RFC 1459"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed",
      date: "Dec 2024"
    },
    {
      id: 3,
      title: "cub3d",
      description: "Raycasting 3D game engine inspired by Wolfenstein 3D with texture mapping and player movement.",
      image: "./cub3d.png",
      category: "graphics",
      technologies: ["C", "Raycasting", "MinilibX", "Algorithms"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed with bonus",
      date: "May 2024"
    },
    {
      id: 4,
      title: "minishell",
      description: "Custom shell implementation supporting commands, pipes, redirections, and environment variables.",
      image: "./minishell.jpeg",
      category: "system",
      technologies: ["C", "Unix", "Processes", "Parsing"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed",
      date: "Feb 2024"
    },
    {
      id: 5,
      title: "Inception",
      description: "System administration project using Docker to set up multiple services with specific rules and constraints.",
      image: "./inception.png",
      category: "system",
      technologies: ["Docker", "Nginx", "MariaDB", "WordPress"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed with bonus",
      date: "Feb 2025"
    },
    {
      id: 6,
      title: "AI using NEAT",
      description: "Face off against an evolving AI built with the NEAT algorithm, which learns and improves over generations.",
      image: "./ia.jpg",
      category: "AI",
      technologies: ["Python", "JavaScript", "NEAT"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed with bonus",
      date: "May 2025"
    }
  ];
  
  const filters = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web" },
    { value: "network", label: "Network" },
    { value: "system", label: "System" },
    { value: "graphics", label: "Graphics" },
    { value: "AI", label: "Artificial Intelligence" }
  ];
  
  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section 
      id="projects" 
      className="h-screen flex flex-col items-center justify-center pt-16 bg-gradient-to-br from-gray-500 via-gray-900 to-black"
      style={{ overflow: 'hidden' }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-4">
        <h2 className="section-title text-center mb-4">1337 School Projects</h2>
        <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-center">
          These are my major projects completed during the 1337 coding school curriculum.
        </p>
        
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-md text-sm ${
                activeFilter === filter.value
                  ? "bg-portfolio-primary text-white shadow-md"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto h-[65vh] overflow-y-auto px-2">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden border border-gray-700 hover:shadow-lg transition-all duration-300 bg-gray-900"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-portfolio-secondary">{project.title}</CardTitle>
                <div className="flex justify-between items-center text-xs mt-2">
                  <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                    {project.date}
                  </span>
                  <span className={`px-2 py-1 rounded-full ${
                    project.status.includes("Completed") 
                      ? "bg-green-900/50 text-green-300" 
                      : "bg-blue-900/50 text-blue-300"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <CardDescription className="text-gray-400 mt-2 text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
