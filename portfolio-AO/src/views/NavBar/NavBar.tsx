import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navPrinc}>
        <Link to="/" className={styles.logo}>
          {"<Adri/>"}
        </Link>

        <ul className={styles.list}>
          <li className={styles.article}>
            <Link to="/#home">1. Home</Link>
          </li>
          <li className={styles.article}>
            <Link to="/#about">2. About me</Link>
          </li>
          <li className={styles.article}>
            <Link to="#">3. Skills</Link>
          </li>
          <li className={styles.article}>
            <Link to="#">4. My Works</Link>
          </li>
          <li className={styles.article}>
            <Link to="#">5. Contact me</Link>
          </li>
        </ul>
      </div>
      <hr />
    </nav>
  );
};

export default NavBar;
