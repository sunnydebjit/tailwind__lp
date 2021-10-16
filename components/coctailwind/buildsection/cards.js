function Cards({ icon, name, index, borderColor, bgColor }) {
	const iconClass = `p-5 rounded  ${bgColor}`;

	return (
		<div
			key={index}
			className={` flex items-center rounded shadow-lg border-r-8 ${borderColor}`}>
			<div className={iconClass}>{icon}</div>
			<div className='bg-gray-300 dark:bg-gray-900 p-5 flex-grow font-bold '>
				{name}
			</div>
		</div>
	);
}

export default Cards;
