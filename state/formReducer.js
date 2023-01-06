import { actionTypes } from "./actionTypes";

export const initialState = {
    loading: false,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    agreeWithTerms: false
}

export const formReducer = (state, action) => {
    const { type, payload } = action
    // const { name, value } = payload
    switch (type) {
        case actionTypes.SHOW_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.HIDE_LOADING:
            return {
                ...state,
                loading: false
            }
        case actionTypes.SUBMIT_DATA:
            console.log(state)
            break;
        case actionTypes.CHANGING_DATA:
            return {
                ...state,
                [payload.name]: payload.value,
                loading: true
            }
        default:
            break;
    }
}