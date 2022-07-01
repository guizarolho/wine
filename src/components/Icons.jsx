import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledText = styled.p`
  display: inline;
`;

function Icons(props) {
  const {func} = props;
  return (
    <div>
      <StyledText>Search</StyledText>
      <StyledText>Profile</StyledText>
      <StyledText>Cart</StyledText>
      <input type='text' onChange={(({target}) => func(target.value))} />
    </div>
  );
}

Icons.propTypes = {
  func: PropTypes.func.isRequired,
};

export default Icons;
