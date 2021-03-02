import path from 'path'
import axios from 'axios'
import React, {Component} from 'react'

export default {

  getSiteProps: async () => ({
    title: "ProActivity",
    text: "We provide extraordinary value to companies through a robust team of experienced IT Professionals specialized in the development of enterprise-level software solutions."
  }),
  Document: class CustomHtml extends Component {
      render() {
        const {Html, Head, Body, children, renderMeta} = this.props;
        return (
          <Html>
            <Head>
              <meta charSet="UTF-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
              <title>ProActivity</title>
              <meta name="description" content="We provide extraordinary value to companies through a robust team of experienced IT Professionals specialized in the development of enterprise-level software solutions."/>
              <link rel="preconnect" href="https://fonts.gstatic.com"/>
              <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
              <meta property="og:image" content="http://localhost:3000/icon.png"/>
              <link rel="icon" href="/icon.png"/>
            </Head>
            <Body>
              {children}
            </Body>
          </Html>
        )
      }
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    [
      "react-static-plugin-sass",
      {
        includePaths: ["..."], // always includes `src/`
        cssLoaderOptions: {}, // options for the css-loader, like modules
        // other options for the sass-loader
      }
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
