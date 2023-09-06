import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductType} from "@/features/product/productSlice";


const initialState: ProductType[] = [];

export const cartSlice = createSlice({
        name: 'products',
        initialState,
        reducers: {
            addToCart: (state, action: PayloadAction<{ product: ProductType, quantity: number }>) => {
                const index = state.map(product => product.id).indexOf(action.payload.product.id);
                if (state.length === 0) {
                    const addedProduct = action.payload.product;
                    const addedProductCopy = {...addedProduct};
                    addedProductCopy.quantity = action.payload.quantity
                    state.push(addedProductCopy);

                } else {
                    if (state.map(product => product.id).includes(action.payload.product.id)) {
                        state[index].quantity += action.payload.quantity
                    } else {
                        const productInCart = action.payload.product;
                        const productInCartCopy = {...productInCart};
                        productInCartCopy.quantity = action.payload.quantity
                        state.push(productInCartCopy);
                    }
                }
            },
            deleteFromCart: (state, action: PayloadAction<number>) => {
                return state.filter(product => product.id != action.payload)
            }
        }
    }
)

export const {addToCart, deleteFromCart} = cartSlice.actions;
export const cartReducer = cartSlice.reducer