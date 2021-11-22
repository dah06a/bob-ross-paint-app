import React, { useState } from 'react';
import Menu from './Menu';
import Tools from './Tools';
import PaintArea from './PaintArea';
import Footer from './Footer';
import './App.css';

function App() {

	// 4 - 411
	const getRandomRoss = () => Math.floor(Math.random() * 407 + 4);

	const [brushColor, setBrushColor] = useState('black');
	const [brushSize, setBrushSize] = useState(5);
	const [eraseMode, setEraseMode] = useState(false);
	const [randomRossNum, setRandomRossNum] = useState(getRandomRoss());

	return (
		<>
			<Menu />
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
				randomRossNum={randomRossNum}
			/>
			<Footer />
		</>
	);
}

export default App;
