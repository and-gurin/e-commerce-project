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
                    state.push({ ...action.payload.product, quantity: action.payload.quantity })

                } else {
                    if (state.map(product => product.id).includes(action.payload.product.id)) {
                        state[index].quantity += action.payload.quantity
                    } else {
                        state.push({ ...action.payload.product, quantity: action.payload.quantity })
                    }
                }
            },
            deleteFromCart: (state, action: PayloadAction<number>) => {
                return state.filter(product => product.id != action.payload)
            }
        }
    }
)

export const subtotalInCart = (productIn: ProductType[]) => productIn.reduce((acc, currentValue) => {
    const productTotal = currentValue.price * currentValue.quantity
    return acc + productTotal
}, 0)

export const {addToCart, deleteFromCart} = cartSlice.actions;
export const cartReducer = cartSlice.reducer