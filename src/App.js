import React, { useState } from 'react';
import Menu from './Menu';
import Tools from './Tools';
import PaintArea from './PaintArea';
import Footer from './Footer';
import './App.css';

function App() {

	const [brushColor, setBrushColor] = useState('black');
	const [brushSize, setBrushSize] = useState(5);

	return (
		<>
			<Menu />
			<Tools currentColor={brushColor} changeColor={(color) => setBrushColor(color)} currentSize={brushSize} changeSize={(size) => setBrushSize(size)} />
			<PaintArea brushColor={brushColor} brushSize={brushSize} />
			<Footer />
		</>
	);
}

export default App;
