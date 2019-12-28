import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.a`
	color: #fafff7;
    box-sizing: border-box;
    text-decoration: underline;
    user-select: none;
    cursor: pointer;
	margin-right: 1em;

    &:hover {
        text-decoration: none;
        background: #fdfdfd;
        color: #1b1b1b
    }
`;

const NavLink = ({title, href}) => (
	<Link href={href}>
		{/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
		<Wrapper>//{title}</Wrapper>
	</Link>
);

NavLink.propTypes = {
	title: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired
};

export default NavLink;
