import React, {PropTypes} from "react";
import advertisementImage from "../images/advertisement.png";
import styles from "../styles/advertisement.css";

const Advertisement = () => {
  return (
    <div className={styles.advertisement}>
      <a href="">
        <img src={advertisementImage} />
      </a>
    </div>
  );
}

export default Advertisement;
