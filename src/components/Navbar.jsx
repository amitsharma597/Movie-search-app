import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <header>
        <h1>MovieApp</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
