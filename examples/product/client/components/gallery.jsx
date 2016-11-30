import React, {PropTypes} from "react";
import styles from "../styles/gallery.css";

export default class Gallery extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {selectedImage: 0};
    this.handleMouseOverImage = this.handleMouseOverImage.bind(this);
  }

  render() {
    return (
      <div className={styles.gallery}>
        {this.renderNav()}
        {this.renderImageSelection()}
      </div>
    );
  }

  renderNav() {
    const {images} = this.props;
    const navItems = images.map((image, i) => (
      <img
      className={styles.galleryNavItem}
      key={i}
      onMouseOver={this.handleMouseOverImage.bind(this, i)}
      src={image} />
    ));

    return (
      <div className={styles.galleryNav}>
        {navItems}
      </div>
    );
  }

  renderImageSelection() {
    const {images} = this.props;
    const {selectedImage} = this.state;

    return (
      <div className={styles.galleryImage}>
        <img src={images[selectedImage]} />
      </div>
    );
  }

  handleMouseOverImage(i) {
    this.setState({selectedImage: i});
  }
}

Gallery.propTypes = {
  product: PropTypes.object
};

Gallery.defaultProps = {
  product: {}
};
