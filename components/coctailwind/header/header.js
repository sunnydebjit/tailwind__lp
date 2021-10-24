import Link from 'next/link';
import { motion } from 'framer-motion';
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
		} else if (window.scrollY >= 120) {
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
						? 'bg-gradient-to-b  from-white via-white to-transparent dark:bg-gradient-to-b dark:from-black dark:via-black  dark:to-transparent '
						: null
				}`}>
				<section className='text-gray-600 dark:text-gray-300'>
					<div className='container mx-auto  p-10  flex justify-between'>
						<div className='space-x-4 flex items-center'>
							<Logo
								height={30}
								className='text-teal-900 dark:text-teal-50 cursor-pointer transform hover:scale-110 transition duration-200 '
							/>
							<Link href='/'>
								<a
									className={`lg:inline-block hover:text-gray-900 dark:hover:text-gray-50 font-black uppercase text-xl`}>
									Debjit
								</a>
							</Link>
							<Link href='/#projects'>
								<a
									className={`hidden lg:inline-block hover:text-gray-900 dark:hover:text-gray-50 `}>
									Projects
								</a>
							</Link>
							<Link href='/#overview'>
								<a
									className={`hidden lg:inline-block hover:text-gray-900 dark:hover:text-gray-50 `}>
									Overview
								</a>
							</Link>
							<Link href='/#tech'>
								<a
									className={`hidden lg:inline-block hover:text-gray-900 dark:hover:text-gray-50 `}>
									Technologies
								</a>
							</Link>
							<Link href='/#faqs'>
								<a
									className={`hidden lg:inline-block hover:text-gray-900 dark:hover:text-gray-50 `}>
									FAQ
								</a>
							</Link>
							{/* <Scrollable
								linkName='Projects'
								src='#projects'
								visibility={'hidden'}
							/>
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
							<Scrollable linkName='FAQ' src='#faq' visibility={'hidden'} /> */}

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
						<div className=' relative space-x-4 flex items-center'>
							<Darkbutton />
							<Hamburgernav />

							{navColor ? <Scrolltotop /> : null}

							{/* <Link href='/coctailwind/login'>
								<a className='hover:text-gray-900 dark:hover:text-gray-50 hidden lg:inline-block'>
									Login
								</a>
							</Link> */}

							<a
								href='/resume_debjit_majumdar_r32k21.pdf'
								download
								className='hidden lg:inline-block p-3 bg-gradient-to-br from-purple-500 to-purple-700 hover:to-purple-600 hover:bg-purple-200 text-purple-100 hover:text-white rounded shadow hover:shadow-xl transition duration-500'>
								Resume
							</a>
						</div>
					</div>
				</section>
			</nav>
		</>
	);
}

export default Header;
