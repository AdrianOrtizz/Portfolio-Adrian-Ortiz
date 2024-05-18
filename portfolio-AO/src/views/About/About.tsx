import styles from "./About.module.scss";

import MyDescription from "./AboutComponents/MyDescription";
import ImageSection from "./AboutComponents/ImageSection";
import DownloadButton from "./AboutComponents/DownloadButton";

const About = () => {
  return (
    <div id="about" className={styles.card}>
      <div className={styles.sectionTitle}>
        <h2>2. About me</h2>
        <div className={styles.titleDecoration}></div>
      </div>

      <div className={styles.principalContent}>
        <MyDescription />
        <ImageSection />
      </div>

      <DownloadButton />
    </div>
  );
};

export default About;
