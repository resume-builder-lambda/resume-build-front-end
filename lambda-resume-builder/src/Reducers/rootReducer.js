import { SUCCESS, LINKEDINRES } from '../Actions'

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

        case LINKEDINRES:
            return {
                ...state,
                linkedinhappening: true
            }

        default: return state
    }

}

export default rootReducer
