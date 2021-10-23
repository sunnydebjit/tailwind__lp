import Back from '../../components/coctailwind/Back';
import Image from 'next/image';
import Link from 'next/link';
function Tata() {
	return (
		<div className=' relative py-10 min-h-screen dark:bg-black'>
			<div className='container px-10 mx-auto '>
				<h1 className='mb-10 text-center text-3xl lg:text-6xl font-black uppercase'>
					TATA TEA
				</h1>
				<div className='shadow-xl'>
					<Image
						src='/projects/tata/project 2 -fb.jpg'
						layout='intrinsic'
						width={1920}
						height={1080}
						alt=''
						className='rounded-lg transform hover:scale-110 transition duration-200'
					/>
				</div>

				<p className='mt-10 mb-10 text-center text-2xl lg:text-4xl font-light '>
					<strong>Gutenberg</strong>- PR Agency based of Delhi approached me to
					lend expertise for <strong>TATA TEA</strong>'s brand new collaboration
					with Amazon Alexa on the "Eight O'Clock" project for their social
					media promotion
				</p>
				<h1 className='mb-10 text-center text-3xl lg:text-5xl font-black uppercase'>
					SOCIAL MEDIA deliverables
				</h1>
				<div className='md:grid grid-cols-1 gap-10 space-y-10 md:space-y-0'>
					<div className='shadow-xl'>
						<Image
							src='/projects/tata/project 2 -fb_gif_hq.gif'
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
						This was by far the fastest project I had to deliver within 2 hours
						of the intimation.
					</p>
				</div>
				<div className='mt-10 mb-10 text-center text-2xl lg:text-3xl font-light '>
					<h2 className='mb-10 text-center text-3xl lg:text-5xl font-black uppercase'>
						Approach
					</h2>
					<p>
						The project instructions were straightforward. I had to make an
						animated gif which involved the fusion of a tea cup and{' '}
						<strong>AMAZON ALEXA</strong>. I had to be very thoughtful of the
						implementation. I creatively fused Alexa with the cup and made the
						ring shine with the color of the tea siving it a nice accent
					</p>
				</div>

				<div className='mt-10 mb-10 text-center text-2xl lg:text-3xl font-light '>
					<h2 className='mb-10 text-center text-3xl lg:text-5xl font-black uppercase'>
						THE HARD PART
					</h2>
					<p>
						The hardest part was undoubtedly the timeframe. There were no room
						for errors and revisions.
					</p>
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

export default Tata;
