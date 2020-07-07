import React from 'react';
import PropTypes from 'prop-types';

function Greeting(props) {
    const {name} = props
    return (
      <h2>Welcome {name}</h2>
    )
}

Greeting.propTypes = {
    name: PropTypes.string.isRequired
}

export default Greeting;
