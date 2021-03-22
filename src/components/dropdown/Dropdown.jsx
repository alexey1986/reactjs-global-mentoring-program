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
        const { handleEdit, handleDelete } = this.props;

        return (
            <div className={styles.dropdownToggle}>
                <Button className={styles.dropdownBtn} as="a" variant="dropdown" onClick={this.handleToggleDropdown.bind(this)}>...</Button>
                <DropdownMenu visible={this.state.hideDropdown} handleToggle={this.handleToggleDropdown.bind(this)} handleEdit={handleEdit} handleDelete={handleDelete} />
            </div>
        )
    }
}

export default Dropdown;
