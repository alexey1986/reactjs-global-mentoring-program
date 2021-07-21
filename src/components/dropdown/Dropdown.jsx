import React, { useState } from 'react';
import DropdownMenu from '@components/dropdownMenu';
import Button from 'react-bootstrap/Button'
import styles from './styles.module.css';

const Dropdown = (props) => {
    const [hideDropdown, setHideDropdown] = useState(true);

    const handleToggleDropdown = (e) => {
        e.stopPropagation();
        setHideDropdown(!hideDropdown);
    }

    return (
        <div className={styles.dropdownToggle}>
            <Button className={styles.dropdownBtn} as="a" variant="dropdown" onClick={(e) => handleToggleDropdown(e)}>...</Button>
            <DropdownMenu visible={hideDropdown} handleToggle={handleToggleDropdown} {...props} />
        </div>
    )
}

export default Dropdown;
