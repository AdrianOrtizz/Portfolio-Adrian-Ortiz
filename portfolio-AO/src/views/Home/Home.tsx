import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div id="Inicio" className={styles.title}>
      <h1>
        Hola! Soy <span className={styles.name}>Adrian Ortiz</span> <br />
        Desarrollador full stack
      </h1>
    </div>
  );
};

export default Home;
