import styles from "../NavBar.module.scss";

interface NavBarIndexProps {
  scrollToSection: (section: string) => void;
  setShowContact: (show: boolean) => void;
}

const articles: string[] = ["Inicio", "Sobre mí", "Habilidades", "Proyectos"];

const Index: React.FC<NavBarIndexProps> = ({
  scrollToSection,
  setShowContact,
}) => {
  return (
    <ul className={styles.list}>
      {articles.map((art, index) => (
        <li className={styles.article} key={index}>
          <span onClick={() => scrollToSection(art.split(" ")[0])}>{`${
            index + 1
          }. ${art}`}</span>
        </li>
      ))}

      <li className={styles.article}>
        <button onClick={() => setShowContact(true)}>5. Contactame</button>
      </li>
    </ul>
  );
};

export default Index;
