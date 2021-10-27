import {
    FETCH_MOVIES_START,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIE_ITEM_SUCCESS,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    TOGGLE_CREATION_FORM,
    SHOW_EDIT_FORM,
    HIDE_EDIT_FORM,
    TOGGLE_DELETE_MODAL,
    SET_PARAMS_ACTION
} from '@actionTypes/types';

import { FETCH_REDUCER_STATE, MODAL_REDUCER_STATE } from '@src/settings';


export const fetchReducer = (state = FETCH_REDUCER_STATE, action) => {

    switch(action.type) {

        case FETCH_MOVIES_START:
            return {
                ...state,
                isLoading: true
            };

        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                movies: action.payload.data,
                limit: action.payload.limit,
                offset: action.payload.offset,
                totalAmount: action.payload.totalAmount
            };

        case FETCH_MOVIE_ITEM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                selectedMovie: action.payload
            };

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false
            }

        case FETCH_DATA_FAILURE:
            return {
                ...FETCH_REDUCER_STATE,
                isLoading: false,
                error: action.error
            };

        case SET_PARAMS_ACTION:
            return {
                ...state,
                parameters: {
                    ...state.parameters,
                    ...action.payload
                }
            }
    }

    return state;
}


export const modalReducer = (state = MODAL_REDUCER_STATE, action) => {

    switch(action.type) {

        case TOGGLE_CREATION_FORM:
            return {
                ...state,
                creationFormModal: !state.creationFormModal
            };

        case SHOW_EDIT_FORM:
            return {
                ...state,
                movieToEdit: action.payload,
                editFormModal: !state.editFormModal
            };

        case HIDE_EDIT_FORM:
            return {
                ...state,
                editFormModal: !state.editFormModal
            }

        case TOGGLE_DELETE_MODAL:
            return {
                ...state,
                movieToDelete: action.payload,
                deleteFormModal: !state.deleteFormModal
            };            
    }

    return state;
}
