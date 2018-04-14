import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";
require('prismjs/themes/prism-okaidia.css');
import { rhythm } from "../utils/typography";
import Helmet from 'react-helmet'

const linkStyle = css({ float: `right`, color: 'black', paddingLeft: '20px', textDecoration: 'none' });

export default ({ children, data }) =>
    <div>
        <Helmet
            title={data.site.siteMetadata.title}
            meta={[
                { name: 'description', content: "Gnanesh Kunal's personal website and blog." },
                { name: 'keywords', content: 'blog programming student resume technology' },
                { name: 'author', content: 'Gnanesh Kunal' }
            ]}
            link={[
                { rel: 'stylesheet', href: 'http://github-profile.com/dist/gh-profile-card.min.css'}
            ]}
            script={[
                { type: 'text/javascript', src: "http://github-profile.com/dist/gh-profile-card.min.js"}
            ]}
        />
        <g.Div
            margin={`0 auto`}
            maxWidth={800}
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
    <Link className={linkStyle} to={`/about/`}>About</Link>
    <Link className={linkStyle} to={`/resume`}>Resume</Link>
    <Link className={linkStyle} to={`/projects/`}>Projects</Link>
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
