import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const MyNavBar = () => {
  return (
    <>
      <Navbar variant="dark" className=' navbar'>
        <Container>
          <Navbar.Brand href="#home">
            <img 
              alt=""
              src="https://www.ilmeteo.it/logo-ilmeteo-301.png"
              width="60"
              height="60"
              className="d-inline-block align-top "
            />{' '}
          </Navbar.Brand>
          <h2 className="text-light"
          style={{fontSize: '60px'}}
          >Il Meteo</h2>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNavBar
