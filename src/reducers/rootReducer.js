import { combineReducers } from "redux";
import AllPostReducer from './reducer-allPost'

const rootReducer = combineReducers({
    allPost : AllPostReducer,
})

export default rootReducer;