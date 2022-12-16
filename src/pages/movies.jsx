import {
    Routes, Route, Link, NavLink, useParams, Outlet
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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




class MoviesList extends React.Component {

    // Constructor 
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
            "http://localhost:5001/api/movies")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;

        return (
            <div >
                {console.log(items)}
                <h1> Fetch data from an api in react </h1>  {

                    items.$values.map((item) => (


                        <Card className="card-element-movie" key={item.url} style={{ width: '18rem' }} >
                            <Card.Img src={item.omdB_Datasets?.poster} style={{ maxHeight: '18rem' }}></Card.Img>
                            <Card.Title style={{ padding: '20px' }}>{item.primarytitle}</Card.Title>
                            <Card.Text style={{ padding: '20px' }}>{item.omdB_Datasets?.plot.slice(0, 250) + "..."}</Card.Text>

                            {/* url: {item.url},
                                title: {item.title},
                                primarytitle: {item.primarytitle}*/}

                        </Card>
                    ))
                }
            </div>
        );
    }
}




/*const [movies, setMovies] = useState([]);
useEffect(() => {
    fetch('http://localhost:5001/api/movies')
        .then((res) => res.json())
        .then((movieData) => {
            setMovies(movieData);
        });
}, []);

return <div> {movies?.map((movies) => {
    return <li className="" key={movies.tconst}> {movies.tconst} </li>
})}</div>*/




/*function MovieItemGrid() {
    const [movies, setMovies] = useState([]);
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

//}

/*  function Moviecontainer({ movies }) {
      const movieArr = movies.map((movie) => {
          return <movieCard key={movie.tconst} movie={movie} />
      });
      return <div id="image-field"> {movieArr} </div>

  } // remember to export this*/

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
        <h2 id="tittles">{movie.title}</h2>
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

export { MoviesLayout, MoviesList, Movie };