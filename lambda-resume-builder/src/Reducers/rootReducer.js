import {
    REGISTER,
    REGISTER_SUCCESS,
    LOGGING_IN,
    LOGIN_SUCCESS ,
    LOGIN_FAILURE
} from '../Actions';

const initialState = {
    
    savingUser: false,
    loggingIn: false,
  
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
    
        case REGISTER:
        
            return {
                ...state,
                register: action.payload
            }

        case REGISTER_SUCCESS:
            return {
                ...state,
                savingUser: true,
                user: action.payload
            }

        
    default: return state;    
    }
    
}

export default rootReducer;