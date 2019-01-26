import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

const Image = () => (
	<StaticQuery
		query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "avatar.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 125, maxHeight: 125, quality: 85) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
		render={data => (
			<Img
				fluid={data.placeholderImage.childImageSharp.fluid}
				imgStyle={{
					borderRadius: '50%',
					width: '125px',
					height: '125px',
					backgroundColor: '#fff',
					padding: '4px',
					userSelect: 'none'
				}}
				style={{height: '140px'}}
				alt="Antoni Kepinski"
			/>
		)}
	/>
);
export default Image;
