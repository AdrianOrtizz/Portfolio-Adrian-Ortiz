import styles from "./Proyects.module.scss";

import { useState } from "react";
import { proyectData } from "./ProyectsData";

import AllProyects from "./ProyectsComponents/AllProyects";
import ProyectInfo from "./ProyectsComponents/ProyectInfo";

const Proyects = () => {
  const [proyect, SetProyect] = useState<proyectData>({
    name: "",
    imgURL: "",
    videoURL: "",
    gitHubURL: "",
    description: "",
  });

  return (
    <section id="Proyects" className={styles.card}>
      {proyect.name ? (
        <ProyectInfo proyect={proyect} SetProyect={SetProyect} />
      ) : (
        <AllProyects SetProyect={SetProyect} />
      )}
    </section>
  );
};

export default Proyects;
