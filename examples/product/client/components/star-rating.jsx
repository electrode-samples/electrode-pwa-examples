import React, {PropTypes} from "react";
import range from "lodash/range";
import styles from "../styles/star-rating.css";

const renderStarRating = (rating) => {
  const ratingIcons = (new Array(5)).fill("star_border");

  range(0, rating).forEach((i) => {
    ratingIcons[i] = "star"
  });

  if (!Number.isInteger(rating)) {
    ratingIcons[ratingIcons.length - 1] = "star_half";
  }

  return ratingIcons.map((icon, i) => {
    return <i className="material-icons" key={i}>{icon}</i>
  });
};

const StarRating = (props) => {
  return (
    <span className={styles.starRating}>
      {renderStarRating(props.rating)}
    </span>
  );
}

StarRating.propTypes = {
  rating: PropTypes.number
};

StarRating.defaultProps = {
  rating: 0
};

export default StarRating;
