import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMoviesList, deleteMovie } from '@service/index.js';
import { Container, Row } from 'react-bootstrap';
import MovieItem from '@components/item';
import ModalDialog from '@components/modal';
import NoMoviesFound from '@components/noMoviesFound';
import EditMovie from '@components/editMovie';
import DeleteMovie from '@components/deleteMovie';
import Loader from '@components/loader';
import { toggleDeleteModal, hideEditForm } from '@actions/actions';
import styles from './styles.module.css';

const MoviesList = () => {
    const movies = useSelector(state => state.fetchReducer.movies);
    const count = useSelector(state => state.fetchReducer.totalAmount);
    let params = useSelector(state => state.fetchReducer.parameters);
    const editFormModal = useSelector(state => state.modalReducer.editFormModal);
    const deleteFormModal = useSelector(state => state.modalReducer.deleteFormModal);
    const movieToEdit = useSelector(state => state.modalReducer.movieToEdit);
    const movieToDelete = useSelector(state => state.modalReducer.movieToDelete);
    const isLoading = useSelector(state => state.fetchReducer.isLoading);

    const dispatch = useDispatch();

    const { query } = useParams();

    const closeEditDialog = useCallback(() => {
        dispatch(hideEditForm());
    }, []);

    const closeDeleteDialog = useCallback(() => {
        dispatch(toggleDeleteModal())
    }, []);

    const deleteMovieHandler = useCallback(() => {
        deleteMovie(dispatch, movieToDelete)
    }, []);

    useEffect(() => {
        if (query) {
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
                        (!count && !isLoading) && <NoMoviesFound />
                    }
                </Container>
            </div>

            { isLoading && <Loader />}

            <ModalDialog type='edit' visible={editFormModal} handleClose={() => closeEditDialog()}>
                <EditMovie data={movieToEdit} handleClose={() => closeEditDialog()} />
            </ModalDialog>

            <ModalDialog type='delete' visible={deleteFormModal} handleClose={() => closeDeleteDialog()}>
                <DeleteMovie handleClose={() => closeDeleteDialog()} handleDelete={() => deleteMovieHandler()} />
            </ModalDialog>
        </>
    )
}

export default MoviesList;
