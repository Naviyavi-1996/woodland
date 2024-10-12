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
        <Navbar.Brand href="/" className='ms-5'><img src="https://static.vecteezy.com/system/resources/previews/020/975/578/non_2x/woodland-logo-woodland-icon-transparent-free-png.png" alt="" style={{height:'100px',width:'100px'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <NavDropdown style={{color:'success', fontSize:'large',fontWeight:'bold'}}title="Men" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"><b>Woods</b></NavDropdown.Item>
              <NavDropdown.Item href="#action3">Footwears </NavDropdown.Item>
              <NavDropdown.Item href="#action3">Apparels</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Accessories</NavDropdown.Item>
              <NavDropdown.Item href="#action3"><b>Woodsports</b></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3"><b>Street Wear</b></NavDropdown.Item>
              <NavDropdown.Item href="#action3">Footwears </NavDropdown.Item>
              <NavDropdown.Item href="#action3">Apparels</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Accessories</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3"><b>Woodsports</b></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Boots </NavDropdown.Item>
              <NavDropdown.Item href="#action3">Sneaker/sports</NavDropdown.Item>
              <NavDropdown.Item href="#action3"><b>Casuals</b></NavDropdown.Item>
              <NavDropdown.Item href="#action3">Lace up </NavDropdown.Item>
              <NavDropdown.Item href="#action3">Slip on</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Canvas</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown style={{color:'success', fontSize:'large',fontWeight:'bold'}}title="Women" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"><b>Woods</b></NavDropdown.Item>
              <NavDropdown.Item href="#action3">Footwears </NavDropdown.Item>
              <NavDropdown.Item href="#action3">Apparels</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Accessories</NavDropdown.Item>
              <NavDropdown.Item href="#action3"><b>Woodsports</b></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3"><b>Street Wear</b></NavDropdown.Item>
              <NavDropdown.Item href="#action3">Footwears </NavDropdown.Item>
              <NavDropdown.Item href="#action3">Apparels</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Accessories</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3"><b>Woodsports</b></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Boots </NavDropdown.Item>
              <NavDropdown.Item href="#action3">Sneaker/sports</NavDropdown.Item>
              <NavDropdown.Item href="#action3"><b>Casuals</b></NavDropdown.Item>
              <NavDropdown.Item href="#action3">Lace up </NavDropdown.Item>
              <NavDropdown.Item href="#action3">Slip on</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Canvas</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown style={{color:'green',fontSize:'large',fontWeight:'bold'}} title="Brands" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Woods</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Woodsport
              </NavDropdown.Item>
             
              <NavDropdown.Item href="#action5">
                A Skating Monk
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style={{color:'green',fontSize:'large',fontWeight:'bold'}}href="/about">About Us</Nav.Link>
            <Nav.Link style={{color:'green',fontSize:'large',fontWeight:'bold'}}href="/Labs">Labs</Nav.Link>
          
           
            
            {/*  <Nav.Link href="#" disabled>
              Link
            </Nav.Link>  */}
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