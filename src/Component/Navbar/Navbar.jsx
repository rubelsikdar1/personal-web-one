import { NavLink } from "react-router-dom";
import Style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <header className={Style.mainBg}>
        <nav className="container">
          <div className={Style.flexRow}>
            <div className={Style.logo}>
              <h2 className="OpenSans700-h">Rubel Sikdar</h2>
            </div>
            <div className={Style.menu}>
              <ul className={Style.menuItem}>
                <li>
                  <NavLink to="./home"> Home</NavLink>
                </li>
                <li>
                  <NavLink to="./about"> About</NavLink>
                </li>
                <li>
                  <NavLink to="./contact"> Contacts </NavLink>
                </li>
                <li>
                  <NavLink to="./protfolio"> Protfolio </NavLink>
                </li>
                <li>
                  <NavLink to="./blog"> Blog </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
