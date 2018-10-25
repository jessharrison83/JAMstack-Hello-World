import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Helloooooo World!</h1>
    <p>
      My name is Jess and I'm kinda new to this hackathon stuff, but I am super
      excited to get started!
    </p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <p>^^That's Me!^^</p>
    <p>
      I love dogs, Ruby, CSS color aquamarine{' '}
      <span style={{ color: 'aquamarine' }}>(look at that header!)</span>, and
      <span style={{ color: 'darkred' }}> Dr Pepper</span> (Texas roots, y'all!)
    </p>
  </Layout>
)

export default IndexPage
