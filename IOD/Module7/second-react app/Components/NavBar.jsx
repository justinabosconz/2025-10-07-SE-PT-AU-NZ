import { NavLink } from "react-router-dom";
import "../src/App.css";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/LoginForm">Login</NavLink>
        </li>
        <li>
          <NavLink to="/BitcoinRateExercises">BitcoinRates</NavLink>
        </li>
      </ul>{" "}
    </nav>
  );
}
