import { SUCCESS, LINKEDIN_CLICKED, LINKEDIN_REQUEST } from '../Actions'

const initialState = {

    savingUser: false,
    loggingIn: false,
    loggedIn: false

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

        case LINKEDIN_CLICKED:
            return {
                ...state,
                linkedIn: true
            }

        case LINKEDIN_REQUEST:
            return {
                ...state,
                linkedIn: false
            }

        default: return state
    }

}

export default rootReducer
