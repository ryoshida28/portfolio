import React, { Component } from 'react'
import MarkdownIt from 'markdown-it';
import KT from 'markdown-it-katex';

import '../sass/components/problem_description.scss';


export default class ProblemDescription extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filename: props.file,
            md: null
        };
    }
   
    componentDidMount() {
        let mdit = (new MarkdownIt()).use(KT);
        fetch(process.env.PUBLIC_URL+this.state.filename)
            .then(response => response.text())
            .then(text => {
                text = text.replace(/%PUBLIC_URL%/, process.env.PUBLIC_URL);
                this.setState({ md: mdit.render(text)});
            });
    }

    render() {
        const md = this.state.md;

        return (
            <section className="pd">
                <article dangerouslySetInnerHTML={{__html: md }}></article>
            </section>
        )
    }
}
