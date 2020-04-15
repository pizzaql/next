import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface Props {
	title: string;
	href: string;
}

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

const NavLink = ({title, href}: Props): JSX.Element => (
	<Link scroll={false} href={href}>
		<Wrapper>//{title}</Wrapper>
	</Link>
);

export default NavLink;
