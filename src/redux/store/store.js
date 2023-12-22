import { createStore, applyMiddleware } from "redux"
import { moviesReducer } from "../reducer/movieReducer"
import { thunk } from "redux-thunk"

//1- Create store
export const store = createStore(moviesReducer, applyMiddleware(thunk))