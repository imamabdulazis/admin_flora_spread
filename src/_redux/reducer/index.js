import {authReducer} from "./auth_reducer";
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    //di panggil auth...., bukan yg authReducer
    auth: authReducer,
});

export default rootReducer;