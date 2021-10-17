import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import BackgroundAnimation from './BackgroundAnimation';
import Logo from '../header/logo';
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
					<div
						id='teaser__image'
						className='relative rounded-lg shadow-2xl border-4 dark:bg-transparent dark:backdrop-blur-md border-green-400 mb-6 w-2xl mx-auto md:mb-0'>
						<div id='image__container' className='flex'>
							<div className='h-auto w-full  overflow-hidden object-fill relative'>
								{/* <img
									src='/iphone__comp__src/iphone-wallpaper.jpg'
									alt='bg-img'
									className='h-60 w-full object-cover'
								/> */}

								<BackgroundAnimation />
								<div className='absolute inset-0 flex justify-center items-center'>
									<Logo />
									<h1 className='text-2xl font-black md:text-6xl lg:text-9xlt-'>
										<span className='text-green-400'>{`<`}</span>CoderByNight
										{' ' + ' '}
										<span className='text-green-400'>{`/>`}</span>
									</h1>
								</div>
							</div>
						</div>
					</div>
				</>
			);
		} else {
			return (
				<div
					id='teaser__image'
					className='relative rounded-lg shadow-2xl border-4 dark:bg-transparent dark:backdrop border-purple-400 mb-6 md:mb-0'>
					<Image
						src='/hero-image.png'
						layout='responsive'
						width={3306}
						height={2074}
						alt='Teaser Image'
						// onClick={() => setTheme('dark')}
					/>
				</div>
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
				<div className=' absolute bg-gradient-to-b from-purple-700 to-purple-700 dark:bg-gradient-to-b dark:from-transparent dark:via-green-900 dark:to-black bottom-0 inset-x-0 h-96'></div>
				<div className='container mx-auto px-10 py-24 text-center'>
					{/* Heading */}
					<h1 className=' mb-4 text-5xl md:text-6xl font-extrabold text-transparent bg-gradient-to-r from-teal-400 via-teal-500 to-purple-500 bg-clip-text'>
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-500'>
							Tailwind
						</span>{' '}
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-teal-600 to-purple-500 '>
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
						{renderBGChanger()}
						{/* <h1 className='text-xs md:text-2xl'>
										<span className='text-lime-500'>{`<`}</span>CoderByNight
										{' ' + ' '}
										<span className='text-lime-500'>{`/>`}</span>
									</h1> */}

						{/* Teaser Image Info Box */}
						{renderBGCompChanger()}
					</div>
				</div>
			</section>
		</>
	);
}

export default Hero;
