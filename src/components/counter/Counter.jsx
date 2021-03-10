import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
    return (
        <div>{props.count} movies found</div>
    )
}

Counter.propTypes = {
    count: PropTypes.number
};

export default Counter;