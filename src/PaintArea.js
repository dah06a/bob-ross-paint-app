import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import './PaintArea.css';

export default function PaintArea() {

    const targetRef = useRef();
  	const [dimensions, setDimensions] = useState({ width:0, height: 0 });

	useLayoutEffect(() => {
		if (targetRef.current) {
			setDimensions({
				width: Math.floor(targetRef.current.offsetWidth * 0.9),
				height: Math.floor(targetRef.current.offsetHeight * 0.90)
			});
		}
	}, []);

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
            ctx.lineWidth = 10;
            ctx.lineCap = 'round';
            ctx.strokeStyle = 'black';

            ctx.moveTo(brushCoordinates[0], brushCoordinates[1]);
            ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
            ctx.stroke();

            setBrushCoordinates([e.nativeEvent.offsetX, e.nativeEvent.offsetY]);
        }
    }

    return (
        <div className="container-fluid paintArea" ref={targetRef}>
            <div className="row">
                <div className="col bg-primary">
                    <canvas
                        className="canvas"
                        width={dimensions.width}
                        height={dimensions.height}
                        ref={canvasRef}
                        onMouseMove={(e) => drawing(e, ctx)}
                        onMouseDown={(e) => brushDown(e)}
                        onMouseUp={() => setBrush('up')}
                    ></canvas>
                </div>
            </div>
        </div>
    );
}
