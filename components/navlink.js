import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.a`
	color: #fafff7;
    box-sizing: border-box;
    text-decoration: none;
    user-select: none;
    cursor: pointer;
	margin-right: 1em;
	box-shadow: inset 0 -1.5px 0 #fff;
	transition: all .2s ease-in-out;

    &:hover {
        box-shadow: inset 0 -33px 0 0 #fff;
        color: #1b1b1b
    }
`;

const NavLink = ({title, href}) => (
	<Link scroll={false} href={href}>
		{/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
		<Wrapper>//{title}</Wrapper>
	</Link>
);

NavLink.propTypes = {
	title: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired
};

export default NavLink;
