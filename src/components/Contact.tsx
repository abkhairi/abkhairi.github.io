
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(
      'service_58qz4ya',       // Replace with your EmailJS service ID
      'template_ad1xyc8',      // Replace with your EmailJS template ID
      formRef.current,
      '_HGGAAeIM0ZmozSyp'        // Replace with your EmailJS public key
    ).then(
      (result) => {
        console.log("Success:", result.text);
        alert("Message sent successfully!");
        formRef.current?.reset();
      },
      (error) => {
        console.error("Error:", error.text);
        alert("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <section id="contact" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-300 via-gray-900 to-black">
      <div className="section-padding">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact info omitted for brevity */}

          <div className="animate-fade-in [animation-delay:200ms]">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 text-portfolio-primary">Send Me a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="Your email" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <Input id="subject" name="subject" placeholder="Subject of your message" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea id="message" name="message" rows={4} placeholder="Your message" required />
                </div>

                <Button type="submit" className="mt-4">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Mail, Phone, MapPin } from "lucide-react";

// const Contact = () => {
// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   const form = e.target as HTMLFormElement;
//   const formData = new FormData(form);

//   const data = {
//     name: formData.get("name"),
//     email: formData.get("email"),
//     subject: formData.get("subject"),
//     message: formData.get("message"),
//   };

//   try {
//     const response = await fetch("http://localhost:3001/api/send-email", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     if (response.ok) {
//       alert("Message sent successfully!");
//       form.reset();
//     } else {
//       alert("Failed to send message.");
//     }
//   } catch (error) {
//     console.error(error);
//     alert("An error occurred.");
//   }
// };

//   return (
//     // <section id="contact" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-500 via-gray-500 to-gray-500">
//     <section id="contact" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-300 via-gray-900 to-black">
//       <div className="section-padding">
//         <h2 className="section-title">Get In Touch</h2>
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           <div className="animate-fade-in">
//             <h3 className="text-2xl font-bold mb-6 text-portfolio-primary">Contact Information</h3>
//             <p className="text-white mb-8 max-w-md">
//               Have a project in mind or want to collaborate? Feel free to reach out to me through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
//             </p>
            
//             <div className="space-y-6">
//               <div className="flex items-start">
//                 <div className="bg-portfolio-primary/10 p-3 rounded-full mr-4">
//                   <Mail className="h-6 w-6 text-white text-portfolio-primary" />
//                 </div>
//                 <div>
//                   <h4 className="text-black font-semibold text-portfolio-secondary">Email</h4>
//                   <p className="text-white">abkhairi@student.1337.ma</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start">
//                 <div className="bg-portfolio-primary/10 p-3 rounded-full mr-4">
//                   <Phone className="h-6 w-6 text-white text-portfolio-primary" />
//                 </div>
//                 <div>
//                   <h4 className="text-black font-semibold text-portfolio-secondary">Phone</h4>
//                   <p className="text-white">+212 684638088</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start">
//                 <div className="bg-portfolio-primary/10 p-3 rounded-full mr-4">
//                   <MapPin className="h-6 w-6 text-white text-portfolio-primary" />
//                 </div>
//                 <div>
//                   <h4 className="text-black font-semibold text-portfolio-secondary">Location</h4>
//                   <p className="text-white">Khouribga, Morocco</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="mt-8">
//               <h4 className=" text-black font-semibold mb-3 text-portfolio-secondary">Find me on social media</h4>
//               <div className="flex space-x-4">
//                 <a href="https://www.linkedin.com/in/abdelghani-khairi-6153a3226/" target="_blank" rel="noopener noreferrer"  className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-shadow">
//                   <svg className="w-5 h-5 text-portfolio-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M22 3.47v17.06A1.47 1.47 0 0120.53 22H3.47A1.47 1.47 0 012 20.53V3.47A1.47 1.47 0 013.47 2h17.06A1.47 1.47 0 0122 3.47zM7.88 18.13h2.66v-8.5H7.88v8.5zM9.2 8.73a1.54 1.54 0 100-3.08 1.54 1.54 0 100 3.08zM16.13 18.13h2.65v-4.9c0-2.49-1.9-2.83-2.65-2.83-1.35 0-2.08.84-2.45 1.33v-1.1h-2.64v8.5h2.64v-4.62c0-.7.48-1.29 1.23-1.29s1.22.58 1.22 1.33v4.58z"></path>
//                   </svg>
//                 </a>
//                 <a href="https://github.com/abkhairi/" target="_blank" rel="noopener noreferrer"  className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-shadow">
//                   <svg className="w-5 h-5 text-portfolio-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
//                   </svg>
//                 </a>
//                 <a href="https://x.com/KhairiBd" target="_blank" rel="noopener noreferrer"  className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-shadow">
//                   <svg className="w-5 h-5 text-portfolio-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
          
//           <div className="animate-fade-in [animation-delay:200ms]">
//             <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
//               <h3 className="text-2xl font-bold mb-6 text-portfolio-primary">Send Me a Message</h3>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                       Name
//                     </label>
//                     <Input
//                       id="name"
//                       placeholder="Your name"
//                       required
//                       className="w-full"
//                     />
//                   </div>
                  
//                   <div className="space-y-2">
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                       Email
//                     </label>
//                     <Input
//                       id="email"
//                       type="email"
//                       placeholder="Your email"
//                       required
//                       className="w-full"
//                     />
//                   </div>
//                 </div>
                
//                 <div className="space-y-2">
//                   <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
//                     Subject
//                   </label>
//                   <Input
//                     id="subject"
//                     placeholder="Subject of your message"
//                     required
//                     className="w-full"
//                   />
//                 </div>
                
//                 <div className="space-y-2">
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//                     Message
//                   </label>
//                   <Textarea
//                     id="message"
//                     placeholder="Your message"
//                     rows={5}
//                     required
//                     className="w-full"
//                   />
//                 </div>
                
//                 <Button 
//                   type="submit" 
//                   className="w-full bg-portfolio-primary hover:bg-portfolio-primary/90"
//                 >
//                   Send Message
//                 </Button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
