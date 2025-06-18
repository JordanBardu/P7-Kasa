import { NavLink } from "react-router";
import "../../assets/style/mainmenu.css";

function MainMenu() {
  return (
    <nav className="main-menu">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainMenu;
