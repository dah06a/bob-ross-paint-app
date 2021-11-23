import React, { useState } from 'react';
import Introduction from './Introduction';
import Menu from './Menu';
import Tools from './Tools';
import PaintArea from './PaintArea';
import Footer from './Footer';
import './App.css';

function App() {

	const randomRossNum = Math.floor(Math.random() * 407 + 4);
	const [brushColor, setBrushColor] = useState('black');
	const [brushSize, setBrushSize] = useState(5);
	const [eraseMode, setEraseMode] = useState(false);
	const [backgroundUrl, setBackgroundUrl] = useState(`https://raw.githubusercontent.com/jwilber/Bob_Ross_Paintings/master/data/paintings/painting${randomRossNum}.png`);
	const [currentDrawing, setCurrentDrawing] = useState(null);

	const changeBackground = (deleteBackground = false) => {
		if (deleteBackground) setBackgroundUrl(null);
		else {
			const newRandomRossNum = Math.floor(Math.random() * 407 + 4);
			setBackgroundUrl(`https://raw.githubusercontent.com/jwilber/Bob_Ross_Paintings/master/data/paintings/painting${newRandomRossNum}.png`);
		}
	}

	const saveCanvas = () => {
        const w = window.open('about:blank', 'Drawing From Bob Ross Painting Project');
        w.document.write("<img src='"+currentDrawing+"' alt='Drawing From Bob Ross Painting' />");
    }

	return (
		<>
			<Introduction />
			<Menu
				changeBackground={(deleteBackground) => changeBackground(deleteBackground)}
				saveCanvas={() => saveCanvas()}
			/>
			<Tools
				currentColor={brushColor}
				changeColor={(color) => setBrushColor(color)}
				currentSize={brushSize}
				changeSize={(size) => setBrushSize(size)}
				eraseMode={eraseMode}
				changeErase={(bool) => setEraseMode(bool)}
			/>
			<PaintArea
				brushColor={brushColor}
				brushSize={brushSize}
				eraseMode={eraseMode}
				backgroundUrl={backgroundUrl}
				changeDrawing={(drawing) => setCurrentDrawing(drawing)}
			/>
			<Footer />
		</>
	);
}

export default App;
