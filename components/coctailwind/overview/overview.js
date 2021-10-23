import OverCircles from './overCircles';

function Overview() {
	return (
		<>
			<section
				id='overview'
				className='relative bg-gray-50 dark:bg-gradient-to-b from-black via-black to-black md:pt-12 pb-24'>
				{/* Gray  Bar */}
				<div className='absolute bg-gray-50 dark:bg-black bottom-0 inset-x-0 h-64 '></div>
				{/* Gray Bar ends */}
				{/* Experiment */}
				<div className='absolute inset-0 flex flex-col justify-center space-y-6 overflow-x-hidden'>
					<OverCircles />
					<OverCircles />
				</div>
				{/* Exp ends */}
				<div className=' relative container mx-auto px-10'>
					<h2 className='mb-10 text-4xl md:text-6xl font-bold text-center '>
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400'>
							Overview
						</span>{' '}
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-500'>
							About
						</span>{' '}
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-500  to-teal-600 '>
							Me
						</span>
					</h2>
					<div
						id='left'
						className='md:flex md:space-x-16 space-y-6 lg:space-y-0'>
						<div className='md:w-2/3  backdrop-blur-3xl p-12 md:p-16 rounded shadow-2xl text-green-800 dark:text-green-50 text-base md:text-lg space-y-8 leading-relaxed border-4 border-green-500'>
							<p>
								Hi I am{' '}
								<strong className='font-bold text-teal-500'>
									Debjit Majumdar
								</strong>
								, I create fast and visually pleasing web applications.
							</p>
							<p>
								I am presently based at Bangalore, India. I did my graduation on
								Electronics & Telecommunication Engineering and later switched
								to solving complex design problems for clients. Presently I've
								fused all my abilities gained in the journey and love creating
								beautiful Web Applications that are scalable and fast involving
								designing digital interfaces.
							</p>
							<p>
								<strong className='font-bold'>Important Note</strong>: My
								development stack is focused on performance & accessibility with
								delightful interactions. I create blazing fast web experience
								using{' '}
								<a
									href='https://jamstack.org/what-is-jamstack/'
									className='text-blue-500 dark:text-blue-400 hover:underline'>
									Jamstack
								</a>{' '}
								with the help of Nextjs and headless CMSs.
							</p>
							<p className='text-3xl italic relative'>
								<span className='absolute top-0 left-0 text-6xl transform -translate-x-7 -translate-y-2 text-green-500 scale-150'>
									"
								</span>
								Design should be Purposeful, Functional, and Relevant to its
								original intention
							</p>
						</div>
						<div id='right' className=' flex-grow text-lg italic space-y-6'>
							<p className=' p-10 rounded-lg  dark:bg-black/10 backdrop-blur-3xl text-green-800 dark:text-green-200 shadow-lg border-2 border-green-600'>
								<strong>2014</strong>: Started own design studio REVCO
							</p>
							<p className=' p-10 rounded-lg  dark:bg-black/10 backdrop-blur-3xl text-green-800 dark:text-green-200 shadow-lg border-2 border-green-600'>
								<strong>2015</strong>: Managed Events for NVIDIA, ASUS,
								GIGABYTE, AMD etc.
							</p>
							<p className=' p-10 rounded-lg  dark:bg-black/10 backdrop-blur-3xl text-green-800 dark: textgreene-200 shadow-lg border-2 border-green-600'>
								<strong>2016</strong>: Solved Video Production problems for
								clients
							</p>
							<p className=' p-10 rounded-lg  dark:bg-black/10 backdrop-blur-3xl text-green-800 dark:text-green-200 shadow-lg border-2 border-green-600'>
								<strong>2019</strong>: Started Bengali Cuisine at Bangalore
							</p>
							<p className=' p-10 rounded-lg  dark:bg-black/10 backdrop-blur-3xl text-green-800 dark:text-green-200 shadow-lg border-2 border-green-600'>
								<strong>2020</strong>: Started freelancing on the web
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Overview;

// <code className='inline-block px-1 rounded bg-purple-300 text-red-800 font-mono text-sm'>
// !important
// </code>
