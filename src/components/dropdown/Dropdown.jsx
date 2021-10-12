import React, { useState } from 'react';
import DropdownMenu from 'components/dropdownMenu';
import Button from 'react-bootstrap/Button'
import styles from './styles.module.css';

const Dropdown = (props) => {
    // NOTE: It is better to have more sense for variables
    // For example, "isDropdownHiden" or "isDropdownVisible"
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

// NOTE: Add PropTypes here. I see it is using only for DropdownMenu
// and there we know what kind of data it would be

export default Dropdown;
