import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <header>
        <h1>MovieApp</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About me</Link>
          <Link to="/">Contact</Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
