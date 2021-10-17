import Iphone from './iphone';

function IphoneStack() {
	return (
		<div className='py-10 px-10 min-h-screen bg-gray-500 dark:bg-gray-900 flex justify-center items-center relative'>
			<div className='relative  bg-red-500'>
				<div className='hidden md:block absolute z-0 transform -translate-x-36 scale-95 hover:-translate-x-56 transition duration-500'>
					<Iphone />
				</div>
				<div className='relative z-10 '>
					<Iphone />
				</div>
				<div className='hidden md:block absolute top-0 z-0 transform  translate-x-36  scale-95 hover:translate-x-56 transition duration-500'>
					<Iphone />
				</div>
			</div>
		</div>
	);
}

export default IphoneStack;
