import React from "react";
import { Button } from "@/components/ui/button";
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

const About = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-500 via-gray-900 to-black"
      // className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-500 via-gray-500 to-gray-500"
    >
      <div className="section-padding">
        <h2 className="section-title text-white">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Profile Card */}
          <div className="md:col-span-1 animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 shadow-xl">
              <div className="flex flex-col items-center">
                <img
                  src="profile3.jpg"
                  alt="Profile"
                  className="w-40 h-40 object-cover rounded-full border-4 border-white/30 shadow-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-white">ABDELGHANI KHAIRI</h3>
                <p className="text-portfolio-secondary font-medium mb-4">Software developer</p>
                
                <div className="flex justify-center space-x-3 mb-6">
                  {/* Social links */}
                  <a href="https://github.com/abkhairi" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                    </svg>
                  </a>
                  <a href="https://x.com/KhairiBd" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/abdelghani-khairi-6153a3226/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22 3.47v17.06A1.47 1.47 0 0120.53 22H3.47A1.47 1.47 0 012 20.53V3.47A1.47 1.47 0 013.47 2h17.06A1.47 1.47 0 0122 3.47zM7.88 18.13h2.66v-8.5H7.88v8.5zM9.2 8.73a1.54 1.54 0 100-3.08 1.54 1.54 0 100 3.08zM16.13 18.13h2.65v-4.9c0-2.49-1.9-2.83-2.65-2.83-1.35 0-2.08.84-2.45 1.33v-1.1h-2.64v8.5h2.64v-4.62c0-.7.48-1.29 1.23-1.29s1.22.58 1.22 1.33v4.58z"></path>
                    </svg>
                  </a>
                </div>
                <Button 
                    onClick={handleDownloadCV}
                    className="w-full bg-portfolio-primary hover:bg-portfolio-primary/90 text-white flex items-center gap-2"
                    >
                    <Download className="h-4 w-4" />
                    Download CV
              </Button>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="md:col-span-2 animate-fade-in [animation-delay:200ms]">
            <h3 className="text-3xl text-white mb-4 text-portfolio-primary">Who I Am</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              I am a passionate and rigorous software developer who has successfully completed the Common Core at 1337 Coding School, part of the global 42 Network. This intensive program equipped me with a solid foundation in system programming, algorithms, C/C++ development, networking, and full-stack web technologies. I thrive on solving low-level challenges, building efficient and secure systems, and collaborating on innovative, real-world projects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h4 className="text-lg font-semibold mb-3 text-portfolio-secondary">Personal Information</h4>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="font-medium w-28 text-white/80">Full Name:</span>
                    <span className="text-white">ABDELGHANI KHAIRI</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-28 text-white/80">Email:</span>
                    <span className="text-white">abkhairi@student.1337.ma</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-28 text-white/80">Email2:</span>
                    <span className="text-white">abkhairi1337@gmail.com</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-28 text-white/80">Location:</span>
                    <span className="text-white">Khouribga, Maroc</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h4 className="text-lg font-semibold mb-3 text-portfolio-secondary">My Interests</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-portfolio-accent mr-2"></div>
                    <span className="text-white">Machine Learning</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-portfolio-accent mr-2"></div>
                    <span className="text-white">Web Development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-portfolio-accent mr-2"></div>
                    <span className="text-white">Application desktop</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-portfolio-accent mr-2"></div>
                    <span className="text-white">UI/UX Design</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <h4 className="text-lg font-semibold mb-4 text-portfolio-secondary">Education</h4>
              <div className="space-y-4">
                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="w-3 h-3 bg-portfolio-primary rounded-full"></div>
                    <div className="w-0.5 h-full bg-white/20"></div>
                  </div>
                  <div>
                    <h5 className="font-medium text-white">Junior Developer</h5>
                    <p className="text-sm text-white/70"> 1337 coding school | 2022-2025</p>
                    {/* <p className="text-sm text-white/80 mt-1">Led frontend development for multiple high-profile projects and mentored junior developers.</p> */}
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="w-3 h-3 bg-portfolio-primary rounded-full"></div>
                    <div className="w-0.5 h-full bg-white/20"></div>
                  </div>
                  <div>
                    <h5 className="font-medium text-white">technicien spécialisé en développement informatique</h5>
                    <p className="text-sm text-white/70">ISIG | 2020 - 2022</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="w-3 h-3 bg-portfolio-primary rounded-full"></div>
                  </div>
                  <div>
                    <h5 className="font-medium text-white">baccalauréat</h5>
                    <p className="text-sm text-white/70">Magherb el kabir| 2019 - 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
