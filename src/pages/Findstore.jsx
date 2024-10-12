import React from 'react'
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
function Findstore() {
  return (
   <>
   <Container>
    <div className='row w-100'>
        <div className='col'style={{backgroundImage:'url("https://www.woodlandworldwide.com/STORE_LOCATOR.png")',backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat',height:'300px'}}></div>
    </div>
   </Container>
   <div className='row w-100 mt-5'>
    <div className='col-md-1'></div>
    <div className='col-md-4 d-flex'>
    <Form.Select className='ms-2'>
        <option>Select State</option>
        <option>Delhi</option>
        <option>Assam</option>
        <option>Bihar</option>
        <option>Hariyana</option>
        <option>West Bengal</option>
        <option>Uttar Pradesh</option>
      </Form.Select>
      <Form.Select className='ms-2'>
        <option>select City</option>
        <option>New Delhi</option>
        <option>Patna</option>
        <option>Kolkata</option>
        <option>Hariyana</option>
        <option>Faridabad</option>
        <option>darbhanga</option>
      </Form.Select>
      <input type="text" className='form-control ms-2'placeholder='Filter Pincode' />
    </div>
    <div className='col-md-6'></div>
    <div className='col-md-1'></div>
   </div>
   <div className='row w-100 mt-5'>
   <div className='col-md-1'></div>
   <div className='col-md-10'>
   <table class="table table-responsive">
  <thead>
    <tr>
      <th >Name</th>
      <th >Address</th>
      <th >Pincode</th>
      <th >State</th>
      <th>Phone no</th>
      <th>City</th>
      <th>Location</th>
      <th>Zone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Woodland (Aero Club) Pvt. Ltd. - D327</td>
      <td>Premises at G-40, Abul Fazal Enclave Part-2, Shaheen Bagh, New Delhi, Pin - 110025.</td>
      <td>110025</td>
      <td>Delhi</td>
      <td>9811704102</td>
      <td>New Delhi</td>
      <td>Delhi - Shaheen Bagh (Kalindikunj).</td>
      <td>DELHI</td>
    </tr>
    <tr>
     <td >Woodland (Aero Club) Pvt. Ltd. - E325
Shop No. A1 to A5, Ground Floor, Triveni Commercial Complex, G.S. Road, Guwahati ,Pin-781005
</td>
      <td>Jacob</td>
      <td>781005</td>
      <td>Assam</td>
      <td>0361-2464308</td>
      <td>Guwahati</td>
      <td>Guwahati - Triveni Complex</td>
      <td>EAST</td>
    </tr>
    <tr>
<td>Woodland (Aero Club) Pvt. Ltd. - D326</td>
<td>867,KB Joshi Road, New Rohtak Road, Karol Bagh, New Delhi, Pin - 110005.</td>
<td>110005</td>
<td>Delhi</td>
<td>011-47095999</td>
<td>New Delhi</td>
<td>Delhi - KB, Joshi Road</td>
<td>DELHI</td>
    </tr>
  </tbody>
</table>
   </div>
   <div className='col-md-1'></div>
   </div>
   </>
  )
}

export default Findstore