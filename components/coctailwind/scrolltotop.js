function Scrolltotop() {
	const scrollT = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div
			className='fixed  bottom-10 p-3 shadow-lg rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-700 hover:to-purple-600 text-purple-100 hover:text-white font-bold text-lg tracking-wide transition duration-500 cursor-pointer'
			onClick={scrollT}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M5 11l7-7 7 7M5 19l7-7 7 7'
				/>
			</svg>
		</div>
	);
}

export default Scrolltotop;
