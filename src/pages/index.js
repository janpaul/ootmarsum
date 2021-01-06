import React from 'react'
import styled from 'styled-components'

import { Title, SEO, Layout } from '../components'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <Title>Vakantiehuis Ootmarsum</Title>
    </Wrapper>
  </Layout>
)

export default IndexPage
