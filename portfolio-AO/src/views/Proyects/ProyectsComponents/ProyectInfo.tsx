import ArrowBack from "../../../components/ArrowBack/ArrowBack";

import styles from "../Proyects.module.scss";

import { proyectData } from "../ProyectsData";

interface ProyectInfoProps {
  proyect: proyectData;
  SetProyect: (proyect: proyectData) => void;
}

const ProyectInfo: React.FC<ProyectInfoProps> = ({ proyect, SetProyect }) => {
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
            technologies: [],
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
          <div className={styles.description}>
            <p>{proyect.description}</p>

            <h2 className="pt-12 text-center mb-6">
              Tecnologías y librerías utilizadas para este proyecto:
            </h2>
            <ul className="flex flex-wrap justify-center">
              {proyect.technologies.map((tech) => (
                <li className={styles.techContainer} key={tech.name}>
                  <img
                    src={tech.url}
                    alt={tech.name}
                    className={styles.techImg}
                  />
                  <span className={styles.techTitle}>{tech.name}</span>
                </li>
              ))}
            </ul>

            <article className=" flex flex-col items-center">
              <h2 className="mb-6">Repositorio de Git Hub</h2>
              <div className="w-32">
                <a className="" href={proyect.gitHubURL} target="_BLANK">
                  <img
                    src="https://res.cloudinary.com/djd7b0upe/image/upload/v1716055623/Portfolio/Redes/github_qdkaxg.png"
                    alt="Repositorio de Git Hub"
                    className="h-32"
                  />
                </a>
              </div>
            </article>
          </div>
        </div>
      </article>
    </article>
  );
};

export default ProyectInfo;
