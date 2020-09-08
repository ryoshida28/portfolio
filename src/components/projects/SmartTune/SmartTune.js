import React from 'react';

import TextMobileStepper from '../../TextMobileStepper';

import img0 from './images/Smart-Tune_0.png';
import img1 from './images/Smart-Tune_1.png';
import img2 from './images/Smart-Tune_2.png';
import img3 from './images/Smart-Tune_3.png';

const steps = [
    {
        label: 'Home Screen',
        imgPath: img0
    },
    {
        label: 'Recording',
        imgPath: img1
    },
    {
        label: 'Volume Change',
        imgPath: img2
    },
    {
        label: 'Settings',
        imgPath: img3
    }
]

export default function SmartTune() {
    return (
        <div className="container container-fluid mx-auto px-4 pb-5">
            <header className="my-5">
                <h1 className="display-4 text-center">Smart Tune</h1>
                <p className="lead text-center">For dynamic volume adjustment</p>
                <section className="links mx-auto align-content-center d-block text-center">
                    <a href="https://github.com/rxin8192/HackUCI2020_SmartTune" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn btn-primary d-inline-block mx-2">
                            GitHub Repo
                        </button>
                    </a>
                    <a href="https://devpost.com/software/smart-tune" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn btn-primary d-inline-block mx-2">
                            Devpost
                        </button>
                    </a>
                </section>
            </header>
            <hr></hr>
            <section className="stepper-container">
                <TextMobileStepper  steps={steps} width={300} />
            </section>
            <hr></hr>
            <section>
                <h3>About</h3>
                <p>Smart Tune is an Android mobile application written in Java and designed to adjust the device's volume based on the external auditory volume collected by the device microphone. This app identifies changes in microphone volume and adjusts the device volume based on specific user settings. Smart Tune is also functional as a background process while using other applications.</p>
                <h3>My Contribution</h3>
                <ol>
                    <li>
                        <h5>Reading/Organizing Microphone Data</h5>
                        <p className="pl-4">I utilized the Android <code>MediaRecorder</code> library to record audio amplitude from the device microphone in a continuously running thread.In combination with this I also implemented a custom <code>ArrayQueue</code> data type which had the properties of a standard queue as well as the ability to calculate the mean and median of the data. The accuracy of the <code>ArrayQueue</code> was tested with the <code>JUnit</code> Java library for unit testing</p>
                    </li>
                    <li>
                        <h5>Min/Max Volume Functionality</h5>
                        <p className="pl-4">I designed both the UI and logic for the Min/Max Volume settings which set the minimum and maximum values the app can set the volume to. I did not use a simple bounding technique and instead implemented a <code>sigmoid</code> weighting function to create an asymptotic feel.</p>
                    </li>
                    <li>
                        <h5>Speaker Mode/Sensitivity Compatibility</h5>
                        <p className="pl-4">I implemented the sensitivity logic and made it compatible with speaker mode as well. The sensitivity feature is a weighting function that adjusts how much the device volume should change as a result of a change in microphone volume. This effect is reversed in speaker mode.</p>
                    </li>
                </ol>
            </section>
        </div>
    )
}
