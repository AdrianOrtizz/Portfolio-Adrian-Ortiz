import styles from "../About.module.scss";

const DownloadButton: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Adrian_Ortiz_CV.pdf";
    link.download = "Adrian_Ortiz_CV.pdf";
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
