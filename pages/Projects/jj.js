import Back from '../../components/coctailwind/Back';
import Image from 'next/image';
import Link from 'next/link';
function Jj() {
	return (
		<div className=' relative py-10 min-h-screen dark:bg-black'>
			<div className='container px-10 mx-auto '>
				<h1 className='mb-10 text-center text-3xl lg:text-6xl font-black uppercase'>
					Jibhe Jol
				</h1>
				<div className='shadow-xl'>
					<Image
						src='/projects/jj/JJ_Leather_Cover.jpg'
						layout='intrinsic'
						width={1920}
						height={1080}
						alt=''
						className='rounded-lg transform hover:scale-110 transition duration-200'
					/>
				</div>

				<p className='mt-10 mb-10 text-center text-2xl lg:text-4xl font-light '>
					<strong>Jibhe Jol</strong> is a soul food brand that specialises in
					Mughlai and Bengali cuisine at Bangalore. As a partner of the company
					it was my responsibilty to put my creative expertise in giving birth
					to the Brand Identity
				</p>
				<h1 className='mb-10 text-center text-3xl lg:text-5xl font-black uppercase'>
					COMPOSITE ADVERTISEMENT RENDERS
				</h1>
				<div className='md:grid grid-cols-2 gap-10 space-y-10 md:space-y-0'>
					<div className='shadow-xl'>
						<Image
							src='/projects/jj/laptop.jpg'
							layout='intrinsic'
							width={1920}
							height={1080}
							alt=''
							className='rounded-lg transform hover:scale-110 transition duration-200'
						/>
					</div>
					<div className='shadow-xl'>
						<Image
							src='/projects/jj/phone.jpg'
							layout='intrinsic'
							width={1920}
							height={1080}
							alt=''
							className='rounded-lg transform hover:scale-110 transition duration-200'
						/>
					</div>
				</div>
				<div className='mt-10 mb-10 text-center text-2xl lg:text-3xl font-light '>
					<h2 className='mb-10 text-center text-3xl lg:text-5xl font-black uppercase'>
						The Challenge
					</h2>
					<p>
						Establish a fresh enticing identity system which customers could
						relate to.
					</p>
				</div>
				<div className='mt-10 mb-10 text-center text-2xl lg:text-3xl font-light '>
					<h2 className='mb-10 text-center text-3xl lg:text-5xl font-black uppercase'>
						Approach
					</h2>
					<p>
						I researched the Bangalore foodie community and empthasized with
						their need and came up with a joyful logo after several iterations
						encompassing the idea of a smiling kid peeking into the kitchen.
						After that I designed and delevoped the whole branding keeping it in
						focus
					</p>
				</div>
				<h2 className='mb-10 text-center text-3xl lg:text-5xl font-black uppercase'>
					BRAND IDENTITY
				</h2>
				<div className=' mb-10 md:grid grid-cols-2 gap-10 space-y-10 md:space-y-0'>
					<div className='shadow-xl'>
						<Image
							src='/projects/jj/Slide 01.jpg'
							layout='responsive'
							width={1920}
							height={1080}
							alt=''
							className='rounded-lg transform hover:scale-110 transition duration-200'
						/>
					</div>
					<div className='shadow-xl'>
						<Image
							src='/projects/jj/Slide 02.jpg'
							layout='intrinsic'
							width={1920}
							height={1080}
							alt=''
							className='rounded-lg transform hover:scale-110 transition duration-200'
						/>
					</div>
					<div className='shadow-xl'>
						<Image
							src='/projects/jj/Slide 03.jpg'
							layout='intrinsic'
							width={1920}
							height={1080}
							alt=''
							className='rounded-lg transform hover:scale-110 transition duration-200'
						/>
					</div>
					<div className='shadow-xl'>
						<Image
							src='/projects/jj/Slide 04.jpg'
							layout='intrinsic'
							width={1920}
							height={1080}
							alt=''
							className='rounded-lg transform hover:scale-110 transition duration-200'
						/>
					</div>
				</div>
				<h2 className='mb-10 text-center text-3xl lg:text-5xl font-black uppercase'>
					PACKAGING DESIGN
				</h2>
				<div className='mb-10'>
					<div className='md:grid grid-cols-3 gap-10 space-y-10 md:space-y-0'>
						<div className='shadow-xl'>
							<Image
								src='/projects/jj/jj_food_pack_blue.jpg'
								layout='responsive'
								width={1920}
								height={1080}
								alt=''
								className='rounded-lg transform hover:scale-110 transition duration-200'
							/>
						</div>
						<div className='shadow-xl'>
							<Image
								src='/projects/jj/jj_food_pack_green.jpg'
								layout='intrinsic'
								width={1920}
								height={1080}
								alt=''
								className='rounded-lg transform hover:scale-110 transition duration-200'
							/>
						</div>
						<div className='shadow-xl'>
							<Image
								src='/projects/jj/jj_food_pack_red.jpg'
								layout='intrinsic'
								width={1920}
								height={1080}
								alt=''
								className='rounded-lg transform hover:scale-110 transition duration-200'
							/>
						</div>
					</div>
					<div className='mt-10 md:grid grid-cols-2 gap-10 space-y-10 md:space-y-0'>
						<div className='shadow-xl'>
							<Image
								src='/projects/jj/bag_girl.jpg'
								layout='responsive'
								width={1920}
								height={1080}
								alt=''
								className='rounded-lg transform hover:scale-110 transition duration-200'
							/>
						</div>
						<div className='shadow-xl'>
							<Image
								src='/projects/jj/bag.jpg'
								layout='intrinsic'
								width={1920}
								height={1080}
								alt=''
								className='rounded-lg transform hover:scale-110 transition duration-200'
							/>
						</div>
					</div>
				</div>

				<div className='flex items-center justify-center cursor-pointer group'>
					<Link href='/#projects'>
						<p className='mt-10 mb-10 text-xl lg:text-3xl font-light group-hover:text-black/80 dark:group-hover:text-white/80 transition duration-200 '>
							<strong>Go Back</strong>
						</p>
					</Link>
				</div>
			</div>
			<Back />
		</div>
	);
}

export default Jj;
