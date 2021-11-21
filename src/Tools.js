import React from 'react';
import { HexColorPicker } from 'react-colorful';
import './Tools.css';

function Tools({ currentColor, changeColor, currentSize, changeSize }) {
    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="toolsPanel">
            <div className="offcanvas-header">
                <h3 className="offcanvas-title">Brush Tools</h3>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" ></button>
            </div>

            <div className="container text-center offcanvas-body">

                <div className="row mb-2">
                    <div className="col">
                        <h4>Select Color</h4>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col">
                        <div className="currentTool" style={{ backgroundColor: currentColor }} />
                    </div>
                    <div className="col">
                        <HexColorPicker className="colorPicker" color={currentColor} onChange={(color) => changeColor(color)} />
                    </div>
                </div>

                <div className="row mt-5 mb-2">
                    <div className="col">
                        <h4>Select Size</h4>
                    </div>
                </div>

                <div className="row h-25 align-items-center">
                    <div className="col">
                        <div style={{
                                margin: 'auto',
                                width: currentSize,
                                height: currentSize,
                                border: '1px solid black',
                                borderRadius: '50%',
                                backgroundColor: currentColor
                            }}
                        />
                    </div>
                    <div className="col p-2">
                        <p>Brush Size: {currentSize}</p>
                        <input
                            type='range'
                            className="form-range"
                            style={{ width: '80%' }}
                            value={currentSize.toString()}
                            min='1'
                            max='100'
                            step='1'
                            onChange={(e) => changeSize(Number(e.target.value))}
                        />
                    </div>
                </div>

            </div>

    </div>
    );
}

export default Tools;
