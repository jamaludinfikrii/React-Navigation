const INITAL_STATE = {id : null,email : 'seto', pass : ''}

const authReducer = (state,action) => {
    switch(action.type){
        case 'TES':
            return {...INITAL_STATE , email : 'fikri'}
        default : 
            return INITAL_STATE  
    }
}

export default authReducer