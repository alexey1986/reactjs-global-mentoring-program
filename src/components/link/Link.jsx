import React from 'react';
import { PropTypes } from 'prop-types';

const Link = (props) => (<a className={props.className} href={props.target}>{props.children}</a>);

Link.propTypes = {
    className: PropTypes.string,
    target: PropTypes.string
};

export default Link;