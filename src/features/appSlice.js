import {createSlice} from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: 'app',
    initialState: {
        counter: 1
    },
    reducers: {
        counterIncrement(state, action) {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
    }
});

export const {counterIncrement} = appSlice.actions;
export const appReducer = appSlice.reducer;