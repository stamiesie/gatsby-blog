import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
      <Layout pageTitle="HomePage">
      <p>Hi, I'm Tuna the cat.  I made this blog with Gatsby.</p>
      <StaticImage
      alt="Tuna, a brown tabby house cat.  Always looking for trouble."
      src="../images/tuna_1.jpg"
      />
      </Layout>
  )
}

export default IndexPage