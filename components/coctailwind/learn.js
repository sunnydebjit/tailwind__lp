import Macbuttons from './learnstyles/macbuttons';

function Learn() {
	return (
		<section id='learn'>
			<div className='pt-12 pb-24 bg-gray-300 dark:bg-gray-900 text-gray-700 dark:text-gray-100'>
				<div className='container mx-auto px-10'>
					<div className='relative'>
						{/* header */}
						<h2 className='mb-16 text-center font-bold text-purple-900 text-6xl'>
							What you'll learn in this course
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
								<h3>How to use Tailwind Classes</h3>
							</Macbuttons>
							<p className='p-4 '>
								We'll dive into the most important Tailwind classes and use them
								a TON. There are a lot of useful classes like spacing,
								backgrounds, borders, shadows, and typography. We'll type the
								Tailwind classes many times over to ensure that repeitition is
								our greatest learning tool.
							</p>
						</div>
						<div className='border border-gray-700 dark:border-gray-50 rounded col-span-2 shadow-lg'>
							<Macbuttons>
								<h3>Make good looking designs</h3>
							</Macbuttons>
							<p className='p-4 '>
								There's a certain process to designing with Tailwind that we'll
								take to make our designs look good. Some easy to remember rules
								are all it takes to get a good design. We'll also talk about
								ideas and action items to take a good design and make it great.
							</p>
						</div>
						<div className='border border-gray-700 dark:border-gray-50 rounded col-span-2 shadow-lg'>
							<Macbuttons>
								<h3>Why Tailwind is different/better</h3>
							</Macbuttons>
							<p className='p-4 '>
								To be completely honest, I didn't like Tailwind at first. It
								felt like inline styles to me (and maybe still does). After
								using it more and more though, I've come to absolutely love it.
								I dread jumping into a project without Tailwind now.
							</p>
						</div>
						{/* Row 2 */}
						<div className='border border-gray-700 dark:border-gray-50 rounded col-span-3 shadow-lg'>
							<Macbuttons>
								<h3>How to build this site (site-ception!)</h3>
							</Macbuttons>
							<p className='p-4 '>
								The site you're on (BeginnerTailwind.com) is built with Tailwind
								and has 0 custom css.
							</p>
							<p className='p-4 '>
								You can take all of the code from this site and use it for your
								own landing pages or sites! All the code is available to you
								with course purchase.
							</p>
						</div>
						<div className='border border-gray-700 dark:border-gray-50 rounded col-span-3 shadow-lg'>
							<Macbuttons>
								<h3>A fun and methodical design process</h3>
							</Macbuttons>
							<p className='p-4 '>
								I struggle with making things look good and don't consider
								myself a designer. What I try to do is have a formula for making
								things look good. I focus on design in this order: spacing, box
								properties, typography, fun element to pop. We'll talk about
								this all throughout the course.
							</p>
						</div>
						{/* Row 3 */}
						<div className='border border-gray-700 dark:border-gray-50 rounded col-span-2 shadow-lg'>
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
						</div>
						{/* Row 4 */}
						<div className='border border-gray-700 dark:border-gray-50 rounded col-span-2 shadow-lg'>
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
						</div>
						{/* Row 4 End */}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Learn;
