import axios from "axios"
import { ALLMOVIES, MovieApi } from "../types/moviesType"


export const getAllMovie = () => {
    return async (dispatch) => {
        const res = await axios.get(MovieApi)
        dispatch({ type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages })
    }
}

export const getMovieSearch = (word) => {
    return async (dispatch) => {
        const res = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=dfbcef7ab77779c196e9372290c1b875&language=en&query=" + word)

        dispatch({ type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages })
    }
}

export const getPage = (page) => {
    return async (dispatch) => {
        const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=dfbcef7ab77779c196e9372290c1b875&language=en&page=" + page)

        dispatch({ type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages })
    }
}