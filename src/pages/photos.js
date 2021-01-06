import React from 'react'
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'
import { SEO, Layout } from '../components'

import p1 from '../images/foto1.jpg'
import p3 from '../images/foto3.jpg'
import p4 from '../images/foto4.jpg'

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="Foto's" />
      <h1>Foto's</h1>
      <Carousel interval={3000}>
        <Carousel.Item>
          <Image src={p1} fluid rounded />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={p3} fluid rounded />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={p4} fluid rounded />
        </Carousel.Item>
      </Carousel>
    </Layout>
  )
}

export default AboutPage
