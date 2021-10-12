function Footer() {
	return (
		<footer className=' '>
			<div className='container mx-auto py-10'>
				<div className='flex justify-between'>
					<div>
						<h1 className='text-5xl font-bold w-3/4'>
							Get updates on this course
						</h1>
						<form action='#' id='signup' className='flex'>
							<label htmlFor='signup'>
								<input type='text' placeholder='Heya' className='flex-1' />
							</label>
							<button className='rounded-sm border'>Subscribe</button>
						</form>
					</div>
					<div className='flex space-x-5 text-right text-xl'>
						<ul>
							<li>About</li>
							<li>Blog</li>
							<li>Careers</li>
						</ul>
						<ul>
							<li>Pricing</li>
							<li>Documentation</li>
							<li>Guides</li>
						</ul>
						<ul>
							<li>Terms</li>
							<li>Privacy</li>
							<li>Rules</li>
						</ul>
					</div>
				</div>
				{/* <hr className='bg-teal-800' /> */}
				<div className='flex justify-between py-5'>
					<h1>Copyright © 2021 Debjit Majumdar</h1>
					<ul className='flex space-x-4'>
						<li>Twitter</li>
						<li>Discord</li>
						<li>Github</li>
					</ul>
				</div>
			</div>
			<div className='bg-black text-gray-100 p-5'>
				<h3 className='font-base text-center'>
					A <span className='font-bold'>Better Dev</span> course | View this
					site's Fathom analytics
				</h3>
			</div>
		</footer>
	);
}

export default Footer;
