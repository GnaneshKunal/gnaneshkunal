---
title: Blog is now powered by Hexo
date: "2018-04-15"
---

I've been using [gatsbyjs](https://www.gatsbyjs.org) and faced a lot of issues on user defined components. 
<!--more -->
Adding asciinema never worked. It took me days to cleanly render my Terminal component.
Most of the pluggins were still under development. Rendering a pdf was really a nightmare which at last was successful but not in a clear way. The [gatsby pdf](https://www.gatsbyjs.org/packages/gatsby-transformer-pdf/) has never been started. The themes were lacking. The [RSS plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-feed/) didn't work at all. The problems with definition files in [typescript mode](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/) was huge. The webpack bundle size hell was real even when I've tried plugging uglify modules. 

Not to say I really liked [React Helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/) which is just like native [react Helmet](https://github.com/nfl/react-helmet). The styled components, typography, KaTex, GraphQL and mainly React were fabolous.

The site is now powered by [Hexo](https://www.hexo.io), another static site generator. Hexo does provide cool plugins and every plugin worked. But not [hexo-pdf](https://github.com/superalsrk/hexo-pdf/). I'm really on to it now. The coolest thing I've found was the [asciinema plugin](https://github.com/mythsman/hexo-filter-asciinema/). And also, not to mention, hexo uses PHP in the background.
