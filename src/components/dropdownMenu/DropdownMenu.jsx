import React from 'react';
import Button from 'react-bootstrap/Button'
import styles from './styles.module.css';
import { text } from '../../data.js';

const DropdownMenu = (props) => {
    const { visible, handleToggle, handleEdit, handleDelete } = props;
    const { editTxt, deleteTxt } = text;

    return (
        <div className={`${styles.dropdownMenu} ${visible ? `${styles.hidden}` : null}`}>
            <Button className={styles.close} as="span" variant="close" onClick={handleToggle}>x</Button>
            <ul>
                <li onClick={handleEdit}>
                    {editTxt}
                </li>
                <li onClick={handleDelete}>
                    {deleteTxt}
                </li>
            </ul>
        </div>
    )
}

export default DropdownMenu;
