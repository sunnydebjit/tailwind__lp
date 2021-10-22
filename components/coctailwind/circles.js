function Circles({ position, margin, translateX, translateY }) {
	const darkFirst = `dark:bg-gradient-to-br dark:from-teal-500 dark:to-orange-900 dark:opacity-100 dark:shadow-2xl`;
	const darkSecond = `dark:bg-gradient-to-br dark:from-red-500 dark:to-purple-900 dark:opacity-100 dark:shadow-2xl`;
	const darkThird = `dark:bg-gradient-to-br dark:from-teal-500 dark:to-teal-900 dark:opacity-100 dark:shadow-2xl`;
	return (
		<div
			className={`absolute transform ${position} ${margin} ${translateX} ${translateY} scale-75 md:scale-90 lg:scale-100 filter blur-3xl`}>
			<div
				id='first'
				className={` ${darkFirst} opacity-100  absolute bg-gradient-to-br from-teal-100 to-teal-200 h-64 w-64 rounded-full filter mix-blend-lighten animate-blob `}></div>
			<div
				id='second'
				className={`${darkSecond} opacity-100  absolute ml-10 mt-10 bg-gradient-to-br from-purple-100 to-purple-200 h-64 w-64 rounded-full filter  mix-blend-lighten animate-blob animation-delay-2000`}></div>
			<div
				id='third'
				className={`${darkThird} opacity-100  absolute ml-24 bg-gradient-to-br from-red-100 to-red-200 h-64 w-64 rounded-full filter  mix-blend-lighten animate-blob animation-delay-4000`}></div>
		</div>
	);
}

export default Circles;
