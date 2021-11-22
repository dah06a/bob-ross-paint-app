import React from 'react';
import './Menu.css';

function Menu({ changeBackground, saveCanvas }) {

    // Menu Button Icons
    const toolIcon = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-brush" viewBox="0 0 16 16"><path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z"/></svg>
    const menuIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16"><path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg>

    return (
        //Menu Main Container
        <div className="container-fluid bg-light menu">

            {/* Collapsed Row Menu Content */}
            <div className="row collapse align-items-center text-center" id="collapsedMenu">

                <div className="col-sm-3 p-4">
                    <h5 >The Bob Ross Painting Project</h5>
                    <p className="text-muted">Developed by David Henry</p>
                </div>

                <div className="col-sm">
                    <button className="btn btn-outline-success w-75" onClick={() => changeBackground(false)}>New Background</button>
                </div>

                <div className="col-sm">
                    <button className="btn btn-outline-danger w-75" onClick={() => changeBackground(true)}>No Background</button>
                </div>

                <div className="col-sm">
                    <button className="btn btn-outline-primary w-75" onClick={() => saveCanvas()}>Save/Share</button>
                </div>
            </div>

            {/* Top Navbar - Always Displayed */}
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid justify-content-center mt-1">
                    <div className="row w-100 paint-font">

                        {/* Title */}
                        <div className="col-8 d-none d-md-block ">
                            <h4 className="paint-font mt-1">There are no mistakes, just happy accidents.</h4>
                        </div>

                        {/* Buttons */}
                        <div className="col col-md-4">
                            <div className="row">

                                <div className="col">
                                    <button className="btn btn-outline-dark w-100 text-nowrap" data-bs-toggle="collapse" data-bs-target="#collapsedMenu">
                                        MENU{' '}
                                        {menuIcon}
                                    </button>
                                </div>

                                <div className="col">
                                    <button className="btn btn-outline-dark w-100 text-nowrap" data-bs-toggle="offcanvas" data-bs-target="#toolsPanel">
                                        TOOLS{' '}
                                        {toolIcon}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
	);
}

export default Menu;
