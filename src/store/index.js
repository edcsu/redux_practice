import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import counterSlice from './counterSlice'

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        counter: counterSlice.reducer,
    }
})

export const authActions = authSlice.actions
export const counterActions = counterSlice.actions

export default store