import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
      <Layout pageTitle="HomePage">
      <p>Hi, I'm Tuna the cat.  I made this is a simple blog made with Gatsby.</p>
      <StaticImage
      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
      src="../images/tuna_1.jpg"
      />
      </Layout>
  )
}

export default IndexPage