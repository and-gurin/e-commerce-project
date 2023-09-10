import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductType} from "@/features/product/productSlice";


const initialState: ProductType[] = [];

export const comparisonSlice = createSlice({
        name: 'products',
        initialState,
        reducers: {
            addToComparison: (state, action: PayloadAction<{ product: ProductType }>) => {
                if (state.length === 0) {
                    state.push({ ...action.payload.product})

                } else {
                    !state.map(product => product.id).includes(action.payload.product.id) ?
                        state.push({ ...action.payload.product}) : null
                }
            },
        }
    }
)

export const {addToComparison} = comparisonSlice.actions;
export const comparisonReducer = comparisonSlice.reducer