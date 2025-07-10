import React, { useState, useEffect, useRef } from 'react';

// Custom hook to observe if an element is in view
const useInView = (options) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, inView];
};

// Main App component for the portfolio website
const App = () => {
  // Define resume data for easy content management
  const resumeData = {
    name: "Alan Jolly Cheeramvelil", // Updated name to include Cheeramvelil
    tagline: "Full-Stack Developer | AI Enthusiast | Google Cloud Arcade AF’24",
    location: "Kannur, Kerala, India",
    phone: "+916235493222",
    email: "alanjollyc@gmail.com",
    linkedin: "https://www.linkedin.com/in/alan-jolly-11aba0205",
    portfolio: "https://alanjollyc.github.io/a/",
    github: "https://github.com/alanjollyc", // Assuming a GitHub profile based on portfolio link structure

    summary: "Innovative and self-driven Computer Science student with a passion for building scalable tech solutions using AI, cloud, and full-stack technologies. Strong background in software development, real-time applications, and cloud-native projects. Selected for Google Cloud Arcade AF’24 and actively contributing to open-source and innovation challenges. Excels in team collaboration and independent problem-solving.",

    technicalSkills: {
      languages: ["Python", "C++", "JavaScript", "HTML/CSS"],
      frameworks: ["React", "Firebase", "Tailwind", "Flask"],
      tools: ["Git", "VS Code", "Figma", "Postman"],
      cloudAI: ["Google Cloud Platform", "OpenAI APIs", "Firebase ML", "Tesseract OCR"]
    },

    projects: [
      {
        title: "StudySync – AI-Powered Group Study Platform",
        description: "Developed real-time study rooms with chat, presence indicators, GPT-powered quiz generation, and gamified study modes. Implemented using React, Firebase, and OpenAI APIs.",
        image: "https://placehold.co/400x250/333333/FFFFFF?text=StudySync+Project", // Placeholder image
        link: "#" // Replace with actual project link if available
      },
      {
        title: "OCR Calculator",
        description: "Designed a camera-based calculator using Python, OpenCV, and Tesseract OCR. Enabled real-time detection and solving of handwritten equations.",
        image: "https://placehold.co/400x250/333333/FFFFFF?text=OCR+Calculator+Project", // Placeholder image
        link: "#" // Replace with actual project link if available
      }
    ],

    certifications: [
      "Neo4j Certified Professional",
      "PwC Switzerland - Digital Assurance Job Simulation",
      "JPMorgan Chase - Software Engineering Virtual Internship",
      "Google Cloud - DevOps & Cloud Security Fundamentals"
    ],

    education: {
      degree: "Bachelor of Technology in Computer Science Engineering",
      college: "Vimal Jyothi Engineering College, Chemperi",
      graduation: "Expected Graduation: 2026"
    }
  };

  // Refs and inView states for scroll animations
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ threshold: 0.1 });


  return (
    // Main container for the entire portfolio, setting dark background and font
    <div className="min-h-screen bg-gray-900 text-gray-100 font-roboto">
      {/* Tailwind CSS CDN for styling */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Google Fonts for Roboto and VT323 */}
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=VT323&display=swap" rel="stylesheet" />
      {/* Font Awesome for icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

      {/* Custom CSS for neon effect and animations */}
      <style>
        {`
        .font-vt323 {
          font-family: 'VT323', monospace;
        }
        .neon-text {
          color: #00FFFF; /* Cyan neon color */
          text-shadow:
            0 0 5px #00FFFF,
            0 0 10px #00FFFF,
            0 0 20px #00FFFF,
            0 0 40px #00FFFF,
            0 0 80px #00FFFF;
        }

        /* Animation for sections fading in and sliding up */
        .fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in-up.is-in-view {
          opacity: 1;
          transform: translateY(0);
        }

        /* Hero section subtle background animation */
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animated-hero-bg {
          background: linear-gradient(270deg, #1a1a1a, #0a192f, #1a1a1a);
          background-size: 200% 200%;
          animation: gradient-shift 15s ease infinite;
        }
        `}
      </style>

      {/* Header Section: Navigation Bar */}
      <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 z-50 shadow-lg py-4 px-8 md:px-16 flex flex-col md:flex-row justify-between items-center rounded-b-xl">
        {/* Logo/Name with VT323 font and neon effect */}
        <div className="text-2xl md:text-3xl font-vt323 neon-text mb-4 md:mb-0">
          {resumeData.name}
        </div>
        {/* Navigation Links */}
        <nav>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-lg">
            <li><a href="#projects" className="hover:text-teal-400 transition-colors duration-300">Projects</a></li>
            <li><a href="#skills" className="hover:text-teal-400 transition-colors duration-300">Skills</a></li>
            <li><a href="#about" className="hover:text-teal-400 transition-colors duration-300">About Me</a></li>
            <li><a href="path/to/your_resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-300">Resume</a></li> {/* Link to your actual PDF resume */}
            <li><a href="#contact" className="hover:text-teal-400 transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="pt-24"> {/* Padding top to account for fixed header */}

        {/* Hero Section - Image background removed */}
        <section id="hero" className="relative flex items-center justify-center min-h-[calc(100vh-6rem)] py-16 px-8 md:px-16 text-center md:text-left">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 animated-hero-bg opacity-70"></div>
          {/* Static black overlay for text readability */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="max-w-4xl mx-auto z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-4 text-white">
              Hi, I'm <span className="text-teal-400">Alan</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-300 mb-6">
              An innovative <span className="font-medium text-white">{resumeData.tagline}</span> from India, passionate about building scalable tech solutions.
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0">
              {resumeData.summary.substring(0, resumeData.summary.indexOf('Selected for Google Cloud Arcade AF’24'))}...
            </p>
            <a href="#projects" className="inline-block bg-teal-500 hover:bg-teal-600 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105">
              CHECK OUT MY WORK
            </a>
          </div>

          {/* Animated GIF of a computer in the bottom right, moved up and left */}
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM251c2g5bXF6a2Fud2Q1c3N6c2F6c2Z1c2t3a2Rzb21pZzdmYTZiZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlSDuQ0zQ0F2Q0g/giphy.gif"
            alt="Animated Computer"
            className="absolute bottom-16 right-16 z-10 w-64 h-auto opacity-70 hidden md:block lg:w-80" /* Moved up (bottom-16) and left (right-16), z-10 for prominence */
            style={{ transform: 'rotateY(180deg)' }} /* Optional: Flip horizontally if needed */
          />
        </section>

        {/* Projects Section */}
        <section id="projects" ref={projectsRef} className={`py-20 px-8 md:px-16 bg-gray-800 fade-in-up ${projectsInView ? 'is-in-view' : ''}`}>
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-teal-400 after:rounded-full">
              Selected Projects
            </h2>
            <div className="flex flex-wrap justify-center gap-10">
              {resumeData.projects.map((project, index) => (
                <div key={index} className="bg-gray-700 rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:max-w-sm">
                  <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
                    <p className="text-gray-300 text-base mb-4">{project.description}</p>
                    {project.link && project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 font-medium flex items-center group justify-center">
                        View Project
                        <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" ref={skillsRef} className={`py-20 px-8 md:px-16 bg-gray-900 fade-in-up ${skillsInView ? 'is-in-view' : ''}`}>
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-teal-400 after:rounded-full">
              My Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(resumeData.technicalSkills).map(([category, skills], index) => (
                <div key={index} className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-teal-400 mb-4 capitalize">{category.replace(/([A-Z])/g, ' $1')}</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    {skills.map((skill, i) => (
                      <li key={i} className="mb-2">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" ref={aboutRef} className={`py-20 px-8 md:px-16 bg-gray-800 fade-in-up ${aboutInView ? 'is-in-view' : ''}`}>
          <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3 flex justify-center">
              {/* Placeholder for profile picture */}
              <img
                src="https://placehold.co/250x250/333333/FFFFFF?text=Alan+Jolly"
                alt="Alan Jolly Profile"
                className="w-60 h-60 rounded-full object-cover border-4 border-teal-400 shadow-lg"
              />
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <h2 className="text-4xl font-bold mb-6 text-white relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 lg:after:left-0 after:-translate-x-1/2 lg:after:translate-x-0 after:w-20 after:h-1 after:bg-teal-400 after:rounded-full">
                About Me
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {resumeData.summary}
              </p>

              {/* Certifications */}
              <h3 className="text-2xl font-semibold text-white mb-4">Certifications & Achievements</h3>
              <ul className="list-disc list-inside text-gray-300 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {resumeData.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>

              {/* Education */}
              <h3 className="text-2xl font-semibold text-white mb-4">Education</h3>
              <div className="text-gray-300">
                <p className="font-medium text-lg">{resumeData.education.degree}</p>
                <p className="text-base">{resumeData.education.college}</p>
                <p className="text-sm">{resumeData.education.graduation}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact / Call to Action Section */}
        <section id="contact" ref={contactRef} className={`py-20 px-8 md:px-16 bg-gray-900 text-center fade-in-up ${contactInView ? 'is-in-view' : ''}`}>
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-white">
              Let's build something amazing together.
            </h2>
            <a href={`mailto:${resumeData.email}`} className="inline-block bg-teal-500 hover:bg-teal-600 text-gray-900 font-bold py-4 px-10 rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 text-xl">
              Get in Touch
            </a>
            <div className="flex justify-center gap-8 mt-12 text-gray-400">
              <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-teal-400 transition-colors duration-300" title="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-teal-400 transition-colors duration-300" title="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href={`mailto:${resumeData.email}`} className="text-4xl hover:text-teal-400 transition-colors duration-300" title="Email">
                <i className="fas fa-envelope"></i>
              </a>
              <a href={resumeData.portfolio} target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-teal-400 transition-colors duration-300" title="Portfolio">
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
