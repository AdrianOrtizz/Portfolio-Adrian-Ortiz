import styles from "../About.module.scss";

const DownloadButton: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume_Adrian_Ortiz_FullStackDeveloper.pdf";
    link.download = "Resume_Adrian_Ortiz_FullStackDeveloper.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className={styles.downloadBtn}>
      DESCARGAR MI CV
    </button>
  );
};

export default DownloadButton;
