import Image from 'next/image';
import Link from 'next/link';
function Header() {
	return (
		<>
			<nav className='bg-blue-900'>
				<div className='container mx-auto bg-teal-500 flex justify-between p-6 lg:px-0'>
					<ul>
						{/* <Image
							src='/dm-logo.svg'
							layout='fixed'
							height={50}
							width={50}
							alt='logo image'
							href='#'
							className='cursor-pointer'
						/> */}
						<Link href='/coctailwind/login'>
							<a>Tailwind</a>
						</Link>
						<Link href='/coctailwind/login'>
							<a>About Messi</a>
						</Link>
						<Link href='/coctailwind/userpage'>
							<a>What You'll Learn</a>
						</Link>
						<Link href='/coctailwind/login'>
							<a>Pricing</a>
						</Link>
						<Link href='/coctailwind/userpage'>
							<a>FAQ</a>
						</Link>
					</ul>
					{/*  */}
					<ul>
						<Link href='/coctailwind/login'>
							<a>Login</a>
						</Link>
						<Link href='/coctailwind/userpage'>
							<a>Signup</a>
						</Link>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Header;
