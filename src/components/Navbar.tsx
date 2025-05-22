import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom"; // Utilisez NavLink au lieu de Link
import { Download } from "lucide-react";

// Add this function to your component
const handleDownloadCV = () => {
  // Replace with the actual path to your CV file
  const cvUrl = '/cv.pdf';
  
  // Create a temporary anchor element
  const link = document.createElement('a');
  link.href = cvUrl;
  
  // Set the download attribute with the desired filename
  link.download = 'CV_ABDELGHANI_KHAIRI.pdf';
  
  // Append to the body, trigger click, then remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
      <NavLink to="/" className="flex items-center">
  <svg
    width="150"
    height="50"
    viewBox="0 0 150 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="0"
      y="35"
      fontFamily="Arial, Helvetica, sans-serif"
      fontSize="30"
      fontWeight="bold"
      fill="#1F2937"
    >
    ABKHAIRI
    </text>
  </svg>
</NavLink>

        {/* <NavLink 
          to="/" 
          className="text-portfolio-primary text-xl font-bold hover:text-portfolio-secondary transition-colors"
        >
            <img 
              src="../../public/logo_abkhairi.svg" 
              alt="Abkhairi Logo" 
              className="h-8 w-12" // Adjust size as needed
            />
        </NavLink> */}

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `px-3 py-1 rounded-md transition-colors ${
                  isActive 
                    ? "text-portfolio-secondary font-medium" 
                    : "text-portfolio-dark hover:text-portfolio-secondary"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <Button 
              onClick={handleDownloadCV}
              className="w-full bg-portfolio-primary hover:bg-portfolio-primary/90 text-white flex items-center gap-2"
              >
              <Download className="h-4 w-4" />
              Resume
        </Button>
        </div>

        {/* Menu Mobile */}
        <button
          className="md:hidden text-portfolio-dark focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {/* Icône du menu hamburger */}
        </button>
      </div>

      {/* Contenu du Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md ${
                    isActive
                      ? "bg-portfolio-secondary/10 text-portfolio-secondary"
                      : "text-portfolio-dark hover:bg-gray-100"
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <Button className="bg-portfolio-secondary hover:bg-portfolio-secondary/90 mt-3 w-full">
              Resume
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom"; // Importez Link depuis react-router-dom

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // Liste des éléments de navigation
//   const navItems = [
//     { name: "Home", path: "/" }, // Utilisez 'path' au lieu de 'href'
//     { name: "About", path: "/about" },
//     { name: "Projects", path: "/projects" },
//     { name: "Skills", path: "/skills" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md py-2">
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         {/* Utilisez Link au lieu de <a> pour la navigation interne */}
//         <Link to="/" className="text-portfolio-primary text-xl font-bold">
//           ABDELGHANI KHAIRI
//         </Link>

//         {/* Menu desktop */}
//         <div className="hidden md:flex items-center space-x-6">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               className="text-portfolio-dark hover:text-portfolio-secondary transition-colors duration-300"
//             >
//               {item.name}
//             </Link>
//           ))}
//           <Button className="bg-portfolio-secondary hover:bg-portfolio-secondary/90">
//             Resume
//           </Button>
//         </div>

//         {/* Bouton menu mobile */}
//         <button
//           className="md:hidden text-portfolio-dark focus:outline-none"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {mobileMenuOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Menu mobile */}
//       <div
//         className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ${
//           mobileMenuOpen ? "max-h-64 py-2" : "max-h-0 overflow-hidden"
//         }`}
//       >
//         <div className="container mx-auto px-4 flex flex-col space-y-3 pb-3">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               className="text-portfolio-dark hover:text-portfolio-secondary px-2 py-1.5"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               {item.name}
//             </Link>
//           ))}
//           <Button className="bg-portfolio-secondary hover:bg-portfolio-secondary/90 mt-2 w-full">
//             Resume
//           </Button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(true);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(50 > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { name: "Home", href: "/home" },
//     { name: "About", href: "/about" },
//     { name: "Projects", href: "/projects" },
//     { name: "Skills", href: "/skills" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-white/90 backdrop-blur-md shadow-md py-2"
//           : "bg-transparent py-4"
//       }`}
//     >
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         <a href="#home" className="text-portfolio-primary text-xl font-bold">
//           ABDELGHANI KHAIRI
//         </a>

//         {/* Desktop menu */}
//         <div className="hidden md:flex items-center space-x-6">
//           {navItems.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className="text-portfolio-dark hover:text-portfolio-secondary transition-colors duration-300"
//             >
//               {item.name}
//             </a>
//           ))}
//           <Button className="bg-portfolio-secondary hover:bg-portfolio-secondary/90">
//             Resume
//           </Button>
//         </div>

//         {/* Mobile menu button */}
//         <button
//           className="md:hidden text-portfolio-dark focus:outline-none"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {mobileMenuOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile menu */}
//       <div
//         className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ${
//           mobileMenuOpen ? "max-h-64 py-2" : "max-h-0 overflow-hidden"
//         }`}
//       >
//         <div className="container mx-auto px-4 flex flex-col space-y-3 pb-3">
//           {navItems.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className="text-portfolio-dark hover:text-portfolio-secondary px-2 py-1.5"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               {item.name}
//             </a>
//           ))}
//           <Button className="bg-portfolio-secondary hover:bg-portfolio-secondary/90 mt-2 w-full">
//             Resume
//           </Button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
