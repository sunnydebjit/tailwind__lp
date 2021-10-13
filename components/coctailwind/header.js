import Image from 'next/image';
import Link from 'next/link';
import Darkbutton from '../darkbutton';
import Logo from './logo';
function Header() {
	return (
		<>
			<section className='relative'>
				<nav className='text-gray-600 dark:text-gray-200   '>
					<div className='container mx-auto flex justify-between p-6 lg:px-0 '>
						<div className='space-x-4 flex items-center'>
							<Link href='/'>
								<Logo
									height={30}
									className='text-teal-900 dark:text-teal-50 cursor-pointer transform hover:scale-105 '
								/>
							</Link>
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
							<Link href='/coctailwind/login'>
								<a className='hover:text-gray-900'>Login</a>
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
