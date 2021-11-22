import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import './PaintArea.css';

export default function PaintArea({ brushColor, brushSize, eraseMode, backgroundUrl }) {

  	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [brush, setBrush] = useState('up');
    const [brushCoordinates, setBrushCoordinates] = useState([]);
    const [ctx, setCtx] = useState(null);

    const paintAreaContainer = useRef();
    const canvasRef = useRef();

	useLayoutEffect(() => {
		if (paintAreaContainer.current) {
			setDimensions({
				width: Math.floor(paintAreaContainer.current.offsetWidth * 0.98),
				height: Math.floor(paintAreaContainer.current.offsetHeight * 0.95)
			});
		}
	}, [paintAreaContainer]);

    useEffect(() => {
        setCtx(canvasRef.current.getContext('2d'));
    }, []);

    const brushDown = (e) => {
        setBrush('down');
        setBrushCoordinates([e.nativeEvent.offsetX, e.nativeEvent.offsetY]);
    }

    const drawing = (e) => {
        if (brush === 'down') {
            ctx.globalAlpha = 1;
            ctx.beginPath();
            ctx.lineWidth = brushSize;
            ctx.strokeStyle = brushColor;
            ctx.lineCap = 'round';
            ctx.globalCompositeOperation = eraseMode ? 'destination-out' : 'source-over';
            ctx.moveTo(brushCoordinates[0], brushCoordinates[1]);
            ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
            ctx.stroke();
            setBrushCoordinates([e.nativeEvent.offsetX, e.nativeEvent.offsetY]);
        }
    }

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
                onMouseMove={(e) => drawing(e)}
                onMouseDown={(e) => brushDown(e)}
                onMouseUp={() => setBrush('up')}
            ></canvas>
        </div>
    );
}
