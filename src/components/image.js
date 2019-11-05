import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

const Image = () => (
	<StaticQuery
		query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "avatar.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 180, maxHeight: 180, quality: 85) {
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
					width: '180px',
					height: '180px',
					backgroundColor: '#fff',
					padding: '4px',
					userSelect: 'none',
					WebkitUserDrag: 'none'
				}}
				style={{height: '180px'}}
				alt="Antoni Kepinski"
				draggable={false}
			/>
		)}
	/>
);
export default Image;
