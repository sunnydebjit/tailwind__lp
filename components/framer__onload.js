import { motion } from 'framer-motion';

function Framer__onload({ children }) {
	return (
		<>
			<motion.div
				initial='hidden'
				animate='visible'
				variants={{
					hidden: {
						scale: 0.8,
						opacity: 0,
					},
					visible: {
						scale: 1,
						opacity: 1,
						transition: {
							delay: 0.5,
						},
					},
				}}>
				{children}
			</motion.div>
		</>
	);
}

export default Framer__onload;
