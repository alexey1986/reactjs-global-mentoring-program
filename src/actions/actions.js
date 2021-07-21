import {
    FETCH_MOVIES_START,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIE_ITEM_SUCCESS,
    FETCH_DATA_FAILURE,
    FETCH_DATA_SUCCESS,
    TOGGLE_CREATION_FORM,
    SHOW_EDIT_FORM,
    HIDE_EDIT_FORM,
    TOGGLE_DELETE_MODAL,
    CREATION_FORM_SUBMIT,
    SET_PARAMS_ACTION
} from '@actionTypes/types';


// action creators
export const fetchDataStart = () => ({ type: FETCH_MOVIES_START });

export const fetchMovieListSuccess = data => ({
    type: FETCH_MOVIES_SUCCESS,
    payload: data
});

export const fetchMovieItemSuccess = data => ({
    type: FETCH_MOVIE_ITEM_SUCCESS,
    payload: data
});

export const fetchDataFailure = data => ({
    type: FETCH_DATA_FAILURE,
    payload: data
});

export const fetchDataSuccess = data => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
})


export const toggleCreationForm = () => ({ type: TOGGLE_CREATION_FORM });

export const toggleEditForm = data => ({
    type: SHOW_EDIT_FORM,
    payload: data
});

export const hideEditForm = () => ({ type: HIDE_EDIT_FORM });

export const toggleDeleteModal = data => ({
    type: TOGGLE_DELETE_MODAL,
    payload: data
});

export const creationFormSubmit = data => ({
    type: CREATION_FORM_SUBMIT,
    payload: data
});

export const setParamsAction = data => ({
    type: SET_PARAMS_ACTION,
    payload: data
});
