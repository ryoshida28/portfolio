import React from 'react';
import { useParams } from 'react-router-dom';

import ProblemDescription from '../components/ProblemDescription';

import data from '../data/metadata.json';

export default function ProblemView() {
    let { id } = useParams();
    id = parseInt(id);
    let { problems } = data;
    
    const problem = problems.find(e => (e.id === id));
    if (problem === undefined) {
        return (
            <div className="alert alert-warning" role="alert">
                Problem does not exist
            </div>
        )
    }
    const base = '/summary/';
    const file = base + problem.summary_fn;
    return (
        <main>
            <ProblemDescription file={file} />
        </main>
    )
}
