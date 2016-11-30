import React, {PropTypes} from "react";
import {connect} from "react-redux";
import Advertisement from "./Advertisement";
import Header from "./header";
import Product from "./product";

export class Home extends React.Component {
  render() {
    const {data} = this.props;

    return (
      <div>
        <Header navItemsTop={data.navItemsTop} />
        <Advertisement />
        <Product
        breadcrumbLinks={data.breadcrumbLinks}
        title={data.productTitle} />
      </div>
    );
  }
}

Home.propTypes = {
  data: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = (state) => ({
  data: state && state.data
});

export default connect(
  mapStateToProps
)(Home);
