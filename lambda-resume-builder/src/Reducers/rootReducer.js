import {
    REGISTER,
    REGISTER_SUCCESS,
   
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
                user: action.payload
            }
       
    default: return state;    
    }
    
}

export default rootReducer;