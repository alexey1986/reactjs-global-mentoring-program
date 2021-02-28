import React from 'react';
import ReactDom from 'react-dom';

const element = React.createElement;

ReactDom.render(
    element('div', null, 'Привет, мир!'),
    document.getElementById('root')
);
