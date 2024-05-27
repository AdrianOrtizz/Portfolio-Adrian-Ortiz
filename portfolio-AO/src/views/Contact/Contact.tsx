import styles from "./Contact.module.scss";

const Contact: React.FC = () => {
  return (
    <section id="Contactame" className={styles.card}>
      <div className={styles.sectionTitle}>
        <div className={styles.titleDecoration}></div>
        <h2>5. Contactame</h2>
      </div>
      <div className="self-center">
        <h2 className="m-4">Número de telefono: +54 11 3611-7529</h2>
        <h2 className="m-4">Email: Adrianortizzt1vl@gmail.com</h2>
        <div className="flex justify-center">
          <a
            className="m-4"
            href="https://www.linkedin.com/in/adrian-ortiz-7b3852230/"
            target="_BLANK"
          >
            <img
              className="w-20 hover:scale-105 transition-transform"
              src="https://res.cloudinary.com/djd7b0upe/image/upload/v1716055624/Portfolio/Redes/linkedin_bboykt.png"
              alt="LinkedIn"
            />
          </a>
          <a
            className="m-4"
            href="https://github.com/AdrianOrtizz"
            target="_BLANK"
          >
            <img
              className="w-20 hover:scale-105 transition-transform"
              src="https://res.cloudinary.com/djd7b0upe/image/upload/v1716055623/Portfolio/Redes/github_qdkaxg.png"
              alt="Git Hub"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
