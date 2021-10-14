function Logo(props) {
	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	return (
		<div onClick={scrollUp}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 116.48 75.65'
				{...props}>
				<defs>
					<style>{'.prefix__cls-1{fill:CurrentColor}'}</style>
				</defs>
				<g id='prefix__Layer_2' data-name='Layer 2'>
					<g id='prefix__Layer_1-2' data-name='Layer 1'>
						<path
							className='prefix__cls-1'
							d='M104.08 74.51L74.24 46.17l-19.12 19.9L42.14 53.6l31.51-32.81 42.83 40.66-12.4 13.06zM12.73 75.65L0 62.92l30.21-30.21-19.99-19.98L22.95 0l32.71 32.71-42.93 42.94z'
						/>
					</g>
				</g>
			</svg>
		</div>
	);
}

export default Logo;
