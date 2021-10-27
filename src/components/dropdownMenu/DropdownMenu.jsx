import React from 'react';
import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button'
import styles from './styles.module.css';
import { text } from '../../data.js';

const DropdownMenu = ({ visible, handleToggle, handleEdit, handleDelete }) => {
    const { editTxt, deleteTxt } = text;

    return (
        <div className={`${styles.dropdownMenu} ${visible ? `${styles.hidden}` : null}`}>
            <Button className={styles.close} as="span" variant="close" onClick={(e) => handleToggle(e)}>x</Button>
            <ul>
                <li onClick={(e) => handleEdit(e)}>
                    {editTxt}
                </li>
                <li onClick={(e) => handleDelete(e)}>
                    {deleteTxt}
                </li>
            </ul>
        </div>
    )
}

DropdownMenu.propTypes = {
    visible: PropTypes.bool,
    handleToggle: PropTypes.func,
    handleEdit: PropTypes.func,
    handleDelete: PropTypes.func
};

export default DropdownMenu;
