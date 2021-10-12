import { motion } from 'framer-motion';

function Circles({ top, right, visible }) {
	return (
		<div className={`${visible || ``}absolute top-${top} right-${right}`}>
			<motion.div className='opacity-50  absolute bg-gradient-to-br from-teal-100 to-teal-200 w-64 h-64 rounded-full'></motion.div>
			<motion.div className='opacity-50  absolute ml-10 mt-10 bg-gradient-to-br from-purple-100 to-purple-200 w-64 h-64 rounded-full'></motion.div>
			<motion.div className='opacity-50  absolute ml-24 bg-gradient-to-br from-red-100 to-red-200 w-64 h-64 rounded-full'></motion.div>
		</div>
	);
}

export default Circles;
