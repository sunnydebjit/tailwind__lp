import Pricingfun from './pricingfun';

function Pricing() {
	return (
		<section id='pricing' className='relative bg-blue-600 py-32 text-blue-100'>
			{/* Divider */}
			<div className='absolute bg-gray-50 dark:bg-black inset-x-0 top-0 h-20'></div>
			<div className='container mx-auto px-6 lg:px-0 flex flex-col lg:flex-row items-center justify-center lg:space-x-8'>
				{/* Left Box */}
				<div className='order-1 lg:order-none  lg:mt-10 text-center lg:text-right text-2xl md:text-3xl lg:text-2xl space-y-2'>
					<p>
						<strong className='font-bold text-white'>Fast</strong> Web
						Applications
					</p>
					<p>
						<strong className='font-bold text-white'>Lifetime</strong> Support
					</p>
					<p>
						<strong className='font-bold text-white'>Private code</strong> for
						your persual
					</p>
				</div>
				{/* Pricing Box */}
				<div className=' relative mb-10 lg:mb-0  w-full  lg:w-1/3 bg-white p-8 border-8 border-purple-700 text-purple-800 shadow-lg text-center space-y-4 hover:scale-105 hover:shadow-2xl transform transition duration-500 '>
					{/* Pricing Fun */}
					<Pricingfun />
					<h4 className='text-gray-600 text-lg'>
						{/* Start Tailwind<span className='italic'>-ing!</span> */}
						Request a <span className='italic'>Quote!</span>
					</h4>
					{/* <div className='flex items-center justify-center text-5xl'>
						<p className='line-through text-3xl text-purple-300'>$999</p>
						<p className='font-bold'>
							<span className='text-purple-400'>$</span>99
						</p>
					</div> */}
					<div className='p-3 bg-gradient-to-br from-yellow-500 hover:from-yellow-400 via-yellow-500 hover:via-yellow-400 to-orange-400 hover:to-orange-500 text-yellow-100 hover:text-yellow-50 rounded shadow-lg hover:shadow-xl transition duration-500'>
						<a href='#footer'>Let's Jam</a>
					</div>
				</div>
				{/* Right Box */}
				<div className=' mb-10 lg:mb-0 lg:mt-10 space-y-2 text-center lg:text-left text-2xl md:text-3xl lg:text-2xl'>
					<p>
						Realistic{' '}
						<strong className='font-bold text-white'>Revisions</strong>
					</p>
					<p>
						Collab on <strong className='font-bold text-white'>ongoing</strong>{' '}
						project
					</p>
					<p>
						Wide array of{' '}
						<strong className='font-bold text-white'>services</strong>
					</p>
				</div>
			</div>
		</section>
	);
}

export default Pricing;
