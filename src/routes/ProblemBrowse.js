import React, { Component } from 'react';

import ListProblem from '../components/ListProblem';
import FilterProblems from '../components/FilterProblems';

import data from '../data/metadata.json';

export default class ProblemBrowse extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filters: new Set(),
            sort_by: undefined
        }

        this.filter_pred = this.filter_pred.bind(this);
        this.add_filter = this.add_filter.bind(this);
        this.remove_filter = this.remove_filter.bind(this);
        this.clear_filters = this.clear_filters.bind(this);
        this.update_filters = this.update_filters.bind(this);
    }

    add_filter(filter) {
        console.log("Add " + filter);
        this.state.filters.add(filter);
    }

    remove_filter(filter) {
        this.state.filters.delete(filter);
    }

    clear_filters() {
        this.state.filters.clear();
    }

    update_filters() {
        this.forceUpdate();
    }

    filter_pred(problem) {
        if (this.state.filters.size === 0) {
            return true;
        }

        let count = 0;
        for (let t of problem.tags) {
            if (this.state.filters.has(t)) {
                ++count;
            }
        }

        count += (this.state.filters.has(problem.language) ? 1 : 0);

        return count === this.state.filters.size;
    }

    render() {
        const { tags, problems } = data;
        let filtered_view = problems.filter(this.filter_pred);
        const problems_view = filtered_view.map(x => <ListProblem problem={x} key={x.id} />);

        return (
            <div>
                <section>
                    <FilterProblems tags={ tags }
                        add={this.add_filter}
                        remove={this.remove_filter}
                        clear = {this.clear_filters}
                        update = {this.update_filters}
                    />
                </section>
                <section>
                    {problems_view}
                </section>
            </div>
        )
    }
}
