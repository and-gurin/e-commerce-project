import {AnyAction, combineReducers, configureStore, ThunkDispatch} from '@reduxjs/toolkit';
import { productReducer } from '@/features/product/productSlice';
import {cartReducer} from "@/features/cart/cartSlice";

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
});

export const store = configureStore({
    reducer: rootReducer
})

export type RootStateType = ReturnType<typeof rootReducer>;
//export type AppDispatch = typeof store.dispatch;
export type AppDispatch = ThunkDispatch<RootStateType, unknown, AnyAction>;
//export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.store = store;