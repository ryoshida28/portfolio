import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Jumbotron, Container, Dropdown, Row, Col, Button } from 'react-bootstrap';

import '../sass/components/filter_problem.scss';


function CustomDropDown(props) {
    const { type, tags, add, remove, update } = props;
    const [ selectedTag, setSelectedTag ] = useState(type);

    const renderedTags = tags.map( t => {
        return (
            <Dropdown.Item
                key={t}
                eventKey={t}
                type={type}
                onSelect={(eventKey, event) => {
                    remove(selectedTag);
                    add(t);
                    update();
                    setSelectedTag(t);
                }}>
                {t.replace(/_/gi, ' ')}
            </Dropdown.Item>
        );
    });

    return (
        <Dropdown key={type}>
            <Dropdown.Toggle variant="primary">
                { selectedTag.replace(/_/gi, ' ') }
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item
                    key="reset"
                    eventKey="reset"
                    onSelect={(eventKey, event) => {
                        remove(selectedTag);
                        update();
                        setSelectedTag(type);
                    }}>
                    Reset
                </Dropdown.Item>
                { renderedTags }
            </Dropdown.Menu>
        </Dropdown>
    );
}

CustomDropDown.propTypes = {
    type: PropTypes.string,
    tags: PropTypes.array,
    add: PropTypes.func,
    remove: PropTypes.func,
    update: PropTypes.func,
}


/**
 * Renders the dropdown selectors for the Browse page
 * @param {*} props - Defines all tags and, at minimum, 3 functions for adding (add()), removing (remove()), and clearing all filters(clear()).
 */
function FilterProblems(props) {

    const { tags, add, remove, update } = props;

    let dropdowns = [];
    for (let [type,taglist] of Object.entries(tags)) {

        dropdowns.push(<Col key={type}><CustomDropDown type={type} tags={taglist} add={add} remove={remove} update={update} /></Col>);

        
    }

    return (
        <div className="filter-wrapper">
            <Jumbotron fluid className="filter-jumbotron px-3">
                <Container>
                    <h1>Competitive Programming Portfolio</h1>
                    <Container>
                        <p>Below are a list of selected solved problems from my time in <a href="http://acm-uci.org/">ACM@UCI</a>. These problems demonstrate my development in essential programming paradigms as well has my training progress for the <a href="https://icpc.baylor.edu/">International Collegiate Programming Contest (ICPC)</a>. I have created a problem analysis for each problem going over my strategy and respective complexity analysis. Furthermore, my actual source code is available for download. For quick navigation utilize the following filter options.</p>
                    </Container>


                    <Container>
                        <Row className="justify-content-center">
                            { dropdowns }
                            <Button variant="secondary" onClick={e => {props.clear();props.update();}}>Reset</Button>
                        </Row>
                   </Container>
                </Container>
            </Jumbotron>
        </div>
    )
}

FilterProblems.propTypes = {
    tags: PropTypes.object,
    add: PropTypes.func,
    remove: PropTypes.func,
    clear: PropTypes.func,
    update: PropTypes.func
}

export default FilterProblems


