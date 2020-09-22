
import React from 'react';

import TextMobileStepper from '../../TextMobileStepper';

import img0 from './images/Swift-Launch_0.png';
import img1 from './images/Swift-Launch_1.png';
import img2 from './images/Swift-Launch_2.png';
import img3 from './images/Swift-Launch_3.png';

const steps = [
    {
        label: 'Main Dashboard',
        imgPath: img0
    },
    {
        label: 'Edit App Info',
        imgPath: img1
    },
    {
        label: 'Search Feature',
        imgPath: img2
    },
    {
        label: 'Launching a Program',
        imgPath: img3
    }
]

export default function SwiftLaunch() {
    return (
        <div className="container container-fluid mx-auto px-4 pb-5">
            <header className="my-5">
                <h1 className="display-4 text-center">Swift Launch</h1>
                <p className="lead text-center">An Electron based Application Launcher</p>
                <section className="links mx-auto align-content-center d-block text-center">
                    <a href="https://github.com/Swift-Suite/Swift-Launch" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn btn-primary d-inline-block mx-2">
                            GitHub Repo
                        </button>
                    </a>
                </section>
            </header>
            <hr></hr>
            <section className="stepper-container">
                <TextMobileStepper  steps={steps} width={500} />
            </section>
            <hr></hr>
            <section>
                <h3>About</h3>
                <p>Swift Launch is an application written in ElectronJS which allows a user to easily add and launch programs much alike Steam for gamings and dmenu/rofi for linux.</p>
                <h3>My Contribution</h3>
                <ol>
                    <li>
                        <h5>Database Configuration</h5>
                        <p className="pl-4">Using the <code>electron-db</code> package on <code>npm</code> I configured the database interface through which the application interacted through. It implements standard CRUD functionality that interacts well with the rest of the app.</p>
                    </li>
                    <li>
                        <h5>Search Matching Algorithm</h5>
                        <p className="pl-4">I designed the algorithm which ranks applications based on a search query. I use a modified version of edit distance algorithm which is a 2-D dynamic programming algorithm for calculating the Levenshtein distance between two strings. I adjusted weights and included an additional heuristic which favored matches at the beginning of the string. The benifit of using this algorithm instead of a standard Knuth-Morris-Pratt matching algorithm is that it can decipher through typos.</p>
                    </li>
                    <li>
                        <h5>Main Dashboard CSS Styling</h5>
                        <p className="pl-4">I designed the css for the main dashboard (not including the sidebar) which displays the current application that is selected. Furthermore, I also designed the application-info edit screen.</p>
                    </li>
                </ol>
            </section>
        </div>
    )
}
