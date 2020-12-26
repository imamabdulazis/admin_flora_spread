import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducer";
import thunk from "redux-thunk";

const middleware = [thunk];
let composed = applyMiddleware(...middleware);

//untuk konfigurasi reactroton

export const store = createStore(
    rootReducer,
)