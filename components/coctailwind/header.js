import Link from 'next/link';
import Darkbutton from '../darkbutton';
import Hamburgernav from './hamburgernav';
import Logo from './logo';
import { useState, useEffect } from 'react';
import Scrolltotop from './scrolltotop';
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
			<section
				className={`sticky z-50 top-0 ${
					navColor
						? 'bg-gradient-to-b from-via dark:from-trueGray-900 dark:via-transparent'
						: null
				}`}>
				<nav className='text-gray-600 dark:text-gray-200'>
					<div className='container mx-auto flex justify-between p-6 lg:px-0 '>
						<div className='space-x-4 flex items-center'>
							<Logo
								height={30}
								className='text-teal-900 dark:text-teal-50 cursor-pointer transform hover:scale-105 '
							/>

							<Link href='/'>
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
							<Link href='/coctailwind/login'>
								<a className='hidden lg:inline-block hover:text-gray-900'>
									Pricing
								</a>
							</Link>
							<Link href='/coctailwind/userpage'>
								<a className='hidden lg:inline-block hover:text-gray-900'>
									FAQ
								</a>
							</Link>
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
				</nav>
			</section>
		</>
	);
}

export default Header;
