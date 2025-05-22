import React from "react";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  // Updated technical skills based on your 1337 curriculum
  const technicalSkills = [
    { name: "C Programming", level: 95 },
    { name: "C++ (OOP)", level: 90 },
    { name: "Algorithms & AI", level: 88 },
    { name: "System Programming", level: 85 },
    { name: "Network Programming", level: 83 },
    { name: "Unix/Linux", level: 90 },
    { name: "Shell Scripting", level: 80 },
    { name: "Docker", level: 75 },
    { name: "Web Development", level: 78 },
  ];

  // Updated soft skills based on your curriculum
  const softSkills = [
    "Rigor & Precision",
    "Problem Solving",
    "Algorithmic Thinking",
    "Project Management",
    "System Administration",
    "Adaptability",
    "Creative Thinking",
    "Time Management",
    "Peer Learning",
    "Code Review",
  ];

  // Updated tools based on your projects
  const tools = [
    "Git",
    "Makefile",
    "Valgrind",
    "GDB",
    "Docker",
    "Nginx",
    "PostgreSQL",
    "Raylib",
    "MinilibX",
  ];

  // Project highlights from your curriculum
  const projectHighlights = [
    {
      name: "ft_transcendence",
      description: "Full-stack web application with real-time features",
      skills: ["Web", "Backend", "Frontend", "Database"]
    },
    {
      name: "ft_irc",
      description: "IRC server implementation in C++",
      skills: ["Network", "OOP", "Concurrency"]
    },
    {
      name: "cub3d",
      description: "Raycasting game engine (Wolfenstein 3D style)",
      skills: ["Graphics", "Algorithms", "Game Dev"]
    },
    {
      name: "minishell",
      description: "Custom shell implementation",
      skills: ["System", "Process", "Parsing"]
    }
  ];

  return (
    // <section id="skills" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-500 via-gray-500 to-gray-500">
    <section id="skills" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-500 via-gray-900 to-black">
      <div className="section-padding">
        <h2 className="section-title">My 1337 Skills</h2>
        <p className="text-gray-300 mb-10 max-w-3xl">
          As a 1337 coding school student, I've developed strong technical skills through intensive project-based learning. 
          Here's a breakdown of my competencies based on completing 100% of the Common Core curriculum.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-6 text-portfolio-primary">
              Core Technical Skills
            </h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in [animation-delay:200ms]">
            <div>
              <h3 className="text-xl font-bold mb-6 text-portfolio-primary">
                Professional Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-badge flex items-center justify-center text-center bg-gray-800 text-gray-200 hover:bg-gray-700 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-portfolio-primary">
                Tools & Technologies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="skill-badge flex items-center justify-center text-center bg-gray-800 text-gray-200 hover:bg-gray-700 transition-colors"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-16 bg-gray-800/50 rounded-lg p-8 animate-fade-in [animation-delay:400ms]">
          <h3 className="text-2xl font-bold mb-6 text-center text-portfolio-primary">
            Project Highlights from 1337
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectHighlights.map((project, index) => (
              <div 
                key={index} 
                className="bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-700 hover:shadow-md transition-shadow duration-300"
              >
                <h4 className="font-semibold mb-2 text-portfolio-secondary">{project.name}</h4>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 py-1 bg-gray-800 rounded-full text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div> */}
{/* 
        <div className="mt-16 bg-gray-800/50 rounded-lg p-8 animate-fade-in [animation-delay:600ms]">
          <h3 className="text-2xl font-bold mb-6 text-center text-portfolio-primary">
            Curriculum Progress
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">Common Core Completion</span>
                <span className="text-gray-400">87%</span>
              </div>
              <Progress value={87} className="h-3 bg-gray-700" />
              <p className="text-gray-400 text-sm mt-2">
                Level 11.02 - Currently working on webserv and Exam Rank 06
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-900 p-4 rounded-lg">
                <h4 className="font-semibold mb-3 text-portfolio-secondary">Completed Projects</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Libft - C Standard Library recreation</li>
                  <li>• Minishell - Custom shell implementation</li>
                  <li>• Cub3d - Raycasting 3D engine</li>
                  <li>• ft_irc - IRC server in C++</li>
                  <li>• ft_transcendence - Full-stack web app</li>
                </ul>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg">
                <h4 className="font-semibold mb-3 text-portfolio-secondary">Current Focus</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• webserv - HTTP server implementation</li>
                  <li>• Exam Rank 06 - Next certification exam</li>
                  <li>• Advancing to 42 Advanced Part</li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;


// import React from "react";
// import { Progress } from "@/components/ui/progress";

// const Skills = () => {
//   const technicalSkills = [
//     { name: "HTML5 & CSS3", level: 95 },
//     { name: "JavaScript", level: 90 },
//     { name: "React.js", level: 85 },
//     { name: "TypeScript", level: 80 },
//     { name: "Node.js", level: 75 },
//     { name: "Tailwind CSS", level: 90 },
//   ];

//   const softSkills = [
//     "Team Collaboration",
//     "Problem Solving",
//     "Communication",
//     "Project Management",
//     "User Experience",
//     "Adaptability",
//     "Creative Thinking",
//     "Time Management",
//   ];

//   const tools = [
//     "Git & GitHub",
//     "VS Code",
//     "Figma",
//     "Adobe XD",
//     "Webpack",
//     "Jest",
//     "Docker",
//     "AWS",
//   ];

//   return (
//     <section id="skills" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-500 via-gray-900 to-black-800">
//       <div className="section-padding">
//         <h2 className="section-title">My Skills</h2>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//           <div className="animate-fade-in">
//             <h3 className="text-xl font-bold mb-6 text-portfolio-primary">
//               Technical Skills
//             </h3>
//             <div className="space-y-5">
//               {technicalSkills.map((skill, index) => (
//                 <div key={index} className="space-y-1">
//                   <div className="flex justify-between">
//                     <span className="font-medium text-gray-700">
//                       {skill.name}
//                     </span>
//                     <span className="text-sm text-gray-500">{skill.level}%</span>
//                   </div>
//                   <Progress value={skill.level} className="h-2" />
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in [animation-delay:200ms]">
//             <div>
//               <h3 className="text-xl font-bold mb-6 text-portfolio-primary">
//                 Professional Skills
//               </h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {softSkills.map((skill, index) => (
//                   <div
//                     key={index}
//                     className="skill-badge flex items-center justify-center text-center"
//                   >
//                     {skill}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <h3 className="text-xl font-bold mb-6 text-portfolio-primary">
//                 Tools & Software
//               </h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {tools.map((tool, index) => (
//                   <div
//                     key={index}
//                     className="skill-badge flex items-center justify-center text-center"
//                   >
//                     {tool}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-16 bg-gray-50 rounded-lg p-8 animate-fade-in [animation-delay:400ms]">
//           <h3 className="text-2xl font-bold mb-6 text-center text-portfolio-primary">
//             My Development Process
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow duration-300">
//               <div className="w-16 h-16 bg-portfolio-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-portfolio-secondary text-xl font-bold">1</span>
//               </div>
//               <h4 className="font-semibold mb-2 text-portfolio-primary">Research & Planning</h4>
//               <p className="text-gray-600 text-sm">
//                 Understanding requirements and creating detailed project roadmaps
//               </p>
//             </div>
            
//             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow duration-300">
//               <div className="w-16 h-16 bg-portfolio-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-portfolio-secondary text-xl font-bold">2</span>
//               </div>
//               <h4 className="font-semibold mb-2 text-portfolio-primary">Design & Prototype</h4>
//               <p className="text-gray-600 text-sm">
//                 Creating wireframes and interactive prototypes for user feedback
//               </p>
//             </div>
            
//             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow duration-300">
//               <div className="w-16 h-16 bg-portfolio-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-portfolio-secondary text-xl font-bold">3</span>
//               </div>
//               <h4 className="font-semibold mb-2 text-portfolio-primary">Development</h4>
//               <p className="text-gray-600 text-sm">
//                 Writing clean, maintainable code following best practices
//               </p>
//             </div>
            
//             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow duration-300">
//               <div className="w-16 h-16 bg-portfolio-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-portfolio-secondary text-xl font-bold">4</span>
//               </div>
//               <h4 className="font-semibold mb-2 text-portfolio-primary">Testing & Delivery</h4>
//               <p className="text-gray-600 text-sm">
//                 Thorough testing and continuous deployment for fast delivery
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
