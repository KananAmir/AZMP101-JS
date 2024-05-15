import { NavLink } from "react-router-dom";
import "./index.scss";
import { useContext } from "react";
import { FavoritesContext } from "../../../context/favoritesContext";
const Header = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Products</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/favorites"}>
              Favorites{" "}
              <b>
                <sup style={{ color: "red" }}>{favorites.length}</sup>
              </b>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
