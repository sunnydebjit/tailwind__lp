function Scrollable({ linkName, src, visibility }) {
	return (
		<>
			<a
				href={src}
				className={`${
					visibility || ''
				} lg:inline-block hover:text-gray-900 dark:hover:text-gray-900 dark:hover:font-bold`}>
				{linkName}
			</a>
		</>
	);
}

export default Scrollable;
