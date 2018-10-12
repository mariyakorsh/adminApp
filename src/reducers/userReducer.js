const init = {
    users: [],
    currentUser: null,
    isLoaded: false
}

const userReducer = (state = init, action) => {
    switch(action.type) {
        case 'ADD_USERS' : {
            const {type, ...payload } = action;
            return Object.assign({}, state, payload)
        }
        case 'GET_USER' : {
            const currentUser = state.users.find(user => {
                return user.id === action.id;
            });
            
            return Object.assign({}, state, {currentUser: currentUser});
        }
       
        default : return state
    }
}

export default userReducer;