import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

function Hamburgernav() {
	const [navState, SetNavState] = useState(false);
	const navToggler = () => {
		SetNavState(!navState);
	};

	const funFunction = () => {
		console.log('Clicked OutSide Hamburger Closed');
		SetNavState(!navState);
	};

	useEffect(() => {
		if (navState) {
			window.addEventListener('click', funFunction);
			console.log('Opened The Hamburger just Now');
		}
		return () => {
			window.removeEventListener('click', funFunction);
		};
	}, [navState]);
	return (
		<div
			className=' p-2 bg-gray-800 rounded-lg shadow-xl relative cursor-pointer lg:hidden'
			onClick={navToggler}>
			{!navState ? (
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
						d='M19 9l-7 7-7-7'
					/>
				</svg>
			) : (
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
						d='M5 15l7-7 7 7'
					/>
				</svg>
			)}
			{navState ? ItemList() : <></>}
		</div>
	);
}

export default Hamburgernav;

function ItemList() {
	return (
		<div className=' px-10 absolute top-16 right-1 mr-0 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 dark:border-2 dark:border-purple-600 font-medium text-right p-5 rounded-lg shadow-2xl'>
			<Link href='/coctailwind/login'>
				<a className='block'>About</a>
			</Link>
			<a href='#' className='block'>
				Learn
			</a>
			<a href='#' className='block'>
				Pricing
			</a>
			<a href='#' className='block'>
				FAQ
			</a>
			<a href='#' className='block'>
				Signup
			</a>
		</div>
	);
}
