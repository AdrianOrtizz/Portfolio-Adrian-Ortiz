import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Home from "./views/Home/Home";
import About from "./views/About/About";
import Skills from "./views/Skills/Skills";
import Proyects from "./views/Proyects/Proyects";
import Contact from "./views/Contact/Contact";

import NavBar from "./components/NavBar/NavBar";
import ArrowGuide from "./components/ArrowGuide/ArrowGuide";
import ContactButton from "./components/ContactButton/ContactButton";

import styles from "./App.module.scss";

import handleShowContact from "./helpers/showContact";

const App: React.FC = () => {
  const location = useLocation();
  const [showContact, setShowContact] = useState<boolean>(false);

  useEffect(() => {
    handleShowContact(showContact);
  }, [showContact]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.hash) {
      scrollToSection(location.hash.substring(1));
    }
  }, [location]);

  return (
    <main className={styles.main}>
      <NavBar
        scrollToSection={scrollToSection}
        setShowContact={setShowContact}
      />

      {showContact && <Contact setShowContact={setShowContact} />}

      <Home />
      <About />
      <Skills />
      <Proyects />

      <ContactButton setShowContact={setShowContact} />
      <ArrowGuide scrollToSection={scrollToSection} />
    </main>
  );
};

export default App;
