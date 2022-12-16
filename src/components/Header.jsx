import { Routes, Route, Link, NavLink, useParams, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => ( 
    <>
        <Navbar bg="light" expand="lg">
            <Container className="justify-content-center flex-grow-1 pe-3" fluid>
        <Navbar.Brand>
                    <NavLink className="Logo" to="/">
                Group 7's AMAZING app
            </NavLink>
                </Navbar.Brand>
            </Container>
        </Navbar>
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className="Nav-items-container" id="navbarScroll">
                    <Nav
                        className="justify-content-start flex-grow-1 pe-3"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/movies">Movies</NavLink>

                    </Nav>
                    <Nav
                        className="justify-content-center flex-grow-1 pe-3"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Nav>
                    <Nav
                        className="justify-content-end flex-grow-1 pe-3"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className="nav-link" to="/users">Users</NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
);
export default Header;