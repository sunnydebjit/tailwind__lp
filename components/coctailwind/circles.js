import { motion } from 'framer-motion';

function Circles({ position, margin, translateX, translateY }) {
	const darkFirst = `dark:bg-gradient-to-br dark:from-teal-500 dark:to-orange-900 dark:opacity-80 dark:shadow-2xl`;
	const darkSecond = `dark:bg-gradient-to-br dark:from-red-500 dark:to-purple-900 dark:opacity-80 dark:shadow-2xl`;
	const darkThird = `dark:bg-gradient-to-br dark:from-teal-500 dark:to-teal-900 dark:opacity-80 dark:shadow-2xl`;
	return (
		<div
			className={`absolute transform ${position} ${margin} ${translateX} ${translateY} scale-75 md:scale-90 lg:scale-100`}>
			<motion.div
				id='first'
				className={` ${darkFirst} opacity-50  absolute bg-gradient-to-br from-teal-100 to-teal-200 h-64 w-64 rounded-full`}></motion.div>
			<motion.div
				id='second'
				className={`${darkSecond} opacity-50  absolute ml-10 mt-10 bg-gradient-to-br from-purple-100 to-purple-200 h-64 w-64 rounded-full`}></motion.div>
			<motion.div
				id='third'
				className={`${darkThird} opacity-50  absolute ml-24 bg-gradient-to-br from-red-100 to-red-200 h-64 w-64 rounded-full`}></motion.div>
		</div>
	);
}

export default Circles;

/*
<div
			className={`absolute transform top-${top} right-${right} ${margin} ${translateX} ${translateY}`}>
			<motion.div
				id='first'
				className={` ${darkFirst} opacity-50  absolute bg-gradient-to-br from-teal-100 to-teal-200 h-32 w-32  md:w-64 md:h-64 lg:h-64 lg:w-64 rounded-full`}></motion.div>
			<motion.div
				id='second'
				className={`${darkSecond} opacity-50  absolute ml-10 mt-10 bg-gradient-to-br from-purple-100 to-purple-200 h-32 w-32  md:w-64 md:h-64 lg:h-64 lg:w-64 rounded-full`}></motion.div>
			<motion.div
				id='third'
				className={`${darkThird} opacity-50  absolute ml-24 bg-gradient-to-br from-red-100 to-red-200 h-32 w-32  md:w-64 md:h-64 lg:h-64 lg:w-64 rounded-full`}></motion.div>
		</div>



*/
