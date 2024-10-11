import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
/* import { Container } from 'react-bootstrap' */
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
/* import Form from 'react-bootstrap/Form'; */
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Header() {
  return (

<>

            <div className='row w-100 d-flex justify-content-center align-items-center'style={{backgroundColor:'darkgreen'}} >
                <div className='col-md-1'></div>
        <div className='col-md-10 '>
                 <ul style={{color:'white',float:'right',listStyle:'none',fontSize:'large'}} className='d-flex justify-content-center align-items-center justify-content-between ms-auto'>
                    <li><FontAwesomeIcon icon={faCartShopping}/>Cart</li>
                    <li className='ms-2 me-2'>|</li>
                    <li>Find Store</li>
                    <li className='ms-2 me-2'>|</li>
                    <li>Sign in</li>
                 </ul>
        </div>
             <div className='col-md-1'></div>
            </div>

        <Navbar expand="lg" className="bg-body-light"style={{marginTop:'-25px'}}>
      <Container fluid>
        <Navbar.Brand href="#" className='ms-5'><img src="https://static.vecteezy.com/system/resources/previews/020/975/578/non_2x/woodland-logo-woodland-icon-transparent-free-png.png" alt="" style={{height:'100px',width:'100px'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link style={{color:'green',fontSize:'large',fontWeight:'bold'}}href="#action1">Men</Nav.Link>
            <Nav.Link style={{color:'green',fontSize:'large',fontWeight:'bold'}}href="#action2">Women</Nav.Link>
            <Nav.Link style={{color:'green',fontSize:'large',fontWeight:'bold'}}href="#action3">Brands</Nav.Link>
            <Nav.Link style={{color:'green',fontSize:'large',fontWeight:'bold'}}href="#action4">About Us</Nav.Link>
            <Nav.Link style={{color:'green',fontSize:'large',fontWeight:'bold'}}href="#action1">Labs</Nav.Link>
         {/*    <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <button className='border b-5 rounded border-success p-2 me-5 ' style={{width:'200px'}}><FontAwesomeIcon icon={faMagnifyingGlass} /><span style={{color:'green'}}>Search</span></button>
{/*          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          {/*  <Button className="rounded me-5"variant="outline-success"style={{width:'200px'}}><FontAwesomeIcon icon={faMagnifyingGlass} />Search</Button> */}
        
          </Navbar.Collapse>
      </Container>
    </Navbar>
        
</>

  )
}

export default Header