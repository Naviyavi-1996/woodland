import { faFacebook, faInstagram, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Footer() {
  return (
   <>
    <div className='row w-100 mt-4' style={{backgroundColor:'darkgreen'}}>
   <img className='ms-5' src="https://seeklogo.com/images/W/woodland-logo-BDCA948AA5-seeklogo.com.png" alt="woodland logo"style={{width:'150px',height:'100px'}} />
    <div className='d-md-flex justify-content-center align-items0center' style={{color:'white'}}>
      <div className='col-md-1'> </div>
      <div className='col-md-2'>
      <p> <b>Shop Footwear</b></p>
      <p style={{fontSize:'14px'}}>Boots</p>
      <p style={{fontSize:'14px'}}>Sneakers/sports</p>
      <p style={{fontSize:'14px'}}>Casuals</p>
      <p style={{fontSize:'14px'}}>Formals</p>
      <p style={{fontSize:'14px'}}>Slippers/Flip-Flops</p>
      <p style={{fontSize:'14px'}}>Sandals</p>
      <p style={{fontSize:'14px'}}>Safety Shoes</p>
      </div>
      <div className='col-md-2'>
      <p> <b>Company</b></p>
      <p style={{fontSize:'14px'}}>Jackets</p>
      <p style={{fontSize:'14px'}}>T-shirts</p>
      <p style={{fontSize:'14px'}}>Casuals</p>
      <p style={{fontSize:'14px'}}>Shirts</p>
      <p style={{fontSize:'14px'}}>Sweaters</p>
      <p style={{fontSize:'14px'}}>Swaetshirts & Hoodies</p>
      <p style={{fontSize:'14px'}}>Innerwear Tops</p>
      </div>
      <div className='col-md-2'>
      <p> <b>Shop Accessories  & Bags</b></p>
      <p style={{fontSize:'14px'}}>Handbags</p>
      <p style={{fontSize:'14px'}}>Socks</p>
      <p style={{fontSize:'14px'}}>Fanny Bags</p>
      <p style={{fontSize:'14px'}}>SHoe Care</p>
      <p style={{fontSize:'14px'}} >Trolly Bags</p>
      <p style={{fontSize:'14px'}}>Swaetshirts & Hoodies</p>
      <p style={{fontSize:'14px'}}>Innerwear Tops</p>
      </div>
      <div className={'d-none d-md-inline'}style={{width:'1px',height:'300px',backgroundColor:'rgba(52, 50, 50, 0.456)'}}></div>
      <div className='col-md-2'>
      <p> <b>Contact Us</b></p>
      <p style={{fontSize:'14px'}}>Need some more help? Get in touch with us and we’ll be more than happy to guide you through!</p>
      <p style={{textDecoration:'underline',fontSize:'14px'}}>care@woodlandworldwide.com</p>
      <p style={{textDecoration:'underline',fontSize:'14px'}}>1800 103 3445</p>
      <p style={{fontSize:'14px'}}>Woodland Customer Service Reps are available for inquiries Monday to Friday from 10AM to 6PM.</p>
      </div>
      <div className='col-md-2'><p> <b>Shop Accessories  & Bags</b></p>
      <p style={{fontSize:'14px'}}>Always keep exploring more!</p>
      <p style={{fontSize:'14px'}}>Get alerts for new arrivals, offers, and more!</p>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Email Address"
          aria-label="Email Address"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-light" id="button-addon2">
          Button
        </Button>
      </InputGroup>

      <p style={{fontSize:'14px'}}>By entering your email, you agree to our Terms of Service & Privacy Policy, including receipt of emails and promotions. You can unsubscribe at any time.</p>
      </div>
      <div className='col-md-1'></div>
      </div>
      <div className='row w-100'>
<div className='col-md-1'></div>
<div className='col-md-4 d-flex justify-content-between'>
<FontAwesomeIcon icon={faInstagram} size='xl'style={{color:'white'}} />
<FontAwesomeIcon icon={faFacebook} size='xl'style={{color:'white'}}/>
<FontAwesomeIcon icon={faXTwitter} size='xl'style={{color:'white'}}/>
<FontAwesomeIcon icon={faYoutube} size='xl' style={{color:'white'}}/>
<FontAwesomeIcon icon={faLinkedin} size='xl' style={{color:'white'}} />
</div>
<div className='col-md-6'>
  <hr style={{color:'rgba(52, 50, 50, 0.456)'}}/>
</div>
<div className='col-md-1'></div>
      </div>
      <div className='row w-100'style={{color:'white'}}>
        <div className='col-md-1'></div>
        <div className='col-md-5 d-md-flex justify-content-center align-items-center justify-content-between'>
          <p style={{fontSize:'13px'}}>About Us</p>
          <p style={{fontSize:'13px'}}>Terms of service</p>
          <p style={{fontSize:'13px'}}>Privacy Policy</p>
          <p style={{fontSize:'13px'}}>Institutional Enquiry</p>
          <p style={{fontSize:'13px'}}>Refund Policy</p>
          <p style={{fontSize:'13px'}}>Store Locator</p>
        </div>
        <div className='col-md-1'></div>
        <div className='col-md-3'>
        <p className="ms-md-5"style={{fontSize:'13px'}}>Copyright 2024, Woodland (Aero Club) Private Limited</p>
        </div>
        <div className='col-md-1'></div>
      </div>
    </div>
    </>
  )
}

export default Footer