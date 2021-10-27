import { fetchMoviesListApi, fetchMovieApi, deleteMovieApi, createMovieApi, editMovieApi } from 'src/api/index.js';
import { fetchDataStart, fetchMovieListSuccess, fetchMovieItemSuccess, fetchDataSuccess, fetchDataFailure } from 'actions/actions';

export const getMoviesList = (dispatch, params) => {
    dispatch(fetchDataStart());

    fetchMoviesListApi(params,
        (response) => {
            dispatch(fetchMovieListSuccess(response));
        }, (error) => {
            dispatch(fetchDataFailure(error));
        });
};

export const getMovie = (dispatch, id) => {
    dispatch(fetchDataStart());

    fetchMovieApi(id,
        (response) => {
            dispatch(fetchMovieItemSuccess(response));
        }, (error) => {
            console.log(error)
            dispatch(fetchDataFailure(error));
        });
};

export const createMovie = (dispatch, params, callback) => {
    dispatch(fetchDataStart());

    createMovieApi(params,
        (response) => {
            dispatch(fetchDataSuccess(response));
            getMoviesList(dispatch);
            callback();
        },
        (error) => {
            dispatch(fetchDataFailure(error));
        })
}

export const editMovie = (dispatch, params, callback) => {
    dispatch(fetchDataStart());

    editMovieApi(params,
        (response) => {
            dispatch(fetchDataSuccess(response));
            getMoviesList(dispatch);
            callback();
        },
        (error) => {
            dispatch(fetchDataFailure(error))
        })
}

export const deleteMovie = (dispatch, id) => {
    deleteMovieApi(id,
        () => {
            getMoviesList(dispatch);
        }, (error) => {
            dispatch(fetchDataFailure(error));
        });
};
