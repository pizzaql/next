import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 30rem;

    @media (orientation: portrait) {
        width: 20rem;
    }
`;

const Podcast = () => (
	<>
		<br/>
		<Wrapper>
			<audio controls data-theme="night" data-src="https://changelog.com/jsparty/85/embed" src="https://cdn.changelog.com/uploads/jsparty/85/js-party-85.mp3" preload="none" className="changelog-episode"/>
		</Wrapper>
	</>
);

export default Podcast;
