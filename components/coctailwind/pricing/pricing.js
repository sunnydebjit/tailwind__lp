import Pricingfun from './pricingfun';

function Pricing() {
	return (
		<section id='pricing' className='relative bg-blue-600 py-32 text-blue-100'>
			{/* Divider */}
			<div className='absolute bg-gray-300 dark:bg-gray-900 inset-x-0 top-0 h-48'></div>
			<div className='container mx-auto px-6 lg:px-0 flex flex-col lg:flex-row items-center justify-center lg:space-x-8'>
				{/* Left Box */}
				<div className='order-1 lg:order-none  lg:mt-10 text-center lg:text-right text-2xl md:text-3xl lg:text-2xl space-y-2'>
					<p>
						<strong className='font-bold text-white'>75 videos</strong> at a
						smooth pace
					</p>
					<p>
						<strong className='font-bold text-white'>9.25 hours</strong> of
						learning + building
					</p>
					<p>
						<strong className='font-bold text-white'>Source code</strong> and
						CodePens
					</p>
				</div>
				{/* Pricing Box */}
				<div className=' relative mb-10 lg:mb-0  w-full  lg:w-1/3 bg-white p-8 border-8 border-purple-700 text-purple-800 shadow-lg text-center space-y-4 hover:scale-105 hover:shadow-2xl transform transition duration-500 '>
					{/* Pricing Fun */}
					<Pricingfun />
					<h4 className='text-gray-600 text-sm'>
						Start Tailwind<span className='italic'>-ing!</span>
					</h4>
					<div className='flex items-center justify-center text-5xl'>
						<p className='line-through text-3xl text-purple-300'>$999</p>
						<p className='font-bold'>
							<span className='text-purple-400'>$</span>99
						</p>
					</div>
					<div className='p-3 bg-gradient-to-br from-yellow-500 hover:from-yellow-400 via-yellow-500 hover:via-yellow-400 to-orange-400 hover:to-orange-500 text-yellow-100 hover:text-yellow-50 rounded shadow-lg hover:shadow-xl transition duration-500'>
						<a href='#'>Request a quote</a>
					</div>
				</div>
				{/* Right Box */}
				<div className=' mb-10 lg:mb-0 lg:mt-10 space-y-2 text-center lg:text-left text-2xl md:text-3xl lg:text-2xl'>
					<p>
						<strong className='font-bold text-white'>Reusable code</strong>
					</p>
					<p>
						Access to<strong className='font-bold text-white'> Discord</strong>{' '}
						for support
					</p>
					<p>
						Lifetime refund{' '}
						<strong className='font-bold text-white'>guarantee</strong>
					</p>
				</div>
			</div>
		</section>
	);
}

export default Pricing;
