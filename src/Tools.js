import React from 'react';
import './Tools.css';

function Tools() {
    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="toolsPanel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title">Tools</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" ></button>
            </div>
        <div className="offcanvas-body">
            Tools Go Here
        </div>
    </div>
    );
}

export default Tools;
