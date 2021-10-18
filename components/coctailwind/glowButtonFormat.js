function GlowButtonFormat({ gdcolor1, gdcolor2 }) {
	return (
		<div className='grid gap-8 items-start justify-center'>
			<div className='relative group'>
				<div
					className={`absolute -inset-0.5 bg-gradient-to-r ${gdcolor1} ${gdcolor2} rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt`}></div>
				<a
					href='#footer'
					className='relative px-7 py-4 bg-gradient-to-br from-green-900 via-black to-purple-900  rounded-lg leading-none flex items-center divide-x divide-black'>
					<span className='flex items-center justify-center space-x-1'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6 text-green-600 -rotate-6 group-hover:rotate-6 transition duration-200'
							viewBox='0 0 20 20'
							fill='currentColor'>
							<path d='M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z' />
							<path d='M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z' />
						</svg>

						<span className='text-gray-100 leading-none font-bold text-lg md:text-lg'>
							Reach out to me
						</span>
						<span className='leading-none text-xs text-green-400 group-hover:text-gray-100 transition duration-200'>
							{/*`See what's new here &rarr;`*/}&rarr;
						</span>
					</span>
				</a>
			</div>
		</div>
	);
}

export default GlowButtonFormat;
