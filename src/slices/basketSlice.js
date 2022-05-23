import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (cartIndex) => cartIndex.id === action.payload.id
      )

      let newCart = [...state.items]

      if (index >= 0) {
        newCart.splice(index, 1)
      } else {
        console.warn(
          `Cant remove product {id: ${action.payload.id}} as its not in `
        )
      }
      state.items = newCart
    },
  },
})

export const { addToCart, removeFromCart } = basketSlice.actions

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0)
export default basketSlice.reducer
