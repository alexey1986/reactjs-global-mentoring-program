// import { createStore } from 'redux';
// import rootReducer from '@reducers/rootReducer';

// // const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStore(rootReducer);

// export default store;


import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from '@reducers/rootReducer';

const initStore = () => {
    return createStore(rootReducer);
};

export const wrapper = createWrapper(initStore);
