import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from 'components/header';
import Search from 'components/search';
import Genres from 'components/genres';
import Sort from 'components/sort';
import Counter from 'components/counter';
import MoviesList from 'components/list';
import MovieDetails from 'components/details';
import Loader from 'components/loader';
import Footer from 'components/footer';
import ErrorBoundary from 'components/error';
import AddBtn from 'components/AddBtn';
import SearchButton from 'components/searchBtn';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import styles from './styles.module.css';
import { text } from '../../data.js';
import ModalDialog from 'components/modal';
import AddMovie from 'components/AddMovie';
import EditMovie from 'components/editMovie';
import DeleteMovie from 'components/deleteMovie';
import { getMoviesList, deleteMovie } from 'service/index.js';
import { toggleCreationForm, toggleDeleteModal, hideEditForm } from 'actions/actions';

const App = () => {
    const error = useSelector(state => state.fetchReducer.error);
    const isLoading = useSelector(state => state.fetchReducer.isLoading);
    const selectedMovie = useSelector(state => state.fetchReducer.selectedMovie);
    const creationFormModal = useSelector(state => state.modalReducer.creationFormModal);
    const editFormModal = useSelector(state => state.modalReducer.editFormModal);
    const deleteFormModal = useSelector(state => state.modalReducer.deleteFormModal);
    const movieToEdit = useSelector(state => state.modalReducer.movieToEdit);
    const movieToDelete = useSelector(state => state.modalReducer.movieToDelete);
    const params = useSelector(state => state.fetchReducer.parameters);
    const dispatch = useDispatch();

    useEffect(() => {
        getMoviesList(dispatch, params);
    }, [params]);

    return (
        <ErrorBoundary>
            <Container>
                { selectedMovie ?
                    <>
                        <Header>
                            <SearchButton />
                        </Header>
                        <MovieDetails selectedMovie={selectedMovie} />
                    </>
                    :
                    <>
                        <Header>
                            <AddBtn />
                        </Header>
                        <Search />
                    </>
                }
            </Container>
            <div className={styles.content}>
                <Container>
                    <Row className={styles.filteringSorting}>
                        <Col md={9}>
                            <Genres />
                        </Col>
                        <Col md={3}>
                            <Sort />
                        </Col>
                    </Row>
                    <Counter />
                </Container>
                {/* {error && <Alert variant='danger'>{JSON.stringify(error.messages)}</Alert>} */}
                <MoviesList />
            </div>
            <Footer />

            { isLoading && <Loader />}

            <ModalDialog type='add' visible={creationFormModal} handleClose={() => dispatch(toggleCreationForm())}>
                <AddMovie handleClose={() => dispatch(toggleCreationForm())} />
            </ModalDialog>

            <ModalDialog type='edit' visible={editFormModal} handleClose={() => dispatch(hideEditForm())}>
                <EditMovie data={movieToEdit} handleClose={() => dispatch(hideEditForm())} />
            </ModalDialog>

            <ModalDialog type='delete' visible={deleteFormModal} handleClose={() => dispatch(toggleDeleteModal())} handleDelete={() => deleteMovie(dispatch, movieToDelete)}>
                <DeleteMovie />
            </ModalDialog>

        </ErrorBoundary>
    )
}

export default App;
