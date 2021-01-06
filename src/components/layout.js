import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import Navigation from './navigation'

const Layout = ({ children }) => {
  return (
    <Container>
      <Navigation />
      <main>{children}</main>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
