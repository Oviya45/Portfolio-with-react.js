
import React from "react";
import "./App.css";

const Header = () => (
  <header className="header">
    <div className="logo">Oviya M.S</div>
    <nav>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
);

const CoverPage = () => (
  <section className="cover-page">
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>Student at Chennai Institute of Technology</p>
      <button
        className="btn"
        onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
      >
        Get Started
      </button>
    </div>
  </section>
);

const About = () => (
  <div id="about" className="content-section">
    <h2>About Me</h2>
    <p>
      Hello! I’m Oviya M.S., a passionate and driven second-year student at Chennai Institute of
      Technology, with a focus on web development and software engineering. I have a strong
      foundation in programming and web technologies, including HTML, CSS, and JavaScript, which
      allows me to build responsive and visually appealing websites. My journey began with an
      interest in the logic and structure of programming, and over time, I’ve expanded my expertise
      to include languages like Java, C, C++, and Python, enabling me to work on both front-end and
      back-end development.
    </p>
    <p>
      In my studies, I’ve had the opportunity to explore various aspects of computer science, from
      algorithm design to object-oriented programming. I’m constantly seeking to improve my skills
      by working on practical projects and applying theoretical knowledge to solve real-world
      problems. I enjoy the process of coding and building applications that not only work but also
      provide seamless and enjoyable user experiences.
    </p>
    <p>
      My passion for technology drives me to stay updated with the latest trends and developments
      in the tech world. I am particularly drawn to full-stack development and aspire to work on
      large-scale web applications that integrate both front-end and back-end solutions. I am
      excited about the opportunities to collaborate on innovative projects and contribute to the
      tech community.
    </p>
  </div>
);

const Skills = () => (
  <div id="skills" className="content-section">
    <h2>Skills</h2>
    <div className="skills-list">
      {[
        "C",
        "C++",
        "Java",
        "Python",
        "JavaScript",
        "HTML",
        "CSS",
        "React",
        "Node.js",
        "SQL",
      ].map((skill) => (
        <div className="skill-item" key={skill}>
          {skill}
        </div>
      ))}
    </div>
  </div>
);

const Projects = () => (
  <div id="projects" className="projects content-section">
    <h2>My Projects</h2>
    {[
      {
        title: "Weather App",
        description:
          "A dynamic weather application built with HTML, CSS, and JavaScript. It allows users to check weather conditions by city and view detailed forecasts, using real-time data from weather APIs.",
      },
      {
        title: "Hotel Management (C++)",
        description:
          "A simple hotel management system built in C++, allowing users to manage reservations, check room availability, and view bills.",
      },
      {
        title: "Bank Account System (C++)",
        description:
          "A command-line application in C++ to manage bank account operations like deposits, withdrawals, and balance checks.",
      },
      {
        title: "Virtual Health Assistant (Python)",
        description:
          "A Python-based virtual assistant designed to provide basic health advice, track fitness goals, and manage schedules.",
      },
    ].map((project, index) => (
      <div className="project-item" key={index}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    ))}
  </div>
);

const Contact = () => (
  <div id="contact" className="content-section">
    <h2>Contact</h2>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required />
      <button type="submit">Send Message</button>
    </form>
  </div>
);

const Footer = () => (
  <footer>
    <p>© 2024 Oviya M.S. | All Rights Reserved</p>
  </footer>
);

function App() {
  return (
    <div>
      <Header />
      <CoverPage />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
