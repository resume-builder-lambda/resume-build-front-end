import { SUCCESS, GETJOBS } from '../Actions'

const initialState = {

    savingUser: false,
    loggingIn: false,
    loggedIn: false,
    jobs: []

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

        case GETJOBS:
            return {
                ...state,
                jobs: action.payload ? action.payload : []
            }

        default:
            return { ...state }
    }

}

export default rootReducer
