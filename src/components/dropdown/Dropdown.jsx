import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import DropdownMenu from 'components/dropdownMenu';
import Button from 'react-bootstrap/Button'
import styles from './styles.module.css';

const Dropdown = ({ handleEdit, handleDelete }) => {
    const [isDropdownHidden, setHideDropdown] = useState(true);

    const handleToggleDropdown = (e) => {
        e.stopPropagation();
        setHideDropdown(!isDropdownHidden);
    }

    return (
        <div className={styles.dropdownToggle}>
            <Button className={styles.dropdownBtn} as="a" variant="dropdown" onClick={(e) => handleToggleDropdown(e)}>...</Button>
            <DropdownMenu visible={isDropdownHidden} handleToggle={handleToggleDropdown} handleEdit={handleEdit} handleDelete={handleDelete} />
        </div>
    )
}

Dropdown.propTypes = {
    handleEdit: PropTypes.func,
    handleDelete: PropTypes.func
};

export default Dropdown;
