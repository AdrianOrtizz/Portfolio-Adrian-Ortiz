import styles from "../About.module.scss";

import { interestImg } from "../AboutData";

const MyDescription = () => {
  return (
    <div className={styles.descriptionContainer}>
      <p>
        Hello! Let me introduce myself: I am Adrián Ortiz, I am a full stack web
        developer from Buenos Aires, Argentina. I am an organized, proactive
        person and always willing to work as a team and give 100% of my ability
        to create the most optimal solution to any problem that arises.
      </p>

      <h2 className={styles.interestTitle}>My Interests</h2>

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
