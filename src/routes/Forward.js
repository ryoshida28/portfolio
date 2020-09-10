import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Forward extends Component {

    constructor(props) {
        super(props);

        let to = '/';
        let query = '';
        if (props.location.search !== '') {
            const querySpltStr = props.location.search.slice(1).split('&');
            const validatedQueries = [];
            for (let i = 0; i < querySpltStr.length; ++i) {
                const splitRes = querySpltStr[i].split('=');
                if (splitRes.length !== 2) break;
                const [key, val] = splitRes;
                if (key === 'to') {
                    to = val;
                } else {
                    validatedQueries.push([key,val]);
                }
            }

            if (validatedQueries.length > 0) {
                query = `?${validatedQueries[0][0]}=${validatedQueries[0][1]}`;
                for (let i = 1; i < validatedQueries.length; ++i) {
                    query += `&${validatedQueries[i][0]}=${validatedQueries[i][1]}`;
                }
            }
        }


        this.state = {
            to: to,
            query: query
        };
    }

    render() {

        const linkTo = {
            pathname: this.state.to,
            search: this.state.query
        }

        return (
            <Redirect to={linkTo} />
        )
    }
}
