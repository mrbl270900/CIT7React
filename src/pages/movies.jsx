import {
    Routes, Route, Link, NavLink, useParams, Outlet
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from 'react';

const MoviesLayout = () => {
    return (
        <>
        <div
            className='p-5 text-center bg-image'
                style={{ backgroundImage: "url('https://images.pexels.com/photos/7991158/pexels-photo-7991158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", height: 400 }}
        >
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <div className='text-white'>
                        <h1 className='mb-3'>Movies</h1>
                        <h2 className='mb-3'>Have you checked out the movies yet?</h2>
                       
                    </div>
                </div>
            </div>
        </div>
        <Container fluid>
            <Row>
                <Col>
                    <div>
                        
                        <NavLink className="btn" to="/movies">Movies</NavLink>
                        <NavLink className="btn" to="/movies/1">Movie 1</NavLink>
                        <NavLink className="btn" to="/movies/2">Movie 2</NavLink>
                        <Outlet /> { /* subpages will appear here */}
                    </div>
                </Col >
            </Row >
        </Container >
</>
    )
};

const MoviesList = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div>
                        <p>List of all movies</p>
                        <p>See for example <Link to="1">Movie 1</Link>.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


async function MovieItemGrid() {
    const [Movie, setMovies] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/api/movies')
            .then((res) => res.json())
            .then((movieData) => {
                setMovies(movieData);
            });
    }, []);

    /*<Route exact path='/'>
        <Home movies={movies} />
    </Route>*/ // this code is for a page
    /*------------above code should maybe be placed in app.jsx----------------------------------------------*/

    }

    function Moviecontainer({ movies }) {
        const movieArr = movies.map((movie) => {
            return <movieCard key={movie.tconst} movie={movie} />
        });
        return <div id="image-field"> {movieArr} </div>

    } // remember to export this

    function MovieCard({ movie }) {
        function displayMovie() {
        }

        <div id="image-container" onClick={displayMovie}>
            <div id="card-image">
                <img
                    className="movieCard-image"
                    src={movie.omdB_Datasets.poster}
                    alt="Movie poster"
                />
            </div>
            <h2 id="tittles">{movie.primarytitle}</h2>
        </div>

    } // data might be different - movie.title - might be called something else


const Movie = () => {
        const { tconst } = useParams();
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <div>
                            <p>This is Movie #{tconst}.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
}
export { MoviesLayout, MoviesList, Moviecontainer, Movie };

