import React from 'react';
import DropdownMenu from 'components/dropdownMenu';
import Button from 'react-bootstrap/Button'
import styles from './styles.module.css';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hideDropdown: true
        };
    }

    handleToggleDropdown() {
        this.setState({
            hideDropdown: !this.state.hideDropdown
        });
    }

    render() {
        return (
            <div className={styles.dropdownToggle}>
                <Button className={styles.dropdownBtn} as="a" variant="dropdown" onClick={this.handleToggleDropdown.bind(this)}>...</Button>
                <DropdownMenu visible={this.state.hideDropdown} handleToggle={this.handleToggleDropdown.bind(this)} {...this.props} />
            </div>
        )
    }
}

export default Dropdown;
