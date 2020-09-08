import React from 'react';

import TextMobileStepper from '../../TextMobileStepper';

import img0 from './images/Bargain-Swipes_0.png';
import img1 from './images/Bargain-Swipes_1.png';
import img2 from './images/Bargain-Swipes_2.png';
import img3 from './images/Bargain-Swipes_3.png';
import img4 from './images/Bargain-Swipes_4.png';
import img5 from './images/Bargain-Swipes_5.png';
import img6 from './images/Bargain-Swipes_6.png';

const steps = [
    {
        label: 'Home Page',
        imgPath: img0
    },
    {
        label: 'Login',
        imgPath: img1
    },
    {
        label: 'Register',
        imgPath: img2
    },
    {
        label: 'Post Item',
        imgPath: img3
    },
    {
        label: 'Profile',
        imgPath: img4
    },
    {
        label: 'Category View',
        imgPath: img5
    },
    {
        label: 'Item View',
        imgPath: img6
    }
]

export default function BargainSwipes() {
    return (
        <div className="container container-fluid mx-auto px-4 pb-5">
            <header className="my-5">
                <h1 className="display-4 text-center">Bargain Swipes</h1>
                <p className="lead text-center">Simple Bartering Service</p>
                <section className="links mx-auto align-content-center d-block text-center">
                    <a href="https://github.com/ryoshida28/HackUCI2019" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn btn-primary d-inline-block mx-2">
                            GitHub Repo
                        </button>
                    </a>
                    <a href="https://devpost.com/software/bargainswipes" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn btn-primary d-inline-block mx-2">
                            Devpost
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
                <p>This project consists of a website interacting with a backend RESTful API written in Python Flask. It has authentication functionality and allows authenticated users to post items for bartering. Although we were unable to achieve the full functionality we had initially hoped for at the start of the Hackathon, we were able complete a functional website and a functional backend.</p>
                <h3>My Contribution</h3>
                <ol>
                    <li>
                        <h5>Authentication</h5>
                        <p className="pl-4">Using the Python Flask framework I designed the backend logic for authentication. Because we were using a RESTful api to interact with the frontend I decided to use <code>JSON Web Tokens</code>. On the frontend I implemented cookie storage for the JWT. Certain routes were protected with this authentication.</p>
                    </li>
                    <li>
                        <h5>Item Posting/Browsing</h5>
                        <p className="pl-4">I also designed the backend API routes for posting items for sale and viewing items for sale. This includes taking an image file object in the post request and placing that image in the static folder of the backend. On the frontend I implmented the <code>AJAX</code> request handling for posting and fetching data from the backend.</p>
                    </li>
                    <li>
                        <h5>Dynamic Loading of Frontend Components</h5>
                        <p className="pl-4">I used vanilla Javascript to take the data fetched from the backend and dynamically generate html content to be displayed on the website.</p>
                    </li>
                </ol>
            </section>
        </div>
    )
}
