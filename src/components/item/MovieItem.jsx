import React from 'react';
import { PropTypes } from 'prop-types';
import Dropdown from 'components/dropdown';
import MovieInfo from 'components/info';
import ModalDialog from 'components/modal';
import EditMovie from 'components/editMovie';
import DeleteMovie from 'components/deleteMovie';
import Link from 'components/link';
import Col from 'react-bootstrap/Col';
import styles from './styles.module.css';

class MovieItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModalEdit: false,
            showModalDelete: false
        };
    }

    handleModalEdit = () => {
        this.setState({
            showModalEdit: !this.state.showModalEdit
        });
    }

    handleModalDelete = () => {
        this.setState({
            showModalDelete: !this.state.showModalDelete
        });
    }

    render() {
        const { movie } = this.props;
        const { title, poster_path } = movie;
        const { serialWrapper, serialPoster } = styles;
        const { showModalEdit, showModalDelete } = this.state;

        return (
            <>
                <Col md={4} className={serialWrapper}>
                    <Dropdown handleEdit={this.handleModalEdit} handleDelete={this.handleModalDelete} />
                    <Link className={styles.itemLink} target="#">
                        <img className={serialPoster} src={poster_path} alt={title} />
                        <MovieInfo meta={movie} />
                    </Link>
                </Col>

                <ModalDialog type='edit' state={showModalEdit} clickHandler={this.handleModalEdit}>
                    <EditMovie data={movie} />
                </ModalDialog>

                <ModalDialog type='delete' state={showModalDelete} clickHandler={this.handleModalDelete}>
                    <DeleteMovie />
                </ModalDialog>
            </>
        )
    }
}

MovieItem.propTypes = {
    movie: PropTypes.object
};

export default MovieItem;
