import Link from 'next/link';
import Image from 'next/image';
function Hero() {
	return (
		<>
			<section id='hero' className='relative'>
				<div className='container mx-auto px-6 lg:px-0 py-24 text-center'>
					{/* Heading */}
					<h1 className='mb-4 text-6xl font-extrabold text-transparent bg-gradient-to-r from-teal-400 via-teal-500 to-purple-500 bg-clip-text'>
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-500'>
							Tailwind
						</span>{' '}
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-teal-600 to-purple-500'>
							Master
						</span>
					</h1>
					{/* Paragraph */}
					<p className='mb-8 text-2xl text-gray-700 dark:text-gray-100'>
						Make good looking designs quickly. All without a single line of
						custom CSS.
					</p>
					{/* Big Button */}
					<a
						href='#'
						className='inline-block mb-32 py-3 px-12 rounded shadow-lg hover:shadow-2xl bg-gradient-to-br from-purple-500 to-purple-700 hover:to-purple-600 text-purple-100 hover:text-white font-bold text-lg tracking-wide transition duration-500'>
						Get the Course
					</a>
					{/* Teaser Image */}
					<div className='relative'>
						<div
							id='teaser__image'
							className='rounded-lg shadow-2xl border-4 border-purple-400'>
							<Image
								src='/hero-image.png'
								layout='responsive'
								width={3306}
								height={2074}
								alt='Teaser Image'
							/>
						</div>
						{/* Teaser Image Info Box */}
						<div className='absolute top-0 right-0 bg-yellow-100 transform translate-x-4 -translate-y-4 text-left py-4 px-8 rounded shadow-lg text-yellow-800 border-t-4 border-yellow-500'>
							<p>
								<strong className='font-bold'>
									We'll create TailwindMaster.com
								</strong>{' '}
								<span className='opacity-60'>
									(it's the site you're on now)
								</span>
							</p>
							<p>We'll do it all without a single line of custom CSS!</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Hero;
