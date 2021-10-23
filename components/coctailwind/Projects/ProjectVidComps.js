function ProjectVidComps({ link, cat, desc }) {
	return (
		<>
			<div className='relative bg-gray-50 dark:bg-transparent md:w-1/2 border-2 border-green-700 rounded shadow-xl transform hover:scale-105 transition duration-200'>
				<div className='rounded absolute top-0 right-0 px-2 py-1 transform translate-x-2 -translate-y-2 bg-red-600 text-white text-xs'>
					<p>{cat}</p>
				</div>
				<p className='text-base text-gray-700 dark:text-white p-4'>{desc}</p>
				<iframe
					className='w-full rounded-b'
					height='315'
					src={link}
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen></iframe>
			</div>
		</>
	);
}

export default ProjectVidComps;
