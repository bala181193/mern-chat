
const initialSate = {
    user: {},
    isAuth: false
}

const authReducer = (state = initialSate, action) => {
    console.log("...action", action)
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
                isAuth: true
            }
        case 'LOGINOUT':
            return {
                ...state,
                user: {},
                isAuth: false
            }
        default:
            return state
    }
}
export default authReducer  