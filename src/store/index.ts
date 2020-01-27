import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import reducer from "./products/reducer";

export default function configureStore(initialState: any) {
    return createStore(reducer, initialState, applyMiddleware(thunk));
}
