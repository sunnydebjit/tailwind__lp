import Back from '../../components/coctailwind/Back';
import Image from 'next/image';
import Link from 'next/link';
function Bonito() {
	return (
		<div className=' relative py-10 min-h-screen dark:bg-black'>
			<div className='container px-10 mx-auto '>
				<h1 className='mb-10 text-center text-3xl lg:text-6xl font-black uppercase'>
					Bonito Bonita
				</h1>
				<div className='shadow-xl'>
					<Image
						src='/projects/bonito/stack-on-wood.png'
						layout='intrinsic'
						width={1920}
						height={1080}
						alt=''
						className='rounded-lg transform hover:scale-110 transition duration-200'
					/>
				</div>

				<p className='mt-10 mb-10 text-center text-2xl lg:text-4xl font-light '>
					<strong>Gianna Bianchi</strong> wanted to set up a premium brand for a
					wide range of uni-sex cosmetics in Passirano, Italy. Her idea was to
					deliver a bold and elegant product and be recognised in the global
					market.
				</p>
				<h1 className='mb-10 text-center text-3xl lg:text-5xl font-black uppercase'>
					COMPOSITE HERO RENDERS
				</h1>
				<div className='md:grid grid-cols-2 gap-10 space-y-10 md:space-y-0'>
					<div className='shadow-xl'>
						<Image
							src='/projects/bonito/composite-front.png'
							layout='intrinsic'
							width={1920}
							height={1080}
							alt=''
							className='rounded-lg transform hover:scale-110 transition duration-200'
						/>
					</div>
					<div className='shadow-xl'>
						<Image
							src='/projects/bonito/composite-back.png'
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
					<p>Design an elegant brand identity system for Bonito Bonita</p>
				</div>
				<div className='mt-10 mb-10 text-center text-2xl lg:text-3xl font-light '>
					<h2 className='mb-10 text-center text-3xl lg:text-5xl font-black uppercase'>
						Approach
					</h2>
					<p>
						After intensive research through social media and having multiple
						conversations with the would be target audience, I came up with a
						bold and elegant design system that the customers loved as a premium
						brand
					</p>
				</div>
				<h2 className='mb-10 text-center text-3xl lg:text-5xl font-black uppercase'>
					BRAND IDENTITY
				</h2>
				<div className=' mb-10 md:grid grid-cols-2 gap-10 space-y-10 md:space-y-0'>
					<div className='shadow-xl'>
						<Image
							src='/projects/bonito/T-Shirt MockUp_Front.jpg'
							layout='responsive'
							width={1920}
							height={1080}
							alt=''
							className='rounded-lg transform hover:scale-110 transition duration-200'
						/>
					</div>
					<div className='shadow-xl'>
						<Image
							src='/projects/bonito/pouch.jpg'
							layout='intrinsic'
							width={1920}
							height={1080}
							alt=''
							className='rounded-lg transform hover:scale-110 transition duration-200'
						/>
					</div>
					<div className='shadow-xl'>
						<Image
							src='/projects/bonito/array.png'
							layout='intrinsic'
							width={1920}
							height={1080}
							alt=''
							className='rounded-lg transform hover:scale-110 transition duration-200'
						/>
					</div>
					<div className='shadow-xl'>
						<Image
							src='/projects/bonito/pyramid.png'
							layout='intrinsic'
							width={1920}
							height={1080}
							alt=''
							className='rounded-lg transform hover:scale-110 transition duration-200'
						/>
					</div>
				</div>
				<h2 className='mb-10 text-center text-3xl lg:text-5xl font-black uppercase'>
					WEBSITE DESIGN
				</h2>
				<div className='mb-10'>
					<div className='md:grid grid-cols-3 gap-10 space-y-10 md:space-y-0'>
						<div className='shadow-xl'>
							<Image
								src='/projects/bonito/Artboard 2.png'
								layout='responsive'
								width={1920}
								height={1080}
								alt=''
								className='rounded-lg transform hover:scale-110 transition duration-200'
							/>
						</div>
						<div className='shadow-xl'>
							<Image
								src='/projects/bonito/Artboard 3.png'
								layout='intrinsic'
								width={1920}
								height={1080}
								alt=''
								className='rounded-lg transform hover:scale-110 transition duration-200'
							/>
						</div>
						<div className='shadow-xl'>
							<Image
								src='/projects/bonito/Artboard 5.png'
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
								src='/projects/bonito/web_mockup_01.png'
								layout='responsive'
								width={1920}
								height={1080}
								alt=''
								className='rounded-lg transform hover:scale-110 transition duration-200'
							/>
						</div>
						<div className='shadow-xl'>
							<Image
								src='/projects/bonito/web_mockup_02.png'
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

export default Bonito;
