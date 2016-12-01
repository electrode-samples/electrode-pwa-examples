import React from "react";
import advertisementImage from "../images/advertisement-1.png";
import styles from "../styles/advertisement.css";

const Advertisement = () => {
  return (
    <div className={styles.advertisement}>
      <a href="">
        <img src={advertisementImage} alt="ad" />
      </a>
    </div>
  );
};

export default Advertisement;
