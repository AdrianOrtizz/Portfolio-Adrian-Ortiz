import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import NavBar from "./views/NavBar/NavBar";
import Home from "./views/Home/Home";
import About from "./views/About/About";

import styles from "./App.module.scss";

function App() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <main className={styles.main}>
      <NavBar />
      <Home />
      <About />
    </main>
  );
}

export default App;
