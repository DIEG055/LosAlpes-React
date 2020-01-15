const loggedReducer = (state = false, action) => {
    switch ( action){
        case 'SIGN_IN':
                return !state;
        default:
            return state;
    }
}

export default loggedReducer;