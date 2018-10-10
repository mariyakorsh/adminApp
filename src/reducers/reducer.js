const init = {
    users: []
}

const userReducer = (state = init, action) => {
    switch(action.type) {
        case 'ADD_USERS' : return Object.assign({}, state, {users: action.users})
        default : return state
    }
}

export default userReducer;