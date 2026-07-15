import Navbar from "../components/Navbar";
import { Info, Sparkles, Hammer, CodeXml } from "lucide-react";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="about">
        <h1 className="about-title">
          <Info size={34} />
          About MovieApp
        </h1>

        <p className="about-description">
          MovieApp is a modern React application that lets users search,
          explore, and save their favorite movies. Powered by the OMDb API, it
          provides detailed movie information through a clean, responsive, and
          user-friendly interface.
        </p>

        <div className="about-card">
          <h2>
            <Sparkles size={22} />
            Features
          </h2>

          <ul>
            <li>Search movies and TV shows instantly</li>
            <li>View detailed movie information</li>
            <li>Save favorite movies with Local Storage</li>
            <li>React Router powered navigation</li>
            <li>Back navigation support</li>
            <li>Input validation and error handling</li>
            <li>Loading and empty states</li>
            <li>Responsive design for desktop and mobile</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>
            <Hammer size={22} />
            Tech Stack
          </h2>

          <p>
            React • JavaScript • React Router • Vite • CSS • OMDb API • Local
            Storage
          </p>
        </div>

        <div className="about-card">
          <h2>
            <CodeXml size={22} />
            Developer
          </h2>

          <p>
            Developed by <strong>Amit Sharma</strong> as a portfolio project to
            strengthen React fundamentals, API integration, client-side routing,
            state management, Local Storage, and responsive UI development.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
