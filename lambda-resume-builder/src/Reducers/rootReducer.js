import {
    REGISTER_SUCCESS,
    GITHUB,
} from '../Actions';

const initialState = {

    savingUser: false,
    loggingIn: false,
    loggedIn: false

}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case REGISTER_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                savingUser: true,
                user: action.payload
            }

        case GITHUB:
            return {
                github: true
            }

        default: return state;
    }

}

export default rootReducer;