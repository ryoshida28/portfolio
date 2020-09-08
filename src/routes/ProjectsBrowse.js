import React, { Component } from 'react';
import NavTabs from '../components/Tabbar'

export default class ProjectsBrowse extends Component {

    render() {
        return (
            <div>
                <section className="container container-fluid justify-content-center">
                    <h1 className="display-1 text-center mt-5 mb-3">Projects</h1>
                    <p className="lead text-center">A selection of my notable software projects</p>
                </section>
                <section className="container container-fluid justify-content-center mt-5">
                    <NavTabs />
                </section>
            </div>
        )
    }
}
