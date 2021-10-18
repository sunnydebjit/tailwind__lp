import Image from 'next/image';

function Iphone() {
	/*
<div
			id='iphone'
			className='py-10 px-10 min-h-screen bg-gray-500 dark:bg-gray-900 flex justify-center items-center '>
	*/
	return (
		<div id='iphone' className=' '>
			{/* IOS phone */}

			<div className='relative h-[712px] w-[350px] transform scale-100 bg-white dark:bg-black rounded-[60px] shadow-xl overflow-hidden border-[14px] border-gray-200 dark:border-black'>
				{/* Image Background */}
				{/* <img
					src='/iphone__comp__src/iphone-wallpaper.jpg'
					alt='bg image'
					className='absolute inset-0 h-full w-full object-cover '
				/> */}
				<Image
					src='/iphone__comp__src/iphone-wallpaper.jpg'
					layout='fill'
					className='absolute inset-0 h-full w-full object-cover '
				/>
				{/* Both above Images works same */}
				{/* Notch */}
				<div className='absolute top-0 inset-x-0'>
					<div className='h-6 w-40 mx-auto bg-gray-200 dark:bg-black rounded-b-3xl'></div>
				</div>
				{/* Icons beside Notch sibling */}
				<div className='relative'>
					<div className='mt-2 mr-5 flex justify-end space-x-1'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-4 w-4 text-white'
							viewBox='0 0 20 20'
							fill='currentColor'>
							<path d='M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z' />
						</svg>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-4 w-4 text-white'
							viewBox='0 0 20 20'
							fill='currentColor'>
							<path
								fillRule='evenodd'
								d='M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z'
								clipRule='evenodd'
							/>
						</svg>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-4 w-4 text-white'
							viewBox='0 0 20 20'
							fill='currentColor'>
							<path d='M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z' />
							<path d='M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z' />
						</svg>
					</div>
					{/* Line divider below icons sibling */}
					<div className='h-0.5 w-10 bg-white mr-7 ml-auto mt-1.5 rounded'></div>
					{/* Lock below Line sibling */}
					<div className='mt-2 flex flex-col items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-8 w-8 text-white'
							viewBox='0 0 20 20'
							fill='currentColor'>
							<path d='M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z' />
						</svg>
						{/* Time sibling to lock svg */}
						<p className='mt-3 text-white text-6xl font-extralight'>9:41</p>
						<p className='mt-1 text-white text-lg font-light'>Mon,Oct 20</p>
					</div>
					{/* Transparent Card sibling to lock */}
					<div className='mt-4 mx-2 relative'>
						{/* ^ Above Card Container */}
						{/* Card Stacks Below Absolutely scaled */}
						<div className='absolute z-10 -bottom-2 inset-x-0 h-full bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-3xl transform scale-95 origin-bottom shadow'></div>
						<div className='absolute z-0 -bottom-4 inset-x-0 h-full bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl transform scale-[0.85] origin-bottom shadow '></div>
						{/* Car Stack Finished */}
						<div className=' p-4 relative z-20 bg-white/40 dark:bg-black/40 backdrop-blur-md rounded-3xl shadow '>
							{/* ^ Above Inner container with the blur */}
							<div className='flex justify-between'>
								<div>
									<p className='text-xs font-bolds'>9:30 AM</p>
									<h2 className='text-lg font-bold'>Your Morning Summary</h2>
								</div>
								<span className='bg-gray-500 dark:bg-gray-800 h-8 w-8 rounded-full  flex justify-center items-center'>
									11
								</span>
							</div>
							{/* Grid container sibling to above */}
							<div className='mt-2 grid grid-cols-2 gap-2'>
								<div>
									<img
										src='/iphone__comp__src/surfing_low.jpg'
										alt='surfing'
										className='rounded-lg'
									/>
									<h3 className='mt-2 text-xs font-bold leading-tight truncate'>
										Surfing: heals the soul, kills the ribs
									</h3>
									<p className='mt-1 text-xs'>
										It's all fun and thrills until you get sucked over the falls
									</p>
								</div>
								<div>
									<img
										src='/iphone__comp__src/food.jpg'
										alt='surfing'
										className='rounded-lg'
									/>
									<h3 className='mt-2 text-xs font-bold leading-tight truncate'>
										World Food Day 2021: Know its history, significance and
										theme
									</h3>
									<p className='mt-1 text-xs'>
										World Food Day is celebrated to mark the anniversary of...
									</p>
								</div>
							</div>
							<hr className='mt-4 border-white/20 dark:border-black/20' />
							<div className='mt-3 grid grid-cols-3 gap- items-end'>
								<div className='col-span-2'>
									<h3 className='text-sm font-bold'>More Updates</h3>
									<p className='mt-0.5 text-xs'>
										Tailwind, Keystone 6, Debjit Majumdar
									</p>
								</div>
								<ul className='flex flex-row-reverse -space-x-4 space-x-reverse'>
									<li>
										<img
											src='/iphone__comp__src/tailwind.png'
											alt=''
											className='h-8 w-8 object-cover rounded-xl'
										/>
									</li>
									<li>
										<img
											src='/iphone__comp__src/keystone.jpg'
											alt=''
											className='h-8 w-8 object-cover rounded-xl'
										/>
									</li>
									<li>
										<img
											src='/iphone__comp__src/debjit.jpg'
											alt=''
											className='h-8 w-8 object-cover rounded-xl'
										/>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className='absolute bottom-0 inset-x-0 h-20'>
					<div className='flex justify-between px-10'>
						<button className='bg-gray-200/40 dark:bg-gray-800/40 backdrop-blur-md rounded-full p-2 '>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								viewBox='0 0 20 20'
								fill='currentColor'>
								<path d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' />
							</svg>
						</button>
						<button className='bg-gray-200/40 dark:bg-gray-800/40 backdrop-blur-md rounded-full p-2 '>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								viewBox='0 0 20 20'
								fill='currentColor'>
								<path
									fillRule='evenodd'
									d='M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z'
									clipRule='evenodd'
								/>
							</svg>
						</button>
					</div>
				</div>
				{/* Bottom Bar */}
				<div className='absolute bottom-1 inset-x-0'>
					<div className='mx-auto h-1 w-28 bg-white/40 dark:bg-white/20 backdrop-blur-md rounded'></div>
				</div>
			</div>
		</div>
	);
}

export default Iphone;
