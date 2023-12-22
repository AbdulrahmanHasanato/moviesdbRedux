import React, { useEffect, useState } from "react"
import { Row } from "react-bootstrap"
import CardMovie from "./CardMovie"
import Page from "./pagination"
import { useDispatch, useSelector } from "react-redux"
import { getAllMovie } from "../redux/actions/movieAction"

const MoviesList = () => {

    const [movies, setMovies] = useState([])

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllMovie())
    }, [])

    const dataMovies = useSelector((state) => state.movies)

    useEffect(() => {
        setMovies(dataMovies)
    }, [dataMovies])

    return (
        <div className="">
            <Row className="mt-3">
                {
                    movies.length >= 1 ? (movies.map((movie) => {
                        return (
                            <CardMovie key={movie.id} movie={movie} />
                        )
                    })) :
                        <h2 className="text-center p-5">There are no movies for this</h2>
                }

                {
                    movies.length >= 1 ? (
                        <Page />
                    ) : null
                }
            </Row>
        </div >
    )
}

export default MoviesList