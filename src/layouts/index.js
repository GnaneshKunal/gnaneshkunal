import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";
require('prismjs/themes/prism-solarizedlight.css');
import { rhythm } from "../utils/typography";
import Helmet from 'react-helmet'

const linkStyle = css({ float: `right` });

export default ({ children, data }) =>
    <div>
        <Helmet
            title={data.site.siteMetadata.title}
            meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
            ]}
        />
        <g.Div
            margin={`0 auto`}
            maxWidth={700}
            padding={rhythm(2)}
            paddingTop={rhythm(1.5)}
        >
            <Link to={`/`}>
            <g.H3
                marginBottom={rhythm(2)}
                display={`inline-block`}
                fontStyle={`normal`}
            >
                {data.site.siteMetadata.title}
            </g.H3>
            </Link>
            <Link className={linkStyle} to={`/about/`}>
            About
            </Link>
            {children()}
        </g.Div>
    </div>;

export const query = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`;