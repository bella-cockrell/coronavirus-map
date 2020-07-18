import React from 'react'

import Container from 'components/Container'

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>
          This map was created using the disease.sh Open Disease Data API
          available
          <a
            href="https://corona.lmao.ninja/v2/countries"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </p>
      </Container>
    </footer>
  )
}

export default Footer
