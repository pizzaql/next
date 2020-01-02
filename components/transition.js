import React from 'react';
import {AnimatePresence, motion, useReducedMotion} from 'framer-motion';
import PropTypes from 'prop-types';

const Transition = props => {
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
					key={props.id}
					transition={spring}
					initial={shouldReduceMotion ? {opacity: 0} : {x: 300, opacity: 0}}
					animate={shouldReduceMotion ? {opacity: 1} : {x: 0, opacity: 1}}
					exit={shouldReduceMotion ? {opacity: 0} : {x: -300, opacity: 0}}
					id="page-transition-container"
				>
					{props.children}
				</motion.div>
			</div>
		</AnimatePresence>
	);
};

Transition.propTypes = {
	children: PropTypes.node.isRequired,
	id: PropTypes.string.isRequired
};

export default Transition;
