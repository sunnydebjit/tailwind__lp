import { useState } from 'react';

function Darkbutton() {
	const [mode, setMode] = useState(false);
	const toggleDark = () => {
		setMode(!mode);
	};

	return (
		<div className='fixed bottom-10 right-10 z-30 top p-3 bg-gray-800 hover:bg-gray-900 rounded-full border-4 hover:border-orange-300 border-orange-400 transition duration-500'>
			<button onClick={toggleDark}>{mode ? `🌕` : '☀️'}</button>
		</div>
	);
}

export default Darkbutton;
