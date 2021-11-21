import React from 'react';
import './Menu.css';

function Menu() {

	return (
        <div className="menu">
            <div className="collapse" id="collapsedMenu">
                <div className=" p-4">
                    <h5 >The Bob Ross Painting Project</h5>
                    <p className="text-muted">Developed by David Henry</p>
                </div>
            </div>

            <nav className="navbar navbar-light">
                <div className="container-fluid justify-content-between">
                    <button className="btn btn-outline-dark paint-font" data-bs-toggle="collapse" data-bs-target="#collapsedMenu">MENU</button>
                    <h4 className="d-none d-sm-block paint-font">no mistakes just happy accidents</h4>
                    <button className="btn btn-outline-dark paint-font" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">TOOLS</button>
                </div>
            </nav>
        </div>
	);
}

export default Menu;
