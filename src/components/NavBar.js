import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import moviesLogo from "../img/moviesLogo.png"
import axios from "axios"
import { useDispatch } from "react-redux"
import { getAllMovie, getMovieSearch } from "../redux/actions/movieAction"

const NavBar = () => {
    const onSearch = (word) => {
        search(word)
    }

    const dispatch = useDispatch()
    //To search in API
    const search = async (word) => {
        if (word === "") {
            dispatch(getAllMovie())
        } else {
            dispatch(getMovieSearch(word))
        }
    }

    return (
        <div className="nav-style w-100">
            <Container>
                <Row className="pt-2">
                    <Col xs="2" lg="1">
                        <a href="/">
                            <img className="logo" src={moviesLogo} alt="Logo" />
                        </a>
                    </Col>
                    <Col xs="10" lg="11" className="d-flex align-items-center">
                        <div className="search w-100">
                            <i className="fa fa-search"></i>
                            <input onChange={(e) => onSearch(e.target.value)} type="text" className="form-control" placeholder="Search" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NavBar