import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Badge, Col, Row } from 'react-bootstrap';

import '../sass/components/list_problem.scss';

export default class ListProblem extends Component {

    constructor(props) {
        super(props);

        let { problem } = this.props;

        this.state = { 
            problem: problem,
            redirect: false,
            redirect_to: undefined
        };

        this.redirectToSummary = this.redirectToSummary.bind(this);
    }

    redirectToSummary(link) {
        this.setState({
            redirect: true,
            redirect_to: link
        });
    }

    render() {
        if (this.state.redirect) {
            return(<Redirect push to = { this.state.redirect_to }/>)
        }

        return (
            <div className="container problem-lead">
                <div className="media" onClick={(e) => {
                    if (e.target.className !== 'problem-link') {
                        this.redirectToSummary(`/competitive_programming/view/${this.state.problem.id}`);
                    }
                }}>
                    <Row className="w-100">
                        <Col>
                            <h5 className="mt-0">{this.state.problem.name}</h5>
                            {
                                this.state.problem.tags.map(x => {
                                    return (
                                        <Link to={`/${x}`} key={x}>
                                            <Badge className="tag" pill>{x}</Badge>
                                        </Link>
                                    );
                                })
                            }
                        </Col>
                        <Col>
                            <p className="text-right text"> Original Problem: 
                                <a href={this.state.problem.problem_link} className="problem-link">
                                    {this.state.problem.problem_link}
                                </a>
                            </p>
                            <p className="text-right text"> Download Solution: 
                                <a href={process.env.PUBLIC_URL + '/solutions/' + this.state.problem.solution_fn} className="problem-link">
                                    {this.state.problem.solution_fn}
                                </a>
                            </p>
                            <p className="text-right text">Language: {this.state.problem.language}</p>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
