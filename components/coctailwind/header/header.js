import Link from 'next/link';

import Darkbutton from './darkbutton';
import Hamburgernav from './hamburgernav';
import Logo from './logo';
import { useState, useEffect } from 'react';
import Scrolltotop from './scrolltotop';
import Scrollable from './scrollable';
function Header() {
	const [navColor, SetNavColor] = useState(false);
	const ChangeNavBg = () => {
		if (!window) {
			return null;
		} else if (window.scrollY >= 100) {
			SetNavColor(true);
		} else {
			SetNavColor(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', ChangeNavBg);
		return () => {
			window.removeEventListener('scroll', ChangeNavBg);
		};
	}, []);

	return (
		<>
			<nav
				className={`sticky z-50 top-0 ${
					navColor
						? 'bg-gradient-to-b from-gray-50 via-gray-50 to-transparent dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-900 dark:to-transparent'
						: null
				}`}>
				<section className='text-gray-600 dark:text-gray-200'>
					<div className='container mx-auto  p-10  flex justify-between'>
						<div className='space-x-4 flex items-center'>
							<Logo
								height={30}
								className='text-teal-900 dark:text-teal-50 cursor-pointer transform hover:scale-105 '
							/>
							<Scrollable
								linkName='Tailwind Master'
								src='#hero'
								visibility={'hidden'}
							/>
							<Scrollable linkName='About' src='#about' visibility={'hidden'} />
							<Scrollable
								linkName={`What You'll Learn`}
								src='#learn'
								visibility={'hidden'}
							/>
							<Scrollable
								linkName='Pricing'
								src='#pricing'
								visibility={'hidden'}
							/>
							<Scrollable linkName='FAQ' src='#faq' visibility={'hidden'} />

							{/* <Link href='/'>
								<a className='text-teal-900 dark:text-teal-50 font-bold text-2xl'>
									Tailwind Master
								</a>
							</Link>
							<Link href='/coctailwind/login'>
								<a className='hidden lg:inline-block hover:text-gray-900'>
									About
								</a>
							</Link>
							<Link href='/coctailwind/userpage'>
								<a className='hidden lg:inline-block hover:text-gray-900'>
									What You'll Learn
								</a>
							</Link>

							<Link
								href='#pricing'
								className='hidden lg:inline-block hover:text-gray-900'>
								<a>Pricing</a>
							</Link>

							<Link href='/coctailwind/userpage'>
								<a className='hidden lg:inline-block hover:text-gray-900'>
									FAQ
								</a>
							</Link> */}
						</div>
						{/* Nav Separator */}
						<div className='space-x-4 flex items-center'>
							<Darkbutton />
							<Hamburgernav />

							{navColor ? <Scrolltotop /> : null}

							<Link href='/coctailwind/login'>
								<a className='hover:text-gray-900 hidden lg:inline-block'>
									Login
								</a>
							</Link>
							<Link href='/coctailwind/userpage'>
								<a className='hidden lg:inline-block p-3 bg-gradient-to-br from-purple-500 to-purple-700 hover:to-purple-600 hover:bg-purple-200 text-purple-100 hover:text-white rounded shadow hover:shadow-xl transition duration-500'>
									Signup
								</a>
							</Link>
						</div>
					</div>
				</section>
			</nav>
		</>
	);
}

export default Header;
