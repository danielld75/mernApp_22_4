import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class About extends Component {
  render() {
    return (
      <div>
        <h2>About our Company</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus explicabo fuga illum incidunt magni minima nam numquam porro quisquam voluptatum. Ad beatae ex quaerat rerum sint tempore! Optio velit, voluptatum.</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
