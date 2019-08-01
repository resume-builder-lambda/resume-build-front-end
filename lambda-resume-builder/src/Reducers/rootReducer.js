import { SUCCESS } from '../Actions'

const initialState = {

    savingUser: false,
    loggingIn: false,
    loggedIn: false,

}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case SUCCESS:
            return {
                ...state,
                loggedIn: true,
                savingUser: true,
                user: action.payload
            }

        default:
            return { ...state }
    }

}

export default rootReducer
