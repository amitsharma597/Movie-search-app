import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about">
        <h1>🎬 About MovieApp</h1>

        <p>
          MovieApp is a React-based movie search application powered by the OMDb
          API. It allows users to search for movies and explore detailed
          information including ratings, release date, genre, cast, runtime, and
          plot through a clean and responsive interface.
        </p>

        <div className="about-card">
          <h2>✨ Features</h2>

          <ul>
            <li>Search movies using the OMDb API</li>
            <li>Detailed movie information page</li>
            <li>React Router based navigation</li>
            <li>Back button navigation</li>
            <li>Search input validation</li>
            <li>Loading and error states</li>
            <li>Responsive design for all devices</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>🛠 Tech Stack</h2>

          <p>React • JavaScript • React Router • Vite • CSS • OMDb API</p>
        </div>

        <div className="about-card">
          <h2>👨‍💻 Developer</h2>

          <p>
            Built by <strong>Amit Sharma</strong> as a React project to practice
            API integration, routing, state management, and responsive UI
            design.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
