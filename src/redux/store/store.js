import { configureStore } from "@reduxjs/toolkit";
import { financesReducer } from "../reducers/financesReducer";
import { loginReducer } from "../reducers/loginReducer";

const reducer = {
    login: loginReducer,
    finances: financesReducer,
}

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;