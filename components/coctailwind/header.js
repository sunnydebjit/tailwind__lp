import Image from 'next/image';
import Link from 'next/link';
function Header() {
	return (
		<>
			<nav className='text-gray-600 '>
				<div className='container mx-auto flex justify-between p-6 lg:px-0 '>
					<div className='space-x-4 flex items-center'>
						{/* <Image
							src='/dm-logo.svg'
							layout='fixed'
							height={50}
							width={50}
							alt='logo image'
							href='#'
							className='cursor-pointer'
						/> */}
						<Link href='/coctailwind/'>
							<a className='text-teal-900 font-bold text-2xl'>
								Tailwind Master
							</a>
						</Link>
						<Link href='/coctailwind/login'>
							<a className='hover:text-gray-900'>About</a>
						</Link>
						<Link href='/coctailwind/userpage'>
							<a className='hover:text-gray-900'>What You'll Learn</a>
						</Link>
						<Link href='/coctailwind/login'>
							<a className='hover:text-gray-900'>Pricing</a>
						</Link>
						<Link href='/coctailwind/userpage'>
							<a className='hover:text-gray-900'>FAQ</a>
						</Link>
					</div>
					{/* Nav Separator */}
					<div className='space-x-4 flex items-center'>
						<Link href='/coctailwind/login'>
							<a className='hover:text-gray-900'>Login</a>
						</Link>
						<Link href='/coctailwind/userpage'>
							<a className='inline-block p-3 bg-purple-300 text-purple-700 rounded shadow'>
								Signup
							</a>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Header;
