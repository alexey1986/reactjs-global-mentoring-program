import configureStore from 'redux-mock-store';
import * as actions from '@actions/actions';
import * as types from '@actionTypes/types';

const mockStore = configureStore();
const store = mockStore();

describe('test set values from API success', () => {
    it('dispatches the correct action', () => {
        const expectedActions = [
            {
                type: types.FETCH_MOVIES_SUCCESS,
                payload: {
                    totalAmount: 2999,
                    data: [],
                    offset: 0,
                    limit: 10
                }
            },
        ];

        store.dispatch(actions.fetchMovieListSuccess({
            totalAmount: 2999,
            data: [],
            offset: 0,
            limit: 10
        }));
        expect(store.getActions()).toEqual(expectedActions);
    });
});
