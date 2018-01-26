import React from "react";

export default ({ data }) =>
  <div>
    {/* <h1>About { data.site.siteMetadata.title }</h1> */}
    <h1>About me</h1>
    {/* <p> */}
      {/* Something about me. */}
        <center>
            <div id="github-card"
                data-username="gnaneshkunal">
            </div>
        </center>
    {/* </p> */}
  </div>;

export const query = graphql`
    query AboutQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;