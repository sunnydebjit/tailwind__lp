function Cards({ icon, category, name, index, borderColor, bgColor }) {
	const iconClass = `p-5   rounded  ${bgColor}`;
	const choice = (
		<div className='absolute h-6 w-6 mt-3 mr-3 top-0 right-0 animate-bounce'>
			{category}
		</div>
	);

	return (
		<div
			key={index}
			className={` relative flex items-center rounded shadow-lg border-r-8 ${borderColor}`}>
			{category ? choice : null}
			<div className={iconClass}>{icon}</div>
			<div className='bg-gray-50 dark:bg-black p-5 flex-grow font-bold '>
				{name}
			</div>
		</div>
	);
}

export default Cards;
