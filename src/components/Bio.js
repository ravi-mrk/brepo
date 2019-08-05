import React from 'react'
import styled from 'styled-components'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import { SocialIcon } from 'react-social-icons'

import profilePic from './profile-pic.png'
import { rhythm } from '../utils/typography'

const IconListContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  a {
    margin-right: 10px;
    box-shadow: none;
  }
`

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: rhythm(1),
        }}
      >
        <div style={{ display: 'flex', marginBottom: rhythm(1) }}>
          <img
            src={profilePic}
            alt={`Ravi Kiran Mahankali`}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              width: rhythm(2),
              height: rhythm(2),
            }}
          />
          <p style={{ marginBottom: 0 }}>
            Written by <strong>Ravi Kiran Mahankali</strong> who lives and works in
            Cambridge, building useful things working in the DevOps roles.{' '}
          </p>
        </div>
        <IconListContainer>
          <SocialIcon url="http://github.com/ravi-mrk" />
          <SocialIcon url="http://linkedin.com/in/ravi-rkm" />
        </IconListContainer>
      </div>
    )
  }
}

export default Bio
