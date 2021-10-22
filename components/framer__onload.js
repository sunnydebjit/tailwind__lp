import { AnimatePresence, motion } from 'framer-motion';

function Framer__onload({ children }) {
	return (
		<>
			<AnimatePresence>
				<motion.div
					initial='hidden'
					animate='visible'
					variants={{
						hidden: {
							// scale: 0.8,
							opacity: 0,
							x: '100vw',
						},
						visible: {
							// scale: 1,
							opacity: 1,
							x: '0',
							transition: {
								type: 'spring',
								duration: 0.5,
								delay: 0.1,
							},
						},
					}}>
					{children}
				</motion.div>
			</AnimatePresence>
		</>
	);
}

export default Framer__onload;
