import { createSlice } from '@reduxjs/toolkit';

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        switchCart: (state, { payload }) => {
            const haveItem = state.some(item => item.id === payload);
            if(!haveItem) return [
                ...state,
                {
                    id: payload,
                    qtd: 1
                }              
            ] 
            return state.filter(item => item.id !== payload);
        }
    }
})

export const { switchCart } = cartSlice.actions;