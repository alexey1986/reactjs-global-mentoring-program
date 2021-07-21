import configureStore from 'redux-mock-store';
import {
    fetchDataStart,
    fetchMovieListSuccess,
    fetchMovieItemSuccess,
    fetchDataFailure,    
    fetchDataSuccess,    
    toggleCreationForm,    
    toggleEditForm,
    hideEditForm,
    toggleDeleteModal,
    creationFormSubmit,
    setParamsAction
} from './actions';

const mockStore = configureStore();
const store = mockStore();

describe('test set actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    test('Actions:', () => {
        expect(fetchDataStart()).toEqual({
            type: 'FETCH_MOVIES_START',
        });
        expect(fetchMovieListSuccess({totalAmount: 3000})).toEqual({
            type: 'FETCH_MOVIES_SUCCESS',
            payload: {totalAmount: 3000},
        });
        expect(fetchMovieItemSuccess({title: 'Untitled Avengers'})).toEqual({
            type: 'FETCH_MOVIE_ITEM_SUCCESS',
            payload: {title: 'Untitled Avengers'},
        });
        expect(fetchDataFailure({isLoading: false})).toEqual({
            type: 'FETCH_DATA_FAILURE',
            payload: {isLoading: false}
        });
        expect(fetchDataSuccess({isLoading: false})).toEqual({
            type: 'FETCH_DATA_SUCCESS',
            payload: {isLoading: false}
        });
        expect(toggleCreationForm()).toEqual({
            type: 'TOGGLE_CREATION_FORM',
        });
        expect(toggleEditForm()).toEqual({
            type: 'SHOW_EDIT_FORM'
        });
        expect(hideEditForm()).toEqual({
            type: 'HIDE_EDIT_FORM'
        });
        expect(hideEditForm()).toEqual({
            type: 'HIDE_EDIT_FORM'
        });
        expect(toggleDeleteModal()).toEqual({
            type: 'TOGGLE_DELETE_MODAL'
        });
        expect(creationFormSubmit({id: 123123})).toEqual({
            type: 'CREATION_FORM_SUBMIT',
            payload: {id: 123123}
        });
        expect(setParamsAction({parameters: {}})).toEqual({
            type: 'SET_PARAMS_ACTION',
            payload: {parameters: {}}
        });
    });
});
