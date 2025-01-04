import styles from "../About.module.scss";

import { interestImg } from "../AboutData";

const MyDescription: React.FC = () => {
  return (
    <div className={styles.descriptionContainer}>
      <article>
        <p>
          Hola! Me presento: soy desarrollador web full stack, soy de Buenos
          Aires, Argentina y tengo 22 años. Tengo experiencia en diferentes
          proyectos implementando tecnologías como JavaScript, React, Node.js y
          PostgreSQL. <br /> Gracias a mi background en administración y
          logística, he destacado en mis equipos por mi organización y
          proactividad. Siempre estoy dispuesto a trabajar en equipo logrando
          generar un buen clima laboral mediante la empatía, el compañerismo y
          el respeto.
        </p>
      </article>

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
