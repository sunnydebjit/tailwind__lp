function Aboutme() {
	return (
		<>
			<section
				id='about'
				className='md:pt-12 pb-24 bg-gray-300 dark:bg-gray-900 md:text-center'>
				<section className='container mx-auto px-10'>
					<h2 className='mb-3 text-4xl md:text-6xl font-bold text-teal-900 dark:text-teal-300'>
						My Past Projects
					</h2>
					<p className='mb-12 md:text-xl leading-loose'>
						Hi! My name{' '}
						<a href='#' className='text-blue-500 hover:underline'>
							Debjit Majumdar
						</a>{' '}
						and I’m a UI & UX Designer who lives in Bangalore, India. I
						graduated from Dr. B.C Roy College of Engineering. Where I did the
						Communication and Multimedia Design study. With my portfolio, I
						would like to show you projects I’m proud of and show my diversity
						of creativity, with User Interface / Experience design and
						UI-Animation appealing to me the most.
					</p>
					{/* Videos */}
					<div className='md:flex md:space-x-8 space-y-8 md:space-y-0 text-left'>
						<div className='bg-gray-50 dark:bg-gray-900 md:w-1/2 border-2 border-gray-700 rounded shadow-xl'>
							<p className='text-lg text-gray-700 dark:text-white p-4'>
								I have a Getting Started with Tailwind article on scotch.io and
								a 15 minute starter YouTube video.
							</p>
							<iframe
								className='w-full rounded-b'
								height='315'
								src='https://www.youtube.com/embed/z_6MT2SrS1A'
								title='YouTube video player'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen></iframe>
						</div>
						<div className='bg-gray-50 dark:bg-gray-900 md:w-1/2 border-2 border-gray-700 rounded shadow-xl '>
							<p className='text-lg text-gray-700 dark:text-white p-4'>
								I did a Build Your 1st Tailwind Site for Traversy Media on
								YouTube also.
							</p>
							<iframe
								className='w-full rounded-b'
								height='315'
								src='https://www.youtube.com/embed/z_6MT2SrS1A'
								title='YouTube video player'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen></iframe>
						</div>
					</div>
				</section>
			</section>
		</>
	);
}

export default Aboutme;
