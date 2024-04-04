import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    grossTotal: 0
}

export const grossTotalSlice = createSlice({
    name: 'grossTotal',
    initialState,
    reducers: {

        addSubTotal(state, action) {

            state.grossTotal = state.grossTotal + action.payload
        },

        removeSubTotal(state, action) {
            state.grossTotal = state.grossTotal - action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { addSubTotal, removeSubTotal } = grossTotalSlice.actions

export default grossTotalSlice.reducer