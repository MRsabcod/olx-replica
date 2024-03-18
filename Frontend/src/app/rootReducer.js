import { combineReducers } from "@reduxjs/toolkit"
import prodsReducer from "../features/addprodSlice"

export const rootReducer = combineReducers({prods: prodsReducer})