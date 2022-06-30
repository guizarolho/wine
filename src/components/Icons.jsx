import React from 'react';
import PropTypes from 'prop-types';

function Icons(props) {
  const {func} = props;
  return (
    <div>
      <p style={{display: 'inline'}}>Search</p>
      <p style={{display: 'inline'}}>Profile</p>
      <p style={{display: 'inline'}}>Cart</p>
      <input type='text' onChange={(({target}) => func(target.value))} />
    </div>
  );
}

Icons.propTypes = {
  func: PropTypes.func.isRequired,
};

export default Icons;
