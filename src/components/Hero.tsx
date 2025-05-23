import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useTransform, useViewportScroll } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const rotateX = useTransform(scrollY, [0, 300], [0, 10]);
  
  // Check if device is mobile
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-500 via-gray-900 to-black"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 sm:px-6">
        <motion.div variants={itemVariants} className="order-2 lg:order-1">
          <motion.div 
            className="flex items-center space-x-2 mb-4"
            variants={itemVariants}
          >
            <div className="h-1 w-12 bg-portfolio-accent"></div>
            <p className="text-portfolio-secondary font-medium">Hello, I'm</p>
          </motion.div>
          
          <motion.h1 
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-portfolio-primary"
            variants={itemVariants}
          >
            ABDELGHANI KHAIRI
          </motion.h1>
          
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl font-medium text-portfolio-secondary mb-6"
            variants={itemVariants}
          >
            Software developer
          </motion.h2>
          
          <motion.p 
            className="text-white mb-8 max-w-lg text-sm sm:text-base"
            variants={itemVariants}
          >
      I’m KHAIRI ABDELGHANI, a junior full-stack developer and software development student at 1337 Coding School – part of the UM6P 42 Network in Khouribga, Morocco. I specialize in designing and developing scalable, efficient, and user-focused applications. With a solid grasp of modern development tools and frameworks, I enjoy tackling complex challenges and writing clean, maintainable code that delivers real value.
        </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <Button 
              className="bg-portfolio-primary hover:bg-portfolio-primary/90 text-white px-4 sm:px-6 py-3"
              asChild
            >
              <Link to="/contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10 px-4 sm:px-6 py-3"
              asChild
            >
              <Link to="/projects">View My Work</Link>
            </Button>
          </motion.div>
        </motion.div>

        {!isMobile && (
          <motion.div 
            className="hidden lg:block order-1 lg:order-2"
            variants={imageVariants}
          >
            <motion.div 
              className="relative"
              style={{ rotateX, y: y1 }}
            >
              <motion.div 
                className="relative z-10 bg-white p-4 rounded-lg shadow-xl w-90 h-120"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.img
                  src="1.jpeg"
                  alt="Professional portrait"
                  className="w-full h-full object-cover rounded"
                  whileHover={{ scale: 1.02 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};
export default Hero;
// import React from "react";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";
// import { Link } from 'react-router-dom';
// import { useTransform, useViewportScroll } from "framer-motion";

// const Hero = () => {
//   const { scrollY } = useViewportScroll();
//   const y1 = useTransform(scrollY, [0, 300], [0, 100]);
//   const y2 = useTransform(scrollY, [0, 300], [0, -100]);
//   const rotateX = useTransform(scrollY, [0, 300], [0, 10]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     }
//   };

//   const imageVariants = {
//     hidden: { scale: 0.8, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         delay: 0.5,
//         duration: 0.8,
//         type: "spring",
//         stiffness: 100
//       }
//     }
//   };

//   return (
//     <motion.section
//       id="home"
//       className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-500 via-gray-900 to-black"
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//         <motion.div variants={itemVariants}>
//           <motion.div 
//             className="flex items-center space-x-2 mb-4"
//             variants={itemVariants}
//           >
//             <div className="h-1 w-12 bg-portfolio-accent"></div>
//             <p className="text-portfolio-secondary font-medium">Hello, I'm</p>
//           </motion.div>
          
//           <motion.h1 
//             className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-portfolio-primary"
//             variants={itemVariants}
//           >
//             ABDELGHANI KHAIRI
//           </motion.h1>
          
//           <motion.h2 
//             className="text-2xl md:text-3xl font-medium text-portfolio-secondary mb-6"
//             variants={itemVariants}
//           >
//             Software developer
//           </motion.h2>
          
//           <motion.p 
//             className="text-white mb-8 max-w-lg text-xm"
//             variants={itemVariants}
//           >
//             I’m KHAIRI ABDELGHANI, a junior full-stack developer and software development student at 1337 Coding School – part of the UM6P 42 Network in Khouribga, Morocco. I specialize in designing and developing scalable, efficient, and user-focused applications. With a solid grasp of modern development tools and frameworks, I enjoy tackling complex challenges and writing clean, maintainable code that delivers real value.
//             </motion.p>
          
//           <motion.div 
//             className="flex flex-wrap gap-4"
//             variants={itemVariants}
//           >
//             <Button 
//               className="bg-portfolio-primary hover:bg-portfolio-primary/90 text-white px-6"
//               asChild
//             >
//               <Link to="/contact">
//                 Contact Me <ArrowRight className="ml-2 h-4 w-4" />
//               </Link>
//             </Button>
//             <Button
//               variant="outline"
//               className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10"
//               asChild
//             >
//               <Link to="/projects">View My Work</Link>
//             </Button>
//           </motion.div>
//         </motion.div>

//         <motion.div 
//           className="hidden lg:block"
//           variants={imageVariants}
//         >
//           <motion.div 
//             className="relative"
//             style={{ rotateX, y: y1 }}
//           >
//             {/* <motion.div 
//               className="absolute -top-6 -left-6 w-64 h-64 bg-portfolio-secondary/20 rounded-lg"
//               style={{ y: y2 }}
//               animate={{
//                 rotate: [0, 5, 0],
//                 transition: {
//                   repeat: Infinity,
//                   duration: 8,
//                   ease: "linear"
//                 }
//               }}
//             />
            
//             <motion.div 
//               className="absolute -bottom-6 -right-6 w-64 h-64 bg-portfolio-accent/20 rounded-lg"
//               style={{ y: y1 }}
//               animate={{
//                 rotate: [0, -5, 0],
//                 transition: {
//                   repeat: Infinity,
//                   duration: 10,
//                   ease: "linear"
//                 }
//               }}
//             /> */}
//             <motion.div 
//               className="relative z-10 bg-white p-4 rounded-lg shadow-xl w-80 h-120" // Fixed container size
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 400 }}
//             >
//               <motion.img
//                 src="1.jpeg"
//                 alt="Professional portrait"
//                 className="w-full h-full object-cover rounded" // Fills container while maintaining aspect ratio
//                 whileHover={{ scale: 1.02 }}
//               />
//             </motion.div>
//             {/* <motion.div 
//               className="relative z-10 bg-white p-4 rounded-lg shadow-xl w-70 h-70"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 400 }}
//             >
//               <motion.img
//                 src="1.jpeg"
//                 alt="Professional portrait"
//                 className="w-full h-auto rounded"
//                 whileHover={{ scale: 1.02 }}
//               />
//             </motion.div> */}
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default Hero;
