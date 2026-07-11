import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <h1>MovieApp</h1>

      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/favorite"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Favorites
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
