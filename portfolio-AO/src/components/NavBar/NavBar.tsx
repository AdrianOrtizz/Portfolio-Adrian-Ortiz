import styles from "./NavBar.module.scss";

import Index from "./NavBarComponents/Index";

interface NavBarProps {
  scrollToSection: Function;
  setShowContact: Function;
}

const NavBar: React.FC<NavBarProps> = ({ scrollToSection, setShowContact }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navPrinc}>
        <span onClick={() => scrollToSection("Home")} className={styles.logo}>
          {"<Adri/>"}
        </span>
        <Index
          setShowContact={setShowContact}
          scrollToSection={scrollToSection}
        />
      </div>
      <hr />
    </nav>
  );
};

export default NavBar;
