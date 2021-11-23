import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import './PaintArea.css';

export default function PaintArea({ brushColor, brushSize, eraseMode, backgroundUrl, changeDrawing }) {

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
				width: Math.floor(paintAreaContainer.current.offsetWidth * 0.98),
				height: Math.floor(paintAreaContainer.current.offsetHeight * 0.95)
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
            const r = canvasRef.current.getBoundingClientRect();
            setBrushCoordinates([e.touches[0].clientX - r.left, e.touches[0].clientY - r.top]);
        } else {
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
            ctx.beginPath();
            ctx.moveTo(brushCoordinates[0], brushCoordinates[1]);
            // Brush movement based on screen touch
            if (e.type === 'touchmove') {
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

    // Create background image based on user input
    const backgroundImage = backgroundUrl
        ? <img src={backgroundUrl} alt='Random Bob Ross Painting' className="background" width={dimensions.width} height={dimensions.height} />
        : null
    ;

    return (
        <div className="paintArea" ref={paintAreaContainer}>
            {backgroundImage}
            <canvas
                className="canvas"
                data-bs-toggle="collapse"
                data-bs-target="#collapsedMenu.show"
                width={dimensions.width}
                height={dimensions.height}
                ref={canvasRef}
                onMouseMove={(e) => painting(e)}
                onTouchMove={(e) => painting(e)}
                onMouseDown={(e) => brushDown(e)}
                onTouchStart={(e) => brushDown(e)}
                onMouseUp={() => setBrush('up')}
                onTouchEnd={() => setBrush('up')}
            ></canvas>
        </div>
    );
}
