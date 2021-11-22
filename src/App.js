import React, { useState } from 'react';
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

	const changeBackground = (deleteBackground = false) => {
		if (deleteBackground) setBackgroundUrl(null);
		else {
			const newRandomRossNum = Math.floor(Math.random() * 407 + 4);
			setBackgroundUrl(`https://raw.githubusercontent.com/jwilber/Bob_Ross_Paintings/master/data/paintings/painting${newRandomRossNum}.png`);
		}
	}

	return (
		<>
			<Menu
				changeBackground={(deleteBackground) => changeBackground(deleteBackground)}
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
				backgroundUrl = {backgroundUrl}
			/>
			<Footer />
		</>
	);
}

export default App;
