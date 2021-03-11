import React from 'react';
import Button from 'react-bootstrap/Button'
import styles from './styles.module.css';
import { text } from '../../data.js';

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
        const { editTxt, deleteTxt } = text;

        return (
            <div className={styles.dropdownToggle}>
                <Button className={styles.dropdownBtn} as="a" variant="dropdown" onClick={this.handleToggleDropdown.bind(this)}>...</Button>
                <div className={`${styles.dropdownMenu} ${this.state.hideDropdown ? `${styles.hidden}` : null}`}>
                    <Button className={styles.close} as="span" variant="close" onClick={this.handleToggleDropdown.bind(this)}>x</Button>
                    <ul>
                        <li onClick={handleEdit}>
                            {editTxt}
                        </li>
                        <li onClick={handleDelete}>
                            {deleteTxt}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Dropdown;
