import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({count}) => {
    return (
        <div>{count} movies found</div>
    )
}

Counter.propTypes = {
    count: PropTypes.number
};

export default Counter;