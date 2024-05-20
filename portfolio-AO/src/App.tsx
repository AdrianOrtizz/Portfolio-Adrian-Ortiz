import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Home from "./views/Home/Home";
import About from "./views/About/About";
import Skills from "./views/Skills/Skills";
import Proyects from "./views/Proyects/Proyects";
import Contact from "./views/Contact/Contact";

import NavBar from "./components/NavBar/NavBar";
import ArrowGuide from "./components/ArrowGuide/ArrowGuide";

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
      <Skills />
      <Proyects />
      <Contact />

      <ArrowGuide />
    </main>
  );
}

export default App;
