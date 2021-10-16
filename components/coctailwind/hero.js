import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import BackgroundAnimation from '../BackgroundAnimation';
function Hero() {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	const { systemTheme, theme, setTheme } = useTheme();
	const renderBGChanger = () => {
		const currentTheme = theme === 'system' ? systemTheme : theme;
		if (!mounted) return <></>;
		if (currentTheme === 'dark') {
			return (
				<>
					<div className='w-auto h-1/2'>
						<BackgroundAnimation
							className='w-6 h-6 flex-shrink-0 '
							// onClick={() => setTheme('light')}
						/>
						<div className='absolute  top-0  w-full h-full my-auto'>
							<div className='w-full h-full  flex items-center justify-center text-white text-2xl md:text-6xl font-bold'>
								<div className='space-y-6'>
									<h1>
										<span className='text-lime-500'>{`<`}</span>CoderByNight
										{' ' + ' '}
										<span className='text-lime-500'>{`/>`}</span>
									</h1>
									<p className='text-lg md:text-2xl px-10 md:px-20 font-normal'>
										Hey there! My name is Debjit Majumdar and I founded a web
										dev tutorial site Hulu 2.0 . Nowadays I'm in search of the
										best ways to develop and design a business. Hope you enjoy
										this course and my other one MakeReactApps.com.
									</p>
								</div>
							</div>
						</div>
					</div>
				</>
			);
		} else {
			return (
				<Image
					src='/hero-image.png'
					layout='responsive'
					width={3306}
					height={2074}
					alt='Teaser Image'
					// onClick={() => setTheme('dark')}
				/>
			);
		}
	};

	const renderBGCompChanger = () => {
		const currentTheme = theme === 'system' ? systemTheme : theme;
		if (!mounted) return <></>;
		if (currentTheme === 'dark') {
			return (
				<>
					<div className='md:absolute top-0 right-0 bg-yellow-100 md:transform md:translate-x-4 md:-translate-y-4 text-center text-xs md:text-normal md:text-left py-2 px-4 md:py-4 md:px-8 rounded shadow-lg text-yellow-800 border-t-4 border-yellow-500'>
						<p>
							<strong className='font-bold'>We'll create Debjit</strong>{' '}
							<span className='opacity-60'>(it's the site you're on now)</span>
						</p>
						<p>We'll do it all without a single line of custom CSS!</p>
					</div>
				</>
			);
		} else {
			return (
				<>
					<div className='md:absolute top-0 right-0 bg-yellow-100 md:transform md:translate-x-4 md:-translate-y-4 text-center text-xs md:text-normal md:text-left py-2 px-4 md:py-4 md:px-8 rounded shadow-lg text-yellow-800 border-t-4 border-yellow-500'>
						<p>
							<strong className='font-bold'>
								We'll create TailwindMaster.com
							</strong>{' '}
							<span className='opacity-60'>(it's the site you're on now)</span>
						</p>
						<p>We'll do it all without a single line of custom CSS!</p>
					</div>
				</>
			);
		}
	};

	return (
		<>
			<section id='hero' className='relative'>
				{/* Purple Bar */}
				<div className='absolute bg-purple-700 bottom-0 inset-x-0 h-64'></div>
				<div className='container mx-auto px-10 py-24 text-center'>
					{/* Heading */}
					<h1 className='mb-4 text-5xl md:text-6xl font-extrabold text-transparent bg-gradient-to-r from-teal-400 via-teal-500 to-purple-500 bg-clip-text'>
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-500'>
							Tailwind
						</span>{' '}
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-teal-600 to-purple-500'>
							Master
						</span>
					</h1>
					{/* Paragraph */}
					<p className='mb-8 text-lg md:text-2xl text-gray-700 dark:text-gray-100'>
						Make good looking designs quickly. All without a single line of
						custom CSS.
					</p>
					{/* Big Button */}
					<a
						href='#'
						className='inline-block mb-16 md:mb-32 py-3 px-12 rounded shadow-lg hover:shadow-2xl bg-gradient-to-br from-purple-500 to-purple-700 hover:to-purple-600 text-purple-100 hover:text-white font-bold text-lg tracking-wide transition duration-500'>
						Get the Course
					</a>
					{/* Teaser Image */}
					<div className='relative'>
						<div
							id='teaser__image'
							className='rounded-lg shadow-2xl border-4 dark:bg-gray-900 border-purple-400 mb-6 md:mb-0'>
							{renderBGChanger()}
						</div>
						{/* Teaser Image Info Box */}
						{renderBGCompChanger()}
					</div>
				</div>
			</section>
		</>
	);
}

export default Hero;
