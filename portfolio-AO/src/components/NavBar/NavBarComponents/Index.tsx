import styles from "../NavBar.module.scss";

const articles: string[] = [
  "Home",
  "About me",
  "Skills",
  "Projects",
  "Contact me",
];

const Index = ({ scrollToSection }: { scrollToSection: Function }) => {
  return (
    <ul className={styles.list}>
      {articles.map((art, index) => (
        <li className={styles.article}>
          <span onClick={() => scrollToSection(art.split(" ")[0])}>{`${
            index + 1
          }. ${art}`}</span>
        </li>
      ))}
    </ul>
  );
};

export default Index;
