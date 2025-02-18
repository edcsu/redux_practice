import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        },
    }
})

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'increment':
            return {
                counter: state.counter + 1,
                showCounter: state.showCounter
            }
        
        case 'increase':
            return {
                counter: state.counter + action.amount,
                showCounter: state.showCounter
            }
        
        case 'decrement':
            return {
                counter: state.counter - 1,
                showCounter: state.showCounter
            }

        case 'toggle':
            return {
                showCounter: !state.showCounter,
                counter: state.counter
            }
    
        default:
            return state;
    }
}

const store = configureStore({
    reducer: counterSlice.reducer
})

// const store = configureStore({
//     reducer: {
//         counter: counterSlice.reducer
//     }
// })

export default store