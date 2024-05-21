import ArrowBack from "../../../components/ArrowBack/ArrowBack";

import styles from "../Proyects.module.scss";

import { proyectData } from "../ProyectsData";

const ProyectInfo = ({
  proyect,
  SetProyect,
}: {
  proyect: proyectData;
  SetProyect: Function;
}) => {
  return (
    <article>
      <div
        className="w-8"
        onClick={() =>
          SetProyect({
            name: "",
            imgURL: "",
            videoURL: "",
            gitHubURL: "",
            description: "",
          })
        }
      >
        <ArrowBack />
      </div>
      <article>
        <div className={styles.proyectInfoContainer}>
          <h2 className={styles.proyectTitle}>{proyect.name}</h2>
          <div className={styles.proyectVideoContainer}>
            <iframe
              // width="1280"
              // height="720"
              src={proyect.videoURL}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full rounded-xl"
            ></iframe>
          </div>
          <p className={styles.description}>
            {proyect.description} <br />{" "}
            <a className="border-b-2" href={proyect.gitHubURL} target="_BLANK">
              Git Hub Repository
            </a>
          </p>
        </div>
      </article>
    </article>
  );
};

export default ProyectInfo;
