import { combineReducers } from 'redux';
import { fetchReducer, modalReducer } from './reducers';

const rootReducer = combineReducers({
    fetchReducer,
    modalReducer
});

export default rootReducer;
