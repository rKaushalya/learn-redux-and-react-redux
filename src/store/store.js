import { createStore,applyMiddleware,compose } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "../reducers/rootReducer";
const middleware = [thunk];
const initiateState = {};

const store = createStore(
    rootReducer,
    initiateState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENTION__ && __REDUX_DEVTOOLS_EXTENTION__()
    )
);

export default store;