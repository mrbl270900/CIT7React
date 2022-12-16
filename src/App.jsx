import {Routes, Route, Link, NavLink, useParams, Outlet} from "react-router-dom";
import './App.css';
//page imports
import Header from "./components/Header.jsx";
import Main from "./pages/home";
import { UsersLayout, UsersList, User, NewUser, loadUsers } from "./pages/users";
import { MoviesLayout, MoviesList, Movie } from "./pages/movies";
import Error from "./pages/error";
// bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => 
    <>
        <Header />

        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/users" element={<UsersLayout />}>
                <Route index element={<UsersList />} />
                <Route path="/users/:uid" element={<User />} />
                <Route path="/users/new" element={<NewUser />} />
            </Route>
            <Route path="/movies" element={<MoviesLayout />} >
                <Route index element={<MoviesList />} />
                <Route path="/movies/:tconst" element={<Movie />} />
            </Route>
            <Route path="*" element={<Error />} />
        </Routes>

    </>;


export default App;
