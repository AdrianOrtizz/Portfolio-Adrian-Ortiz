import styles from "./NavBar.module.scss";

import Index from "./NavBarComponents/Index";

const NavBar = ({ scrollToSection }: { scrollToSection: Function }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navPrinc}>
        <span onClick={() => scrollToSection("Home")} className={styles.logo}>
          {"<Adri/>"}
        </span>
        <Index scrollToSection={scrollToSection} />
      </div>
      <hr />
    </nav>
  );
};

export default NavBar;
