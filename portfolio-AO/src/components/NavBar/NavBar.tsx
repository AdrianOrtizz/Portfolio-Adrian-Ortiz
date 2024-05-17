import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";

const NavBar = ({
  language,
  setLanguage,
}: {
  language: string;
  setLanguage: Function;
}) => {
  return (
    <nav className="container m-auto flex flex-col">
      <div className="flex justify-between">
        <Link to="/inicio" className={styles.logo}>
          {"<Adri/>"}
        </Link>

        <ul className="flex m-3">
          <li className={styles.article}>
            <Link to="#">1. Inicio</Link>
          </li>
          <li className={styles.article}>
            <Link to="#">2. Sobre mí</Link>
          </li>
          <li className={styles.article}>
            <Link to="#">3. Habilidades</Link>
          </li>
          <li className={styles.article}>
            <Link to="#">4. Proyectos</Link>
          </li>
          <li className={styles.article}>
            <Link to="#">5. Contacto</Link>
          </li>
          <li className="self-center cursor-pointer">
            <span
              className={` transition-colors
              ${language === "spanish" ? "text-mipal" : "text-mipal-gray"}`}
              onClick={() => setLanguage("spanish")}
            >
              Es{" "}
            </span>
            <span
              className={` transition-colors
              ${language === "english" ? "text-mipal" : "text-mipal-gray"}`}
              onClick={() => setLanguage("english")}
            >
              En
            </span>
          </li>
        </ul>
      </div>
      <hr />
    </nav>
  );
};

export default NavBar;
