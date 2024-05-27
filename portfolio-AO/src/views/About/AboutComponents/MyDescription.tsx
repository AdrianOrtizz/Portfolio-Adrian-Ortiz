import styles from "../About.module.scss";

import { interestImg } from "../AboutData";

const MyDescription = () => {
  return (
    <div className={styles.descriptionContainer}>
      <p>
        Hola! Me presento: soy Adrian Ortiz, soy un desarrollador web full stack
        y soy de Buenos Aires, Argentina. Soy una persona organizada, proactiva
        y siempre dispuesto a trabajar en equipo y dar el 100% de mi capacidad
        para crear la solución más óptima a cualquier problema que se presente.
      </p>

      <h2 className={styles.interestTitle}>Mis intereses</h2>

      <div className={styles.interestsContainer}>
        {interestImg.map((image) => (
          <div key={image.title} className={styles.interestImgContainer}>
            <img
              src={image.URL}
              alt={image.title}
              className={styles.interestImg}
            />
            <span className={styles.imgTitle}>{image.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDescription;
