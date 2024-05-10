import styles from "./index.module.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";

console.log(styles);
const Header = () => {
  return (
    <header id={styles.header}>
      <div id={styles["header-top"]}>
        <div className="container">
          <div className={styles["header-top"]}>
            <a href="tel:+748 383 23 14">
              <FaPhoneAlt /> +748 383 23 14
            </a>
            <nav>
              <ul className={styles.list}>
                <li>
                  <a href="#">Term of Use</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Customer service</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div id={styles["header-middle"]}>
        <div className="container">
          <div className={styles["header-middle"]}>
            <h1 className={styles.logo}>
              <a href="#">ChicCharry</a>
            </h1>
            <div className={styles["input-wrapper"]}>
              <input type="text" placeholder="Search all product" />
              <IoSearchOutline className={styles.search} />
            </div>
            <nav>
              <ul>
                <li>
                  <a href="#">
                    <FaRegUser />
                    Sign up
                  </a>
                </li>
                <li>
                  <a href="#">
                    <CiHeart />
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="#">
                    <MdOutlineShoppingBag />
                    Basket
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div id={styles["header-bottom"]}>
        <div className={styles["header-bottom"]}>
          <div className="container">
            <nav>
              <ul>
                <li>
                  <a href="#">Evening bags</a>
                </li>
                <li>
                  <a href="#">Evening bags</a>
                </li>
                <li>
                  <a href="#">Evening bags</a>
                </li>
                <li>
                  <a href="#">Evening bags</a>
                </li>
                <li>
                  <a href="#">Evening bags</a>
                </li>
                <li>
                  <a href="#">Evening bags</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
