import React, { useState } from 'react';
import Menu from './Menu';
import Tools from './Tools';
import PaintArea from './PaintArea';
import Footer from './Footer';
import './App.css';

function App() {

	const [brushColor, setBrushColor] = useState('black');
	const [brushSize, setBrushSize] = useState(5);
	const [eraseMode, setEraseMode] = useState(false);

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
			/>
			<Footer />
		</>
	);
}

export default App;
