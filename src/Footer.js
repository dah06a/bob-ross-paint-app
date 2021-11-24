import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="container-fluid bg-light footer">
                <div className="row text-center h-100 mt-5 align-items-center">
                    <div className="col-6 m-auto">
                    <h5 >The Bob Ross Painting Project</h5>
                    <p className="text-muted">
                        © 2021
                        <a
                            href="https://davidhenrydev.com/#/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-primary"
                            style={{ textDecoration: 'none' }}
                            >{' '}David Henry
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
