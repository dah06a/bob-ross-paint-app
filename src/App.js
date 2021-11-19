import React from 'react';
import PaintArea from './PaintArea';
import './App.css';

function App() {

	return (
		<div className="container-fluid bg-success">
		<PaintArea width={400} height={400} />
		</div>
	);
}

export default App;
