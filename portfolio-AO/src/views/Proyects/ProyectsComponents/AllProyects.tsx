import styles from "../Proyects.module.scss";
import { proyects } from "../ProyectsData";

interface AllProyectsProps {
  SetProyect: Function;
}

const AllProyects: React.FC<AllProyectsProps> = ({ SetProyect }) => {
  return (
    <article>
      <div className={styles.sectionTitle}>
        <h2>4. Proyectos</h2>
        <div className={styles.titleDecoration}></div>
      </div>
      <article className={styles.proyectsContainer}>
        {proyects.map((proyect) => (
          <div
            onClick={() => SetProyect(proyect)}
            className={styles.proyectContainer}
            key={proyect.name}
          >
            <img
              className={styles.proyectImg}
              src={proyect.imgURL}
              alt={proyect.name}
            />
            <span className={styles.proyectName}>{proyect.name}</span>
          </div>
        ))}
      </article>
    </article>
  );
};

export default AllProyects;
