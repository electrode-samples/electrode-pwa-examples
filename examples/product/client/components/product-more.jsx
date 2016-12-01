import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {fetchCollection} from "../actions"
import styles from "../styles/product-more.css";

class ProductMore extends React.Component {
  componentDidMount() {
    const {dispatch} = this.props;

    dispatch(fetchCollection());
  }

  render() {
    const items = []
    const {title} = this.props;

    return (
      <div className={styles.productMore}>
        <h3 className={styles.productMoreTitle}>{title}</h3>
        {this.renderItems()}
      </div>
    );
  }

  renderItems() {
    const {product} = this.props;

    if (!product.moreCollection.length) {
      return (
        <div className={styles.productMoreLoading}></div>
      );
    }

    const items = product.moreCollection.map(() => (
      <div className={styles.productMoreItemsItem}>

      </div>
    ));

    return (
      <div className={styles.productMoreItems}>
        {items}
      </div>
    );
  }
}

ProductMore.propTypes = {
  dispatch: PropTypes.func,
  product: PropTypes.object
};

ProductMore.defaultProps = {
  product: {}
};

export default connect()(ProductMore);
