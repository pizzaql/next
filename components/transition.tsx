import React from 'react';
import {AnimatePresence, motion, useReducedMotion} from 'framer-motion';

interface Props {
	children: React.ReactNode;
	id: string;
}

const Transition = ({children, id}: Props) => {
	const shouldReduceMotion = useReducedMotion();

	const spring = {
		type: 'spring',
		damping: 20,
		stiffness: 100,
		when: 'beforeChildren'
	};

	return (
		<AnimatePresence exitBeforeEnter>
			<div className="page-transition-wrapper">
				<motion.div
					key={id}
					transition={spring}
					initial={shouldReduceMotion ? {opacity: 0} : {y: 100, opacity: 0}}
					animate={shouldReduceMotion ? {opacity: 1} : {y: 0, opacity: 1}}
					id="page-transition-container"
				>
					{children}
				</motion.div>
			</div>
		</AnimatePresence>
	);
};

export default Transition;
