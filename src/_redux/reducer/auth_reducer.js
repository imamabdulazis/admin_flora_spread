import {AUTH_CONSTANTS} from "../constants/constants";


let user = localStorage.getItem('user')
const initialState = user ? {loggedIn: true, user} : {}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_CONSTANTS.LOGIN_REQUEST:
            return {
                loggedIn: true,
                user: action.user,
            }
        case AUTH_CONSTANTS.LOGIN_FAILURE:
            return {}
        case AUTH_CONSTANTS.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            }
        default:
            return state;
    }
}

