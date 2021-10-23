import Link from 'next/link';
import Image from 'next/image';

function ProjectComps({
	link,
	cat,
	desc,
	path,
	badge,
	span,
	comingsoon,
	brand,
	clamp,
}) {
	return (
		<>
			<div className={span}>
				<div className='bg-gray-50 dark:bg-transparent  border-2 border-green-700 rounded shadow-xl transform hover:scale-105 transition duration-200'>
					{comingsoon ? (
						<div
							className={` z-10 rounded absolute bottom-0 left-0 px-2 py-1 transform -translate-x-2 translate-y-2 bg-gradient-to-r from-purple-600 to-teal-500 text-white text-xs`}>
							<p>Coming Soon</p>
						</div>
					) : (
						<></>
					)}
					<div
						className={`rounded absolute top-0 right-0 px-2 py-1 transform translate-x-2 -translate-y-2 ${badge} text-white text-xs`}>
						<p>{cat}</p>
					</div>

					<h1 className='text-xl font-bold p-4 uppercase'>{brand}</h1>
					<p
						className={`text-base text-gray-700 dark:text-white p-4 pt-0 ${clamp} `}>
						{desc}
					</p>
					<Link href={link}>
						<a>
							<Image
								src={path}
								layout='responsive'
								width={1920}
								height={1080}
								className=' object-cover '
							/>
						</a>
					</Link>
				</div>
			</div>
		</>
	);
}

export default ProjectComps;
