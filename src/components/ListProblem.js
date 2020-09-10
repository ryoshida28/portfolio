import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Badge, Col, Row } from 'react-bootstrap';

import '../sass/components/list_problem.scss';

export default class ListProblem extends Component {

    constructor(props) {
        super(props);

        let { problem } = props;

        this.state = { 
            problem: problem,
            redirect: false,
            redirect_to: undefined
        };


        this.redirectToSummary = this.redirectToSummary.bind(this);
        this.overrideRedirect = this.overrideRedirect.bind(this);
    }

    redirectToSummary(link) {
        this.setState({
            redirect: true,
            redirect_to: link
        });
    }

    overrideRedirect() {
        this.redirectFlag = true;
        this.setState({
            redirect: false,
            redirect_to: undefined
        })
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
                                    const linkTo = {
                                        pathname: '/redirect',
                                        search: `?to=/competitive_programming&filter=${x}`,
                                    }
                                    return (
                                        <Link className="tag-link" to={linkTo} onClick={e=>this.overrideRedirect()} key={x}>
                                            <Badge className={`tag tag-${this.state.problem.id}`} pill>{x}</Badge>
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
