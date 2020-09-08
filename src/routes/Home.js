import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>

                <h1>Home</h1>

                <Link to="/competitive_programming">Competitive Programming</Link>
                <br />
                <Link to="/projects">Projects</Link>
                <br />
                <Link to="/resume">Resume</Link>
            </div>
        )
    }
}
