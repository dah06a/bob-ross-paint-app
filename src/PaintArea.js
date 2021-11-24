import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import './PaintArea.css';

export default function PaintArea({ brushColor, brushSize, eraseMode, backgroundUrl, changeDrawing, showAlert, changeAlert }) {

    // State settings and refs
  	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [brush, setBrush] = useState('up');
    const [brushCoordinates, setBrushCoordinates] = useState([]);
    const [ctx, setCtx] = useState(null);
    const paintAreaContainer = useRef();
    const canvasRef = useRef();

    // Get and set dimensions so that the canvas takes up nearly the whole parent container/screen
	useLayoutEffect(() => {
		if (paintAreaContainer.current) {
			setDimensions({
				width: Math.floor(paintAreaContainer.current.offsetWidth * 0.99),
				height: Math.floor(paintAreaContainer.current.offsetHeight * 0.98)
			});
		}
	}, [paintAreaContainer]);

    // Get the context of the canvas when the component mounts
    useEffect(() => {
        setCtx(canvasRef.current.getContext('2d'));
    }, []);

    // Start drawing function when touch/click begins
    const brushDown = (e) => {
        setBrush('down');
        if (e.type === 'touchmove') {
            disableBodyScroll(canvasRef);
            const r = canvasRef.current.getBoundingClientRect();
            setBrushCoordinates([e.touches[0].clientX - r.left, e.touches[0].clientY - r.top]);
        } else {
            enableBodyScroll(canvasRef);
            setBrushCoordinates([e.nativeEvent.offsetX, e.nativeEvent.offsetY]);
        }
    }

    // Main painting function for user interaction with the canvas
    const painting = (e) => {
        if (brush === 'down') {
            // Set canvas context style and values
            ctx.globalAlpha = 1;
            ctx.lineWidth = brushSize;
            ctx.strokeStyle = brushColor;
            ctx.lineCap = 'round';
            ctx.globalCompositeOperation = eraseMode ? 'destination-out' : 'source-over';
            enableBodyScroll(canvasRef);
            ctx.beginPath();
            ctx.moveTo(brushCoordinates[0], brushCoordinates[1]);
            // Brush movement based on screen touch
            if (e.type === 'touchmove') {
                disableBodyScroll(canvasRef);
                const r = canvasRef.current.getBoundingClientRect();
                ctx.lineTo(e.touches[0].clientX - r.left, e.touches[0].clientY - r.top);
                ctx.stroke();
                setBrushCoordinates([e.touches[0].clientX - r.left, e.touches[0].clientY - r.top]);
            // Brush movement based on screen click/drag
            } else {
                ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
                ctx.stroke();
                setBrushCoordinates([e.nativeEvent.offsetX, e.nativeEvent.offsetY]);
            }
            //Save current drawing to state
            changeDrawing(canvasRef.current.toDataURL('image/png'))
        }
    }

    // Erase all of current painting and close the alert box
    const eraseAll = () => {
        ctx.clearRect(0, 0, dimensions.width, dimensions.height);
        changeAlert(false);
    }

    // Create background image based on user input
    const backgroundImage = backgroundUrl
        ? <img src={backgroundUrl} alt='Random Bob Ross Painting' className="background" width={dimensions.width} height={dimensions.height} />
        : null
    ;

    // Display alert when user clicks on the 'Erase All' tool
    const eraseAllAlert = showAlert
        ? <div className="alert alert-danger w-50 m-auto text-center" role="alert">
            <h4 className="alert-heading">Erase all?</h4>
            <p>Are you sure you want to erase everything? You cannot undo this action.</p>
            <hr />
            <button className="btn btn-secondary w-50 text-nowrap" onClick={() => changeAlert(false)}>Cancel</button>
            <button className="btn btn-danger w-50 text-nowrap" onClick={() => eraseAll()}>Erase</button>
        </div>
        : null;

    return (
        <div className="paintArea" ref={paintAreaContainer} data-bs-toggle="collapse" data-bs-target="#collapsedMenu.show">
            {backgroundImage}
            <canvas
                className="canvas"
                width={dimensions.width}
                height={dimensions.height}
                ref={canvasRef}

                onMouseMove={(e) => painting(e)}
                onMouseDown={(e) => brushDown(e)}
                onMouseUp={() => setBrush('up')}

                onTouchMove={(e) => painting(e)}
                onTouchStart={(e) => brushDown(e)}
                onTouchEnd={() => setBrush('up')}
            ></canvas>
            {eraseAllAlert}
        </div>
    );
}
