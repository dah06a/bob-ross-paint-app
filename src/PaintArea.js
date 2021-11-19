import React, { useState, useRef, useEffect } from 'react';
import './PaintArea.css';

export default function PaintArea({ width, height }) {

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
        <div className="row paint-area">
            <div className="col">
                <canvas
                    className="canvas"
                    width={width}
                    height={height}
                    ref={canvasRef}
                    onMouseMove={(e) => drawing(e, ctx)}
                    onMouseDown={(e) => brushDown(e)}
                    onMouseUp={() => setBrush('up')}
                ></canvas>
            </div>
        </div>
    );
}
