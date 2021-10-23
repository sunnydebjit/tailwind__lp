import Back from '../../components/coctailwind/Back';
import Image from 'next/image';
import Link from 'next/link';
function Sos() {
	return (
		<div className=' relative py-10 min-h-screen dark:bg-black'>
			<div className='container px-10 mx-auto '>
				<h1 className='mb-10 text-center text-3xl lg:text-6xl font-black uppercase'>
					SOS CHILDREN VILLAGE
				</h1>
				<div className='shadow-xl'>
					<Image
						src='/projects/sos/sos_kinship_base.png'
						layout='intrinsic'
						width={1920}
						height={1080}
						alt=''
						className='rounded-lg transform hover:scale-110 transition duration-200'
					/>
				</div>

				<p className='mt-10 mb-10 text-center text-2xl lg:text-4xl font-light '>
					<strong>SOS Children's Village</strong>, a renowned NGO, approached me
					to design a cover image which invloved image manipulation for their
					"Kinship Program". This cover was responsible for lead generation on
					their social media platform
				</p>
				<h1 className='mb-10 text-center text-3xl lg:text-5xl font-black uppercase'>
					SOCIAL MEDIA deliverables
				</h1>
				<div className='md:grid grid-cols-2 gap-10 space-y-10 md:space-y-0'>
					<div className='shadow-xl'>
						<Image
							src='/projects/sos/sos_kinship_base_04.png'
							layout='intrinsic'
							width={1920}
							height={1080}
							alt=''
							className='rounded-lg transform hover:scale-110 transition duration-200'
						/>
					</div>
					<div className='shadow-xl'>
						<Image
							src='/projects/sos/sos_kinship_base_05.png'
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
						Need to highlight the number of Children the NGO has helped foster a
						better future, by showing a contrast to the number of employees
						required in the respective industries - Healthcare & Automobile.
					</p>
				</div>
				<div className='mt-10 mb-10 text-center text-2xl lg:text-3xl font-light '>
					<h2 className='mb-10 text-center text-3xl lg:text-5xl font-black uppercase'>
						Approach
					</h2>
					<p>
						I knew I had to ideate a strong thoughtful cover image for the
						potential supporters of the brand.The primary idea behind creating
						the image has been how one simple creative that can speak about the
						mentioned requirements. I have portrayed the essence of the donation
						with the help of a paper boat which is crafted in the form of
						origami
					</p>
				</div>
				<h2 className='mb-10 text-center text-3xl lg:text-5xl font-black uppercase'>
					IMAGE MANIPULATION
				</h2>
				<div className=' mb-10 md:grid grid-cols-1 gap-10 space-y-10 md:space-y-0'>
					<div className='shadow-xl'>
						<Image
							src='/projects/sos/sos_kinship_photos_for_manipulation.png'
							layout='responsive'
							width={1920}
							height={1080}
							alt=''
							className='rounded-lg transform hover:scale-110 transition duration-200'
						/>
					</div>
				</div>
				<div className='mt-10 mb-10 text-center text-2xl lg:text-3xl font-light '>
					<h2 className='mb-10 text-center text-3xl lg:text-5xl font-black uppercase'>
						THE HARD PART
					</h2>
					<p>
						The hardest part behind this successful maniplation was converting
						two still images of Indian currency into a paper boat and matching
						all the colors and depth through handpainting highlights and shadows
						to put the other elements in place.
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

export default Sos;
