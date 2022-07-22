import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const CustomNavbar = () => {
  return <Navbar>
    <Navbar.Brand>Pinellas Premium, LLC</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to='/'><Nav.Link>Home</Nav.Link></LinkContainer>
            <LinkContainer to='/about'><Nav.Link>About</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
  </Navbar>
}

export default CustomNavbar