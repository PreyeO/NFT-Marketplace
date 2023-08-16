import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface CartItem {
  id: string;
  // ... other properties
  cartQuantity: number;
  price: number;
  name: string;
  image_url: any;
}

interface CartState {
  cartItems: CartItem[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

const initialState: CartState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<any>) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.name === action.payload.name
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info("increased NFT quantity", { position: "top-left" });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success("Added new NFT to cart", { position: "top-left" });
      }
      state.cartTotalAmount = state.cartItems.reduce(
        (total, item) => total + item.price * item.cartQuantity,
        0
      );
    },

    removeFromCart(state, action: PayloadAction<string>) {
      const itemName = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (item) => item.name === itemName
      );

      if (itemIndex >= 0) {
        state.cartItems.splice(itemIndex, 1);
        toast.info("Removed NFT from cart", { position: "top-left" });
      }

      state.cartTotalAmount = state.cartItems.reduce(
        (total, item) => total + item.price * item.cartQuantity,
        0
      );
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
