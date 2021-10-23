import Link from 'next/link';

function Back() {
	return (
		<Link href='/#projects'>
			<div className='absolute bottom-[4.3rem] left-10 p-3 shadow-lg rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-700 hover:to-purple-600 text-purple-100 hover:text-white font-bold text-lg tracking-wide transition duration-500 cursor-pointer'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-6 w-6'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M10 19l-7-7m0 0l7-7m-7 7h18'
					/>
				</svg>
			</div>
		</Link>
	);
}

export default Back;
