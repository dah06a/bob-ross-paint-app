import React from 'react';
import ToolsVideo from './videos/paint-app-tools-demo.mp4';
import MenuVideo from './videos/paint-app-menu-demo.mp4';
import Portrait from './images/wall-portrait-zoom.JPG';
import './Introduction.css';

function Introduction() {

    return (
        <div className="modal" id="introductionModal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <h3 className="modal-title">Landing Page</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        <div className="container-fluid">
                            <div className="row my-5">
                                <div className="col">
                                    <h4 className="text-center">Welcome</h4>
                                    <p style={{ textIndent: '40px' }}>
                                        Thank you for visiting the Bob Ross Painting Project web app!
                                        This application is a tribute to Bob Ross and his incredible work.
                                        In his television show, 'The Joy of Painting', he inspired others to not only love painting, but to love life.
                                        So take a minute to paint along with Bob and experience the joy for yourself.
                                        Remember, there are no mistakes, just 'happy little accidents'.
                                        And don't forget to add a 'happy little tree' every now and again!
                                    </p>
                                </div>
                            </div>

                            <div className="row my-5">
                                <div className="col">
                                    <h4 className="text-center">How To Use Tools</h4>
                                    <p style={{ textIndent: '40px' }}>
                                        It's easy to paint with this web app!
                                        Start by clicking on the "TOOLS" button in the upper right corner.
                                        Next, select the color and size for your brush.
                                        You can also select the 'Erase Mode' feature if you want to get rid of some paint.
                                        And that's it! Click back to the canvas and start painting your masterpiece.
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col text-center">
                                    <video className="video" width="70%" controls autoPlay loop muted>
                                        <source src={ToolsVideo} type="video/mp4" />
                                        Sorry, your browser doesn't support embedded videos.
                                    </video>
                                </div>
                            </div>

                            <div className="row my-5">
                                <div className="col">
                                    <h4 className="text-center">How To Use The Menu</h4>
                                    <p style={{ textIndent: '40px' }}>
                                        The project menu will help you to create and save a masterpiece!
                                        Click the 'New Background' button if you want to get a new randomized Bob Ross Painting to use.
                                        Or, if you would rather work without a guide, click the 'No Background' button for a nice blank canvas.
                                        When you are ready, click the 'Save/Share' button to open a new tab with your save panting.
                                        From there, you can download, save, and share your creation!
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col text-center">
                                    <video className="video" width="100%" controls autoPlay loop muted>
                                        <source src={MenuVideo} type="video/mp4" />
                                        Sorry, your browser doesn't support embedded videos.
                                    </video>
                                </div>
                            </div>

                            <div className="row my-5">
                                <div className="col">
                                    <h4 className="text-center">Meet The Developer</h4>
                                    <p style={{ textIndent: '40px' }}>
                                        My name is David Henry and I developed this project during the November-2021 MintBean Hackathon!
                                        Thank you for spending some time exploring the project - I hope very much that you enjoyed it.
                                        This app was designed using the React.JS Library with hooks, along with Bootstrap 5.1 and the React-Colorful package.
                                        If you would like to see some of my other work, please be sure to checkout my portfolio or other links below!
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col text-center">
                                    <img src={Portrait} alt="Portrait of web developer." className="portrait" />
                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="col text-center" style={{ display: 'inline', fontSize: 'larger' }}>
                                    <hr />
                                    <a href="https://davidhenrydev.com/#/" target="_blank" rel="noreferrer">Portfolio</a>
                                    <hr />
                                    <a href="https://www.linkedin.com/in/david-henry-653454203/" target="_blank" rel="noreferrer">LinkedIn</a>
                                    <hr />
                                    <a href="https://github.com/dah06a" target="_blank" rel="noreferrer">GitHub</a>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <a href="https://davidhenrydev.com/#/" role="button" target="_blank" rel="noreferrer" className="btn btn-primary w-100 text-nowrap">Checkout Developer</a>
                                </div>
                                <div className="col">
                                    <button type="button" className="btn btn-success w-100 text-nowrap" data-bs-dismiss="modal">Start Painting</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
