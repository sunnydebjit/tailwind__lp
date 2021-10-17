function Overview() {
	return (
		<>
			<section className='relative bg-purple-700 dark:bg-black md:pt-12 pb-24'>
				{/* Gray  Bar */}
				<div className='absolute bg-gray-300 dark:bg-gray-900 bottom-0 inset-x-0 h-64'></div>
				{/* Gray Bar ends */}
				<div className=' relative container mx-auto px-10'>
					<h2 className='mb-10 text-4xl md:text-6xl font-bold text-purple-100'>
						Writing CSS is tough stuff!
					</h2>
					<div
						id='left'
						className='md:flex md:space-x-16 space-y-6 lg:space-y-0'>
						<div className='md:w-2/3 bg-purple-50 p-12 md:p-16 rounded shadow-2xl text-purple-800 text-base md:text-lg space-y-8 leading-relaxed'>
							<p>
								Tailwind makes writing CSS easier and lets us customize our
								designs faster than any other CSS framework. If you want a CSS
								framework that has pre-built components, then Tailwind may not
								be for you. If you want a CSS framework that lets you design
								quickly and customize your site, then{' '}
								<strong className='font-bold text-teal-500'>
									Tailwind is gonna be a lot of fun
								</strong>
								.
							</p>
							<p>
								After using Bulma to build{' '}
								<a
									href='https://hulu-2-dm.vercel.app/'
									className='text-blue-500 hover:underline'>
									Hulu 2.0
								</a>
								, my CSS files became littered with my own{' '}
								<code className='inline-block px-1 rounded bg-purple-300 text-red-800 font-mono text-sm'>
									!important
								</code>
								{` `}
								classes to override the framework's styles. Tailwind doesn't
								have the
								<code className='inline-block px-1 rounded bg-purple-300 text-red-800 font-mono text-sm'>
									!important
								</code>
								{` `}
								problem since all our elements are designed on the fly.
							</p>
							<p>
								<strong className='font-bold'>Important Note</strong>: Tailwind
								lets us design quickly, but this doesn't mean that you don't
								need CSS knowledge however. To use Tailwind, you need to have a
								good understanding of CSS properties. In this course, we will
								learn Tailwind and we'll also learn CSS conceptsto create good
								looking designs.{' '}
								<strong className='font-bold'>
									Tailwind is the ultimate CSS shorthand
								</strong>
								, but we still need to learn the CSS, which we'll do in this
								course.
							</p>
							<p className='text-3xl italic relative'>
								<span className='absolute top-0 left-0 text-6xl transform -translate-x-7 -translate-y-2 text-purple-600 scale-150 opacity-50'>
									"
								</span>
								This isn't just a Tailwind course. This is also a "learn how to
								design with CSS" course.
							</p>
							<p>
								The hardest things about learning Tailwind is memorizing the
								classes and also knowing which classes go well together. We'll
								be writing a lot of Tailwind in this course so that the
								repetition will help us commit Tailwind classes to memory.
							</p>
						</div>
						<div id='right' className=' flex-grow text-lg italic space-y-6'>
							<p className=' p-10 rounded-lg bg-purple-800 text-purple-200 shadow-lg'>
								What classes should I use?
							</p>
							<p className=' p-10 rounded-lg bg-purple-800 text-purple-200 shadow-lg'>
								How do I make things look good?
							</p>
							<p className=' p-10 rounded-lg bg-purple-800 text-purple-200 shadow-lg'>
								My design looks basic?
							</p>
							<p className=' p-10 rounded-lg bg-purple-800 text-purple-200 shadow-lg'>
								How do I do responsive?
							</p>
							<p className=' p-10 rounded-lg bg-purple-800 text-purple-200 shadow-lg'>
								Why does my typography look so bad?
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Overview;
