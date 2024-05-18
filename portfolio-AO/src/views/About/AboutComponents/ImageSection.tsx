import styles from "../About.module.scss";

import { myImgURL } from "../AboutData";

const ImageSection = () => {
  return (
    <div className={styles.myImgSection}>
      <div className={styles.imgContainer}>
        <img src={myImgURL} alt="Adrian Ortiz" className={styles.myImg} />
      </div>

      <div className={styles.myImgDecoration}></div>
    </div>
  );
};

export default ImageSection;
