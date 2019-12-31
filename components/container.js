import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import PropTypes from 'prop-types';

import Header from './header';
import Nav from './nav';
import NavLink from './navlink';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 auto 30px;
	padding-left: 3em;
	padding-right: 20px;

	@media (min-width: 320px) and (max-width: 480px) {
		padding-left: 20px;
	}
`;

const Container = props => {
	const config = {
		type: 'spring',
		damping: 100,
		stiffness: 100
	};

	return (
		<Wrapper>
			<Header>
				<motion.h1
					transition={config}
					initial={{y: -100, opacity: 0}}
					animate={{y: 0, opacity: 1}}
					exit={{y: 0, opacity: 0}}
				>
          Antoni Kepinski
				</motion.h1>
			</Header>
			<Nav
				transition={config}
				initial={{x: -100, opacity: 0}}
				animate={{x: 0, opacity: 1}}
				exit={{x: 0, opacity: 0}}
			>
				<NavLink title="Home" href="/"/>
				<NavLink title="Projects" href="/projects"/>
				<NavLink title="Contact" href="/contact"/>
			</Nav>
			{props.children}
		</Wrapper>
	);
};

Container.propTypes = {
	children: PropTypes.node.isRequired
};

export default Container;
