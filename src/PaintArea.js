import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import './PaintArea.css';

export default function PaintArea({ brushColor, brushSize, eraseMode, randomRossNum }) {

    const paintAreaContainer = useRef();
  	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const rossBackgroundImage = new Image();
    rossBackgroundImage.src = `https://raw.githubusercontent.com/jwilber/Bob_Ross_Paintings/master/data/paintings/painting${randomRossNum}.png`;


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
    const [ctx, setCtx] = useState(null);
    const canvasRef = useRef();


    useEffect(() => {
        console.log('USEEFFECT');
        setCtx(canvasRef.current.getContext('2d'));
        if (ctx !== null) {
            console.log('Made it!')
            ctx.globalAlpha = 0.5;
            ctx.drawImage(rossBackgroundImage, 0, 0, dimensions.width, dimensions.height);
            console.log('Was drawn?')
        }
    }, [ctx]);

    const brushDown = (e) => {
        setBrush('down');
        setBrushCoordinates([e.nativeEvent.offsetX, e.nativeEvent.offsetY]);
    }

    const drawing = (e, ctx) => {
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
