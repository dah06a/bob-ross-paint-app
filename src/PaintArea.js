import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import './PaintArea.css';

export default function PaintArea({ brushColor, brushSize }) {

    const paintAreaContainer = useRef();
  	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	useLayoutEffect(() => {
		if (paintAreaContainer.current) {
			setDimensions({
				width: Math.floor(paintAreaContainer.current.offsetWidth * 0.98),
				height: Math.floor(paintAreaContainer.current.offsetHeight * 0.95)
			});
		}
	}, [paintAreaContainer]);

    const [brush, setBrush] = useState('up');
    const [brushCoordinates, setBrushCoordinates] = useState([]);
    const [ctx, setContext] = useState(null);
    const canvasRef = useRef();

    useEffect(() => {
        setContext(canvasRef.current.getContext('2d'));
    }, []);

    const brushDown = (e) => {
        setBrush('down');
        setBrushCoordinates([e.nativeEvent.offsetX, e.nativeEvent.offsetY]);
    }

    const drawing = (e, ctx) => {
        if (brush === 'down') {
            ctx.beginPath();
            ctx.lineWidth = brushSize;
            ctx.strokeStyle = brushColor;
            ctx.lineCap = 'round';

            ctx.moveTo(brushCoordinates[0], brushCoordinates[1]);
            ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
            ctx.stroke();

            setBrushCoordinates([e.nativeEvent.offsetX, e.nativeEvent.offsetY]);
        }
    }

    return (
        <div className="paintArea" ref={paintAreaContainer}>
            <canvas
                className="canvas"
                data-bs-toggle="collapse"
                data-bs-target="#collapsedMenu.show"
                width={dimensions.width}
                height={dimensions.height}
                ref={canvasRef}
                onMouseMove={(e) => drawing(e, ctx)}
                onMouseDown={(e) => brushDown(e)}
                onMouseUp={() => setBrush('up')}
            ></canvas>
        </div>
    );
}
