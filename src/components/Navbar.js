import React from 'react'

import { Navbar as BootNavbar, Nav } from 'react-bootstrap';

import '../sass/components/navbar.scss';


import headshot from '../images/headshot.jpg';

export default function Navbar(props) {
    return (
        <section className="navbar-wrapper">
            <BootNavbar fixed="top" expand="sm">
                <BootNavbar.Brand href="/" style={{color: "#fff"}}>
                    <img src={headshot} width={30} height={30} className="d-inline-block align-top nav-img" alt="headshot" />
                    {' '}
                    Ryan Yoshida
                </BootNavbar.Brand>
                <BootNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootNavbar.Collapse id="basic-navbar-nav">
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/competitive_programming">Competitive Programming</Nav.Link>
                    <Nav.Link href="/resume">Resume</Nav.Link>
                </BootNavbar.Collapse>
            </BootNavbar>
        </section>
    )
}
