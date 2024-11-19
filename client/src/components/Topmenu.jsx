import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Topmenu = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" style={{ color: 'white', fontWeight:"800", fontSize:"25px",  letterSpacing: '2px',fontStyle:"italic"}}>ElectronixZone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home"style={{ color: 'blue',fontSize:'20px' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="shop" style={{ color: 'blue',fontSize:'20px' }}>Shop</Nav.Link>
            <Nav.Link as={Link} to="product" style={{ color: 'blue',fontSize:'20px' }}>Product</Nav.Link>
            <Nav.Link as={Link} to="cart" style={{ color: 'blue',fontSize:'20px' }}>Cart</Nav.Link>
            <Nav.Link as={Link} to="contact" style={{ color: 'blue', fontSize:'20px'}}>Blogs</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Mens</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Womens
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                All
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    </>
  )
}

export default Topmenu