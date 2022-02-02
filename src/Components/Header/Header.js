import React from 'react';
// eslint-disable-next-line no-unused-vars
import Style from "./Style.css"
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
     return (
          <div>
               <Navbar bg="success" expand="lg">
                    <Container fluid>
                         <Navbar.Brand href="#">শব্দ</Navbar.Brand>
                         <Navbar.Toggle aria-controls="navbarScroll" />
                         <Navbar.Collapse id="navbarScroll">
                              <Nav
                                   className="me-auto my-2 my-lg-0"
                                   style={{ maxHeight: '100px' }}
                                   navbarScroll
                              >
                                   <Nav.Link href="#action1">হোমপেইজ</Nav.Link>
                                   <Nav.Link href="#action2">ব্লগ</Nav.Link>
                              </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div>
     );
};

export default Header;