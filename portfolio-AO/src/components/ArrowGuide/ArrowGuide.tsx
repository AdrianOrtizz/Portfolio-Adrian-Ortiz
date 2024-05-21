import styles from "./ArrowGuide.module.scss";

import { Link } from "react-router-dom";

const ArrowGuide = () => {
  return (
    <div className={styles.arrowContainer}>
      <Link to="/#About">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="#1B1A55"
            d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
          ></path>
        </svg>
      </Link>
    </div>
  );
};

export default ArrowGuide;
