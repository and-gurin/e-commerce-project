import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductType} from "@/features/product/productSlice";


const initialState: ProductType[] = [];

export const comparisonSlice = createSlice({
        name: 'products',
        initialState,
        reducers: {
            addToComparison: (state, action: PayloadAction<ProductType>) => {
                if (state.length <= 2 && !state.some(product => product.id === action.payload.id)) {
                    state.push({ ...action.payload})
                }
            },
        }
    }
)

export const {addToComparison} = comparisonSlice.actions;
export const comparisonReducer = comparisonSlice.reducer