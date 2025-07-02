import { NavLink } from "react-router";
import "../../assets/style/mainmenu.css";
import logo from "../../assets/images/LOGO.png";

function MainMenu() {
  return (
    <>
      <div className="main-container">
        <nav className="main-menu">
          <img src={logo} alt="Logo" />
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
      </div>
    </>
  );
}

export default MainMenu;
