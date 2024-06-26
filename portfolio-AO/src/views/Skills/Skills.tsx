import styles from "./Skills.module.scss";

import { skillsData } from "./SkillsData";

const Skills: React.FC = () => {
  return (
    <section id="Habilidades" className={styles.card}>
      <div className={styles.sectionTitle}>
        <div className={styles.titleDecoration}></div>
        <h2>3. Habilidades</h2>
      </div>

      <article className={styles.skillsContainer}>
        {skillsData.map((skill) => (
          <div className={styles.skillContainer} key={skill.name}>
            <img src={skill.URL} alt={skill.name} className={styles.skillImg} />
            <span className={styles.skillTitle}>{skill.name}</span>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Skills;
