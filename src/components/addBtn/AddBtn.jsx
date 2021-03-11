import React from 'react';
import ModalDialog from 'components/modal';
import AddMovie from 'components/AddMovie';
import Button from 'react-bootstrap/Button';
import { text } from '../../data.js';

class AddBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModalAdd: false
        };
    }
    
    handleModalAdd = () => {
        this.setState({
            showModalAdd: !this.state.showModalAdd
        });
    }

    render() {
        return (
            <>
                <Button variant="outline-secondary" type="button" onClick={this.handleModalAdd}>
                    {text.addMoreTxt}
                </Button>

                <ModalDialog type='add' state={this.state.showModalAdd} clickHandler={this.handleModalAdd}>
                    <AddMovie />
                </ModalDialog>
            </>
        )
    }

}

export default AddBtn;
