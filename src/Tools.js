import React from 'react';
import { HexColorPicker } from 'react-colorful';
import './Tools.css';

function Tools({ currentColor, changeColor, currentSize, changeSize, eraseMode, changeErase }) {
    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="toolsPanel">
            <div className="offcanvas-header">
                <h3 className="offcanvas-title">Brush Tools</h3>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" ></button>
            </div>

            <div className="container text-center offcanvas-body">

                <div className="row mb-4">
                    <div className="col">
                        <h4>Select Mode</h4>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col">
                        <button className={eraseMode ? 'btn btn-outline-success w-75' : 'btn btn-success w-75'} onClick={() => changeErase(false)}>Paint</button>
                    </div>
                    <div className="col">
                        <button className={eraseMode ? 'btn btn-danger w-75' : 'btn btn-outline-danger w-75'} onClick={() => changeErase(true)}>Erase</button>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col">
                        <h4>Select Color</h4>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col">
                        <div className="currentTool" style={{ backgroundColor: eraseMode ? 'white' : currentColor }} />
                    </div>
                    <div className="col">
                        <HexColorPicker className="colorPicker m-auto" color={currentColor} onChange={(color) => changeColor(color)} />
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col">
                        <h4>Select Size</h4>
                    </div>
                </div>

                <div className="row h-25 align-items-center">
                    <div className="col p-0">
                        <div style={{
                                margin: 'auto',
                                width: currentSize,
                                height: currentSize,
                                border: '1px solid black',
                                borderRadius: '50%',
                                backgroundColor: eraseMode ? 'white' : currentColor
                            }}
                        />
                    </div>

                    <div className="col p-2">
                        <div className="row">
                            <div className="col-6 offset-1">
                                <p className="mt-2">Brush Size: </p>
                            </div>

                            <div className="col-3 p-0">
                                <input
                                    type="text"
                                    className="form-control"
                                    style={{ alignSelf: 'center' }}
                                    value={currentSize}
                                    onChange={(e) => e.target.value <=100 && e.target.value > 0 && changeSize(Number(e.target.value))}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <input
                                    type='range'
                                    className="form-range"
                                    style={{ width: '78%', margin: 'auto' }}
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

            </div>

    </div>
    );
}

export default Tools;
