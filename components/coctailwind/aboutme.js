function Aboutme() {
	return (
		<>
			<div className='md:pt-12 pb-24 bg-gray-300 dark:bg-gray-900 md:text-center'>
				<section className='container mx-auto px-6 lg:px-0'>
					<h2 className='mb-3 text-4xl md:text-6xl font-bold text-teal-900 dark:text-teal-300'>
						My Past Projects
					</h2>
					<p className='mb-12 md:text-xl leading-loose'>
						Hey there! My name is{' '}
						<a href='#' className='text-blue-500 hover:underline'>
							Debjit Majumdar
						</a>{' '}
						and I founded a web dev tutorial site Scotch.io. We were able to
						grow to 4M monthly pageviews and $300,000 yearly revenue. Scotch.io
						was acquired byDigitalOcean in November 2019. Nowadays I'm in search
						of the best ways to develop and design a business. Hope you enjoy
						this course and my other one MakeReactApps.com.
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
								frameborder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowfullscreen></iframe>
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
								frameborder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowfullscreen></iframe>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default Aboutme;
