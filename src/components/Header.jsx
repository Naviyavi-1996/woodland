import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
/* import { Container } from 'react-bootstrap' */
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
/* import Form from 'react-bootstrap/Form'; */
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';

function Header() {
  const [searchitem,IssetSearchitem]=useState(false)
  const[cart,issetCart]=useState(false)
  const[log,setislog]=useState(false)
  function login()
  {
    setislog(true)
  }
  function handlecloselog()
  {
    setislog(false)
  }
  function cartshow()
  {
    issetCart(true)
  }
  function handleClosecart()
  {
    issetCart(false)
  }
 function search()
  {
    IssetSearchitem(true)
  }
  function handleClose()
  {
    IssetSearchitem(false)
  }
  return (

<>

            <div className='row w-100 d-flex justify-content-center align-items-center'style={{backgroundColor:'darkgreen'}} >
                <div className='col-md-1'></div>
        <div className='col-md-10 '>
                 <div style={{color:'white',float:'right',listStyle:'none',fontSize:'large'}} className='d-flex justify-content-center align-items-center justify-content-between ms-auto'>
                    <button style={{color:'white'}} className="btn"onClick={cartshow}><FontAwesomeIcon style={{color:'white'}} icon={faCartShopping} className='fs-5'/>Cart</button>
                    <Modal size="xl"show={cart} onHide={handleClosecart}>
                  
                    <div className='d-flex justify-content-center align-items-center'>
                        <Modal.Title className='text-center ms-5'>Your Cart<br/>
                          
                          Never Leave a cart empty
                          </Modal.Title>
                         
                      <Modal.Header  closeButton>
                     
                        
                           
                           
                        </Modal.Header>
                    </div>
                
                 <Modal.Body className='d-flex justify-content-center align-items-center'>
                          
                              <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="no image" style={{height:'100px',width:'100px'}}/>
                           
                    </Modal.Body>
                   
                   
                
            </Modal>
                    <h5 style={{color:'white'}}>|</h5>
                    <Link to={'/Findstore'}><button  style={{color:'white'}} className='btn'>Find Store</button></Link>
                    <h5 style={{color:'white'}}>|</h5>
                    <button style={{color:'white'}} className="btn"onClick={login}>Sign in</button>
                    <Modal size="xl"show={log} onHide={handlecloselog}>
                    <Modal.Title className='text-center ms-5'>Login/Register<br/>
                    
                   For a personalized Experience
                    </Modal.Title>
                <Modal.Header  closeButton>
                  </Modal.Header>
               <Modal.Body className='d-flex justify-content-center align-items-center'>
               <form className="p-3 mt-3 border"action="">
                        <div className='mb-3'>
                            <p><b>Login/Register with your mobile number</b></p>
                        </div>
                        <div className='mb-3'>
                            <input className="w-100 form-control"type="text" placeholder='Enter 10 digit mobile number' />
                        </div>
                        <div className='mb-3'>
                       <input type="checkbox" />
                         <label htmlFor="">Receive communication from us on message</label>
                        </div>
                        <div className='mb-3'>
                            <Button className="w-100" style={{backgroundColor:'darkgreen',color:'white'}}>Send OTP</Button>
                        </div>
                       </form>
                         
                  </Modal.Body>    
              
          </Modal>
                 </div>
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
             <NavDropdown style={{color:'darkgreen', fontSize:'large',fontWeight:'bold'}}title="Men" id="navbarScrollingDropdown">
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
            <NavDropdown style={{color:'darkgreen', fontSize:'large',fontWeight:'bold'}}title="Women" id="navbarScrollingDropdown">
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
            <NavDropdown style={{color:'darkgreen',fontSize:'large',fontWeight:'bold'}} title="Brands" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Woods</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Woodsport
              </NavDropdown.Item>
             
              <NavDropdown.Item href="#action5">
                A Skating Monk
              </NavDropdown.Item>
            </NavDropdown>
                <Link to="/About" style={{ textDecoration: 'none' }}>
                                    <Nav.Link  style={{ fontSize: 'large' ,color:'green',fontWeight:'bold'}} href='#home'>About Us</Nav.Link>
                                </Link>
                                <Link to="/Labs" style={{ textDecoration: 'none' }}>
                                    <Nav.Link  style={{ fontSize: 'large' ,color:'green',fontWeight:'bold'}} href='#home'>Labs</Nav.Link>
                                </Link>
           
            
            {/*  <Nav.Link href="#" disabled>
              Link
            </Nav.Link>  */}
          </Nav>
          <button onClick={search} className='border b-5 rounded border-success p-2 me-5 ' style={{width:'200px'}}><FontAwesomeIcon style={{color:'green'}}icon={faMagnifyingGlass} /><span style={{color:'green'}}>Search</span></button>
          <Modal show={searchitem} onHide={handleClose} size='xl'>
                 <div className='d-flex'>
                 <Modal.Body style={{backgroundColor:'green'}}>
                           <div className='row w-100'>
                            <div className='col d-flex'>
                              <input type="text" placeholder='Search products'className='form-control w-100' />
                            </div>
                           </div>
                    </Modal.Body>
                    <Modal.Header style={{backgroundColor:'green'}} closeButton>
                        
                    </Modal.Header>
                   
                 </div>
            </Modal>
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