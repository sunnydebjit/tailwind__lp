import Macbuttons from './learnstyles/macbuttons';

function Learn() {
	return (
		<section id='faqs'>
			<div className='pt-12 pb-12 bg-gray-50 dark:bg-black text-gray-700 dark:text-gray-100'>
				<div className='container mx-auto px-10'>
					<div className='relative'>
						{/* header */}
						<h2 className='mb-16 text-center font-bold text-gray-900 dark:text-gray-50 text-6xl'>
							Frequently Asked Questions
						</h2>
						{/* Header Style elements */}
						<div className='absolute top-0 left-0 transform -translate-y-4 h-2 w-1/3 rounded bg-gradient-to-tr from-blue-400 to-purple-400'></div>
						<div className='absolute bottom-0 right-0 transform translate-y-6 h-2 w-1/3 rounded bg-gradient-to-tr from-purple-400 to-blue-400'></div>
					</div>
					{/* Grid Area */}
					<div className='space-y-6 lg:space-y-0 lg:grid gap-10 grid-cols-6'>
						{/* Row 1 */}
						<div className='border border-gray-700 dark:border-gray-50 rounded col-span-2 shadow-lg'>
							<Macbuttons>
								<h3>Why have you been so diverse?</h3>
							</Macbuttons>
							<p className='p-4 '>
								I beleive myself to be a problem solver. Over the years, I've
								met several good people & understood no two problems are alike,
								and if you wish to solve them, you need to spread your wings.
							</p>
						</div>
						<div className='border border-gray-700 dark:border-gray-50 rounded col-span-2 shadow-lg'>
							<Macbuttons>
								<h3>How did you know these technologies?</h3>
							</Macbuttons>
							<p className='p-4 '>
								I am constantly evolving and staying updated with latest
								technologies. I have never stopped learning after my graduation,
								infact, I study a lot more after that since I am not confined to
								a curriculum.
							</p>
						</div>
						<div className='border border-gray-700 dark:border-gray-50 rounded col-span-2 shadow-lg'>
							<Macbuttons>
								<h3>Why did you learn Development after Design?</h3>
							</Macbuttons>
							<p className='p-4 '>
								A good design is useless if it isn't implemented somewhere. I
								prefer putting the effort and learning the tech rather than
								relying on someone else to implement my creatives.
							</p>
						</div>
						{/* Row 2 */}
						<div className='border border-gray-700 dark:border-gray-50 rounded col-span-3 shadow-lg'>
							<Macbuttons>
								<h3>Can you work on a team?</h3>
							</Macbuttons>
							<p className='p-4 '>
								Absolutely, I subscribe to the feeling revolution can be
								achieved in a group of people. I am a teamplayer and can focus
								on precision when rest of the work is distributed.
							</p>
						</div>
						<div className='border border-gray-700 dark:border-gray-50 rounded col-span-3 shadow-lg'>
							<Macbuttons>
								<h3>Are you available for work?</h3>
							</Macbuttons>
							<p className='p-4 '>
								Yes I am available for work and collaboration on complex
								projects involving multi layer components stacked together to
								make a piece. If you have such work at hand, I would love to
								have a conversation with you.
							</p>
						</div>
						{/* Row 3 */}
						{/* <div className='border border-gray-700 dark:border-gray-50 rounded col-span-2 shadow-lg'>
							<Macbuttons>
								<h3>Creating common components</h3>
							</Macbuttons>
							<p className='p-4 '>
								One of the first things we want to do when using Tailwind is to
								create components like cards, buttons, and forms. We'll build
								these out and see how Tailwind compares to CSS frameworks like
								Bootstrap.
							</p>
							<p className='p-4 '>
								We'll also build out navigation, hero, pricing, newsletter, and
								footer components in this course.
							</p>
						</div>
						<div className='border border-gray-700 dark:border-gray-50 rounded col-span-2 shadow-lg'>
							<Macbuttons>
								<h3>Shrinking bundle sizes</h3>
							</Macbuttons>
							<p className='p-4 '>
								Tailwind comes with so many classes. It doesn't make sense to
								send all of those to our users' browsers. With PostCSS and
								PurgeCSS, we can shrink the amount of CSS we send to our users.
							</p>
							<p className='p-4 '>
								We'll learn how to only send the classes that we actually use so
								that our bundle sizes can drop to even below 10kb!
							</p>
						</div>
						<div className='border border-gray-700 dark:border-gray-50 rounded col-span-2 shadow-lg'>
							<Macbuttons>
								<h3>Using Tailwind w/ React</h3>
							</Macbuttons>
							<p className='p-4 '>
								Tailwind's benefits really shine when you pair it with a
								JavaScript library/framework. Extracting classes into components
								is the recommended way to keep Tailwind DRY (don't repeat
								yourself).
							</p>
							<p className='p-4 '>
								While we could use the @apply() or theme() functions, it forgoes
								some of the benefits of Tailwind. Namely we are once again
								creating a custom class and CSS.
							</p>
						</div> */}
						{/* Row 4 */}
						{/* <div className='border border-gray-700 dark:border-gray-50 rounded col-span-2 shadow-lg'>
							<Macbuttons>
								<h3>How to customize Tailwind</h3>
							</Macbuttons>
							<p className='p-4 '>
								Tailwind is easily configurable for our own projects using the
								tailwind.js config file. We'll explore changing out fonts,
								colors, sizes, and more so that our Tailwind setups are custom
								and tailored to our projects.
							</p>
						</div>
						<div className='border border-gray-700 dark:border-gray-50 rounded col-span-2 shadow-lg'>
							<Macbuttons>
								<h3>Using Tailwind in VS Code</h3>
							</Macbuttons>
							<p className='p-4 '>
								VS Code is my favorite editor and Tailwind works fantastically
								in it. There are some essential plugins and setup for using
								Tailwind in VS Code. We'll go over each and use VS Code heavily
								in this course.
							</p>
						</div>
						<div className='border border-gray-700 dark:border-gray-50 rounded col-span-2 shadow-lg'>
							<Macbuttons>
								<h3>Extending Tailwind</h3>
							</Macbuttons>
							<p className='p-4 '>
								Learning Tailwind is just the beginning. There are some great
								tools like Tailwind Typography, Tailwind UI, Tailwind Builder,
								and more. We'll talk about some ways to extend Tailwind and ways
								we can go further.
							</p>
						</div> */}
						{/* Row 4 End */}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Learn;
