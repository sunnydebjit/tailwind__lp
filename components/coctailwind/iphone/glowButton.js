function GlowButton() {
	return (
		<div className='grid gap-8 items-start justify-center'>
			<div className='relative group'>
				<div className='absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
				<button className='relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600'>
					<span className='flex items-center space-x-5'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6 text-pink-600 -rotate-6'
							viewBox='0 0 20 20'
							fill='currentColor'>
							<path
								fillRule='evenodd'
								d='M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z'
								clipRule='evenodd'
							/>
						</svg>
						<span className='pr-6 text-gray-100'>Labs Release 2021.10</span>
					</span>
					<span className='pl-6 text-purple-400 group-hover:text-gray-100 transition duration-200'>
						See what's new here &rarr;
					</span>
				</button>
			</div>
		</div>
	);
}

export default GlowButton;
