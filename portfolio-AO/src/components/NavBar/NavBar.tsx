import styles from "./NavBar.module.scss";

import { Link } from "react-router-dom";

import Index from "./NavBarComponents/Index";

const NavBar = ({ scrollToSection }: { scrollToSection: Function }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navPrinc}>
        <Link to="/#Home" className={styles.logo}>
          {"<Adri/>"}
        </Link>
        <Index scrollToSection={scrollToSection} />
      </div>
      <hr />
    </nav>
  );
};

export default NavBar;
