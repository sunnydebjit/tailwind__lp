function Scrollable({ linkName, src, visibility }) {
	return (
		<>
			<a
				initial={{
					y: '-10vh',
					opacity: 0,
				}}
				animate={{
					y: 0,
					opacity: 1,
				}}
				href={src}
				className={`${
					visibility || ''
				} lg:inline-block hover:text-gray-900 dark:hover:text-gray-50`}>
				{linkName}
			</a>
		</>
	);
}

export default Scrollable;
