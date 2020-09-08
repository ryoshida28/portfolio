import React from 'react';

import TextMobileStepper from '../../TextMobileStepper';

import img0 from './images/Adobe-All-Hands_0.png';
import img1 from './images/Adobe-All-Hands_1.png';
import img2 from './images/Adobe-All-Hands_2.png';
import img3 from './images/Adobe-All-Hands_3.png';
import img4 from './images/Adobe-All-Hands_4.png';
import img5 from './images/Adobe-All-Hands_5.png';
import img6 from './images/Adobe-All-Hands_6.png';

const steps = [
    {
        label: 'Animation',
        imgPath: img0
    },
    {
        label: 'Create Group',
        imgPath: img1
    },
    {
        label: 'Create Game',
        imgPath: img2
    },
    {
        label: 'Animation Starting',
        imgPath: img3
    },
    {
        label: 'Animation',
        imgPath: img4
    },
    {
        label: 'Animation',
        imgPath: img5
    },
    {
        label: 'Winners Pannel',
        imgPath: img6
    }
]

export default function AdobeAllHands() {
    return (
        <div className="container container-fluid mx-auto px-4 pb-5">
            <header className="my-5">
                <h1 className="display-4 text-center">Adobe All Hands Drawing</h1>
                <p className="lead text-center">3D random lottery drawing animation</p>
                <section className="links mx-auto align-content-center d-block text-center">
                    <a href={process.env.PUBLIC_URL + 'files/AdobeGame.zip'} download >
                        <button type="button" className="btn btn-primary d-inline-block mx-2">
                            Download
                        </button>
                    </a>
                </section>
            </header>
            <hr></hr>
            <section className="stepper-container">
                <TextMobileStepper  steps={steps} width={700} />
            </section>
            <hr></hr>
            <section>
                <h3>About</h3>
                <p>This program was developed for an Adobe All Hands event to select a winner for a competition at the Adobe office. It was written in JavaFX using the JavaFX 3D Graphics libary to simulate a random ball drawing. It is still being used to this date for Adobe All Hands events</p>
                <h3>Key Aspects</h3>
                <ol>
                    <li>
                        <h5>Game Physics</h5>
                        <p className="pl-4">All game physics in this application are calculated completely in 3D. For collisions between balls I calculated completely inelastic collisions. For collisions with the edges of the walls of the sphere I used a series of vector projections to calculate resultant velocity vectors.</p>
                    </li>
                    <li>
                        <h5>Data Storage</h5>
                        <p className="pl-4">As I did not at the time have any knowledge of databases I developed my own custom scheme for storing groups. Data is stored in plain-text files and a format very reminiscent of XML. I also developed my own algorithm for parsing the data to form the groups.</p>
                    </li>
                    <li>
                        <h5>JavaFX 3D Graphics</h5>
                        <p className="pl-4">This application was developed with the JavaFX 3D Graphics Library. To accomplish this I utilized a static <code>Camera</code> which was directed at the game. The balls were <code>Sphere</code>s and the platforms were <code>Box</code>ex. The balls were colored and a string was drawn on top. To accomplish this I generated an image object using the <code>BufferedImage</code> library in Java.</p>
                    </li>
                    <li>
                        <h5>JavaFX UI Layouts</h5>
                        <p className="pl-4">The various menus utilized throughout took advantage of the built-in JavaFX UI layouts. The most difficult view to create was the 'Create New Group' view which required <code>Factory</code> classes to generate new rows on the table listing added participants.</p>
                    </li>
                </ol>
            </section>
        </div>
    )
}
