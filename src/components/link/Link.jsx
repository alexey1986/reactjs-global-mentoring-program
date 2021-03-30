import React from 'react';
import { PropTypes } from 'prop-types';

const Link = ({className, target, children}) => (<a className={className} href={target}>{children}</a>);

Link.propTypes = {
    className: PropTypes.string,
    target: PropTypes.string
};

export default Link;