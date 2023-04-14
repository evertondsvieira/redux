import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = [{
    id: uuid(),
    favorite: false,
    name: "Laptop Acer",
    image: "notebook1.PNG",
    alt: "Image Laptop Acer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}, {
    id: uuid(),
    favorite: false,
    name: "Laptop ThinkPad",
    image: "notebook2.PNG",
    alt: "Image Laptop ThinkPad",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}, {
    id: uuid(),
    favorite: false,
    name: "MacBook",
    image: "notebook3.PNG",
    alt: "Image MacBook",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}]

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        switchFavorite: (state, payload) => {
            state = state.map(item => {
                if(item.id === payload) item.favorite = !item.favorite;
                return item;
            })
        }
    }
})

export const { switchFavorite } = itemSlice.actions;

export default itemSlice.reducer;