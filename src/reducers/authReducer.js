const init = {
    userInfo: null
}
export const authReducer = (state = init, action) => {
    switch (action.type) {
        case 'AUTH': {
            return Object.assign({}, state, {userInfo: action.userInfo});
        }
        default: return state
    }
}