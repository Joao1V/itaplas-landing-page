import React from 'react'
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";

const Header = () => {

  return (
      <header>
        <Navbar expand="lg" variant="dark" bg="dark" >
          <Container>
            <Navbar.Brand href="#">
              <div className='d-flex align-items-center gap-2'>
                <img width='50px'
                     src="https://itaplas.com.br/wp-content/uploads/2022/04/Logo-Itaplas-e1649805328914.png"
                     className="custom-logo" alt="Itaplas"/>
                <span>Itaplas</span>
              </div>
            </Navbar.Brand>
            <Nav style={{ gap:16}}>
              <Nav.Link>Sobre nós</Nav.Link>
              <Nav.Link>Nossos serviços</Nav.Link>
              <Nav.Link>Parceiros Itaplas</Nav.Link>
              <Nav.Link>Contato</Nav.Link>
              <Nav.Link>Política de Privacidade</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
  )
}

export default Header