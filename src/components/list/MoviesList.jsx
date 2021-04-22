import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMoviesList } from 'service/index.js';
import { Container, Row } from 'react-bootstrap';
import MovieItem from 'components/item';
import ModalDialog from 'components/modal';
import NoMoviesFound from 'components/noMoviesFound';
import EditMovie from 'components/editMovie';
import DeleteMovie from 'components/deleteMovie';
import { deleteMovie } from 'service/index.js';
import { toggleDeleteModal, hideEditForm } from 'actions/actions';
import styles from './styles.module.css';

const MoviesList = () => {
    const movies = useSelector(state => state.fetchReducer.movies);
    const count = useSelector(state => state.fetchReducer.totalAmount);
    let params = useSelector(state => state.fetchReducer.parameters);
    const editFormModal = useSelector(state => state.modalReducer.editFormModal);
    const deleteFormModal = useSelector(state => state.modalReducer.deleteFormModal);
    const movieToEdit = useSelector(state => state.modalReducer.movieToEdit);
    const movieToDelete = useSelector(state => state.modalReducer.movieToDelete);

    const dispatch = useDispatch();

    const { query } = useParams();


    useEffect(() => {
        if (query) {
            // params = {...params, ...{ search: query, searchBy: 'title', limit: ''}}
            params = { search: query, searchBy: 'title', limit: ''}
        }
        
        getMoviesList(dispatch, params);
    }, [params, query]);

    return (
        <>
            <div className={styles.moviesList}>
                <Container>
                    <Row>
                        {
                            movies.map(item => (
                                <MovieItem key={item.id} movie={item} />
                            ))

                        }
                    </Row>
                    {
                        !count && <NoMoviesFound />
                    }
                </Container>
            </div>

            <ModalDialog type='edit' visible={editFormModal} handleClose={() => dispatch(hideEditForm())}>
                <EditMovie data={movieToEdit} handleClose={() => dispatch(hideEditForm())} />
            </ModalDialog>

            <ModalDialog type='delete' visible={deleteFormModal} handleClose={() => dispatch(toggleDeleteModal())} handleDelete={() => deleteMovie(dispatch, movieToDelete)}>
                <DeleteMovie />
            </ModalDialog>
        </>
    )
}

export default MoviesList;
