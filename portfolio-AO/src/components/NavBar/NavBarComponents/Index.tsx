import styles from "../NavBar.module.scss";

interface NavBarIndexProps {
  scrollToSection: Function;
}

const articles: string[] = [
  "Inicio",
  "Sobre mí",
  "Habilidades",
  "Proyectos",
  "Contactame",
];

const Index: React.FC<NavBarIndexProps> = ({ scrollToSection }) => {
  return (
    <ul className={styles.list}>
      {articles.map((art, index) => (
        <li className={styles.article} key={index}>
          <span onClick={() => scrollToSection(art.split(" ")[0])}>{`${
            index + 1
          }. ${art}`}</span>
        </li>
      ))}
    </ul>
  );
};

export default Index;
