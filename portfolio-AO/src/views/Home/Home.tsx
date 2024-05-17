import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div id="home" className={styles.title}>
      <h1>
        Hi, I'm <span className={styles.name}>Adrian Ortiz</span> <br /> Full
        stack developer
      </h1>
    </div>
  );
};

export default Home;
