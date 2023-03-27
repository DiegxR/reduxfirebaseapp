import { financesTypes } from "../types/financesTypes";

const initialState = {
    finances: [],
    error: {
        status: false,
        message: ''
    },
    loading: false,
}


export const financesReducer = (state = initialState, action) => {
    switch (action.type) {
        case financesTypes.SAVE_MOVEMENT:
            return {
                ...state,
                finances: [...state.finances, action.payload.finance],
                error: {
                    ...action.payload.error
                }
            }
        case financesTypes.TOGGLE_LOADING:
            return {
                ...state,
                loading: !state.loading
            }
        case financesTypes.GET_DOC:
            return {
                ...state,
                finances: [...action.payload]
            }
        default:
            return state;
    }
}