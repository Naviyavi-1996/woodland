import React from 'react'
import { Button, Carousel, Container, } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
function Home() {
  return (
    <>
    <Carousel>
        <Carousel.Item interval={500}>
        <div style={{backgroundImage:'url("https://w0.peakpx.com/wallpaper/360/345/HD-wallpaper-men-model-man.jpg")',height:'700px',backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
            <div style={{float:'right',marginTop:'200px'}}>
               <h3 style={{color:'white',fontFamily:'cursive'}}>OFF THE GRID</h3>
               <p style={{color:'white',fontFamily:'fantasy'}}>-Escapade-</p>
               <Button variant='danger' className='p-3'>SHOP NOW</Button>
            </div>
             </div>
        </Carousel.Item>
        <Carousel.Item interval={500}>
        
        <div style={{backgroundImage:'url("https://images.unsplash.com/photo-1542838686-ddebb563fef4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',height:'700px',backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
            <div style={{float:'right',marginTop:'200px'}}>
               <h1 style={{color:'white',fontFamily:'fantasy'}}>Timeless sophistication</h1>
               <h3 style={{color:'white',fontFamily:'revert-layer'}}>Explore our collections</h3>
               <Button variant='success' className='p-3'>SHOP NOW</Button>
            </div>
             </div>
        </Carousel.Item>
        <Carousel.Item>
        <div style={{backgroundImage:'url("https://images.alphacoders.com/566/566707.jpg")',height:'700px',backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
            <div className="me-5"style={{float:'right',marginTop:'200px'}}>
               <h1 style={{color:'white',fontFamily:'fantasy'}}>Stylish wear</h1>
               <h3 style={{color:'white',fontFamily:'revert-layer'}}>Explore your Day</h3>
               <Button variant='success' className='p-3'>SHOP NOW</Button>
            </div>
             </div>
        </Carousel.Item> 
        <Carousel.Item>
        <div style={{backgroundImage:'url("https://modedebase.wordpress.com/wp-content/uploads/2014/05/blg_15.jpg")',height:'700px',backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
            <div style={{float:'right',marginTop:'200px'}}>
               <h1 style={{color:'white',fontFamily:'fantasy'}}>Street Essentials</h1>
               <h3 style={{color:'white',fontFamily:'revert-layer'}}>redefine your urban edge with our streetwear</h3>
               <Button variant='success' className='p-3'>SHOP NOW</Button>
            </div>
             </div>
        </Carousel.Item> 
      </Carousel>
      <Container className='mt-4'>
        <div className='row'>
          <div className='col-md-4'>
          <Card className='mt-sm-5' style={{ width: '100%',height:'500px',backgroundImage:'url("https://images.woodlandworldwide.app/assets/may2024/h_cat_1.webp")',backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
     {/*  <Card.Img variant="top" src="https://images.woodlandworldwide.app/assets/may2024/h_cat_1.webp" /> */}
      <Card.Body>
        <div className='d-flex justify-content-center align-items-center flex-column 'style={{marginTop:'350px'}}>
          <Card.Title style={{color:'white'}}>Best Sellers</Card.Title>
          <Button style={{backgroundColor:'white',borderColor:'white',color:'black',width:'150px'}}>Shop Now</Button>
        </div>
      </Card.Body>
    </Card>
          </div>
          <div className='col-md-4'>
          <Card className='mt-sm-5' style={{ width: '100%',height:'500px',backgroundImage:'url("https://images.woodlandworldwide.app/assets/may2024/h_cat_2.webp")',backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
     {/*  <Card.Img variant="top" src="https://images.woodlandworldwide.app/assets/may2024/h_cat_1.webp" /> */}
      <Card.Body>
        <div className='d-flex justify-content-center align-items-center flex-column 'style={{marginTop:'350px'}}>
          <Card.Title style={{color:'white'}}>Sneakers</Card.Title>
          <Button style={{backgroundColor:'white',borderColor:'white',color:'black',width:'150px'}}>Shop Now</Button>
        </div>
      </Card.Body>
    </Card>
          </div>
          <div className='col-md-4'>
          <Card className='mt-sm-5' style={{ width: '100%',height:'500px',backgroundImage:'url("https://images.woodlandworldwide.app/assets/may2024/h_cat_3.webp")',backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
     {/*  <Card.Img variant="top" src="https://images.woodlandworldwide.app/assets/may2024/h_cat_1.webp" /> */}
      <Card.Body>
        <div className='d-flex justify-content-center align-items-center flex-column 'style={{marginTop:'350px'}}>
          <Card.Title style={{color:'white'}}>Boots</Card.Title>
          <Button style={{backgroundColor:'white',borderColor:'white',color:'black',width:'150px'}}>Shop Now</Button>
        </div>
      </Card.Body>
    </Card>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
          <Card className='mt-sm-4' style={{ width: '100%',height:'500px',backgroundImage:'url("https://images.woodlandworldwide.app/assets/may2024/h_cat_4.webp")',backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
     {/*  <Card.Img variant="top" src="https://images.woodlandworldwide.app/assets/may2024/h_cat_1.webp" /> */}
      <Card.Body>
        <div className='d-flex justify-content-center align-items-center flex-column 'style={{marginTop:'350px'}}>
          <Card.Title style={{color:'white'}}>Sandals</Card.Title>
          <Button style={{backgroundColor:'white',borderColor:'white',color:'black',width:'150px'}}>Shop Now</Button>
        </div>
      </Card.Body>
    </Card>
          </div>
          <div className='col-md-4'>
          <Card className='mt-sm-4' style={{ width: '100%',height:'500px',backgroundImage:'url("https://images.woodlandworldwide.app/assets/may2024/h_cat_5.webp")',backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
     {/*  <Card.Img variant="top" src="https://images.woodlandworldwide.app/assets/may2024/h_cat_1.webp" /> */}
      <Card.Body>
        <div className='d-flex justify-content-center align-items-center flex-column 'style={{marginTop:'350px'}}>
          <Card.Title style={{color:'white'}}>Mens's Apparel</Card.Title>
          <Button style={{backgroundColor:'white',borderColor:'white',color:'black',width:'150px'}}>Shop Now</Button>
        </div>
      </Card.Body>
    </Card>
          </div>
          <div className='col-md-4'>
          <Card className='mt-sm-4' style={{ width: '100%',height:'500px',backgroundImage:'url("https://images.woodlandworldwide.app/assets/may2024/h_cat_6.webp")',backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
     {/*  <Card.Img variant="top" src="https://images.woodlandworldwide.app/assets/may2024/h_cat_1.webp" /> */}
      <Card.Body>
        <div className='d-flex justify-content-center align-items-center flex-column 'style={{marginTop:'350px'}}>
          <Card.Title style={{color:'white'}}>Women's Apparel</Card.Title>
          <Button style={{backgroundColor:'white',borderColor:'white',color:'black',width:'150px'}}>Shop Now</Button>
        </div>
      </Card.Body>
    </Card>
          </div>
        </div>
      </Container>
      <div className='mt-5'style={{height:'500px',backgroundImage:'url("https://images.woodlandworldwide.app/assets/may2024/wdl_shoe_banner.webp")',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
      <Button className="ms-5"style={{backgroundColor:'darkgreen',borderColor:'darkgreen',width:'150px',marginTop:'400px',height:'50px'}}>Shop Now</Button>
      </div>
      <div className='row'>
        <div className='col-md-6'>
        <Card className='mt-sm-4' style={{ width: '100%',height:'600px',backgroundImage:'url("https://images.woodlandworldwide.app/assets/may2024/m_apparel_banner.webp")',backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
     {/*  <Card.Img variant="top" src="https://images.woodlandworldwide.app/assets/may2024/h_cat_1.webp" /> */}
      <Card.Body>
        <div className='ms-5 'style={{marginTop:'350px'}}>
          <Card.Title style={{color:'white'}}><b><h3>Shop Men's Apparel</h3></b></Card.Title>
          <Button style={{backgroundColor:'darkgreen',borderColor:'darkgreen',color:'white',width:'150px'}}><b>Shop Now</b></Button>
        </div>
      </Card.Body>
    </Card>
        </div>
        <div className='col-md-6'>
        <Card className='mt-sm-4' style={{ width: '100%',height:'600px',backgroundImage:'url("https://images.woodlandworldwide.app/assets/may2024/f_apparel_banner.webp")',backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
     {/*  <Card.Img variant="top" src="https://images.woodlandworldwide.app/assets/may2024/h_cat_1.webp" /> */}
      <Card.Body>
        <div className="ms-5"style={{marginTop:'350px'}}>
          <Card.Title style={{color:'white'}}><b><h3>Shop Women's Apparel</h3></b></Card.Title>
          <Button style={{backgroundColor:'darkgreen',borderColor:'darkgreen',color:'white',width:'150px'}}><b>Shop Now</b></Button>
        </div>
      </Card.Body>
    </Card>
          </div>
      </div>
<div className='container-fluid'>
        <div className='row mt-sm-5'>
          <div className='col-md-3'>
          <Card style={{ width: '100%' ,border:'none'}}>
          <Card.Img variant="top" src="https://images.woodlandworldwide.app/assets/may2024/T-shirts.webp" /> 
      <Card.Body>
        <Card.Title><b>T-shirt</b></Card.Title>
       <div className='d-flex justify-content-between'>
       <button type="button" class="btn btn-light"href="#">Shop Men</button>
       <button type="button" class="btn btn-light"href="#">Shop Women</button>
       </div>
      </Card.Body>
    </Card>
          </div>
          <div className='col-md-3'>
          <Card style={{ width: '100%' ,border:'none'}}>
          <Card.Img variant="top" src="https://images.woodlandworldwide.app/assets/may2024/Shirts.webp" /> 
      <Card.Body>
        <Card.Title><b>Shirts</b></Card.Title>
       <div className='d-flex justify-content-between'>
       <button type="button" class="btn btn-light"href="#">Shop Men</button>
       <button type="button" class="btn btn-light"href="#">Shop Women</button>
       </div>
      </Card.Body>
    </Card>
          </div>
          <div className='col-md-3'>
          <Card style={{ width: '100%' ,border:'none'}}>
          <Card.Img variant="top" src="https://images.woodlandworldwide.app/assets/may2024/Shorts.webp" /> 
      <Card.Body>
        <Card.Title><b>Shorts</b></Card.Title>
       <div className='d-flex justify-content-between'>
          <button type="button" class="btn btn-light"href="#">Shop Men</button>
          <button type="button" class="btn btn-light"href="#">Shop Women</button>
       </div>
      </Card.Body>
    </Card>
          </div>
          <div className='col-md-3'>
          <Card style={{ width: '100%' ,border:'none'}}>
          <Card.Img variant="top" src="https://images.woodlandworldwide.app/assets/may2024/Jeans.webp" /> 
      <Card.Body>
        <Card.Title><b>Shorts</b></Card.Title>
       <div className='d-flex justify-content-between'>
          <Button variant='' href="#">Shop Men</Button>
          <button type="button" class="btn btn-light"href="#">Shop Women</button>
       </div>
      </Card.Body>
    </Card>
          </div>
        </div>
</div>

<div className='row w-100' style={{height:'500px',backgroundImage:'url("https://images.woodlandworldwide.app/assets/may2024/bag_cat_banner.webp")',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
<Button style={{backgroundColor:'darkgreen',borderColor:'darkgreen',color:'white',height:"50px",width:'150px',marginTop:'400px',marginLeft:'100px'}}><b>Shop Now</b></Button>
</div>
<div className='row mt-5 w-100'>
<div className='d-flex justify-content-center align-items-center'>
<div className='col-md-4'style={{backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Zgt4Sdn9GTNMxSazVoEyNna9q8GYyJ_Vqw&s")',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover',height:'500px',width:'500px'}}>
  <div className='d-flex justify-content-center align-items-center flex-column'style={{marginTop:'350px'}}>
    <h3 style={{color:'white'}}>Shoe Care</h3>
  <button type="button" style={{width:'150px'}}class="btn btn-outline-light"href="#"><b>Shop Now</b></button>
  </div>
  </div>
  <div className='col-md-4'style={{backgroundImage:'url("https://images.woodlandworldwide.app/assets/may2024/shoecare_cat_banner.webp")',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover',height:'500px',width:'500px'}}>
  <div className='d-flex justify-content-center align-items-center flex-column'style={{marginTop:'350px'}}>
    <h3 style={{color:'white'}}>Belts & More</h3>
  <button type="button" style={{width:'150px'}}class="btn btn-outline-light"href="#"><b>Shop Now</b></button>
  </div>
  </div>
  <div className='col-md-4'style={{backgroundImage:'url("https://5.imimg.com/data5/ANDROID/Default/2021/11/SY/HW/WB/19051907/product-jpeg-500x500.jpg")',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover',height:'500px',width:'500px'}}>
  <div className='d-flex justify-content-center align-items-center flex-column'style={{marginTop:'350px'}}>
    <h3 style={{color:'white'}}>BAGS</h3>
  <button type="button" style={{width:'150px'}}class="btn btn-outline-light"href="#"><b>Shop Now</b></button>
  </div>
  </div>
</div>
</div>
<div className='row mt-5 w-100'>
<h4 className='text-center'>AS WORN BY WOODLAND FAM</h4>
<h5 className='text-center'>Click to shop & mention us on instagram @woodlandworldwide to be featured</h5>
<div className='d-flex justify-content-center align-items-center justify-content-between'>
  <div className='col-sm-2'style={{width:'290px'}}>
  <Card style={{ width: '100%',height:'300px',backgroundImage:'url("https://woodlandworldwide.com/insta_1.JPG")',backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
    </Card>
  </div>
  <div className='col-sm-2 'style={{width:'290px'}}>
  <Card style={{ width: '100%',height:'300px',backgroundImage:'url("https://woodlandworldwide.com/insta_2.jpeg")',backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
    </Card>
  </div> <div className='col-sm-2 'style={{width:'290px'}}>
  <Card style={{ width: '100%',height:'300px',backgroundImage:'url("https://woodlandworldwide.com/insta_3.JPG")',backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
    </Card>
  </div> <div className='col-sm-2 'style={{width:'290px'}}>
  <Card style={{ width: '100%',height:'300px',backgroundImage:'url("https://woodlandworldwide.com/insta_4.JPG")',backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
    </Card>
  </div> <div className='col-sm-2 'style={{width:'290px'}}>
  <Card style={{ width: '100%',height:'300px',backgroundImage:'url("https://woodlandworldwide.com/insta_5.JPG")',backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
    </Card>
  </div>
</div>
</div>
<div className='row'>
        <div className='col-md-6'>
        <Card className='mt-sm-4' style={{ width: '100%',height:'600px',backgroundImage:'url("https://content.jdmagicbox.com/comp/def_content_category/woodland-stores-11988339-vx3j4nxpsz.jpg")',backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
     {/*  <Card.Img variant="top" src="https://images.woodlandworldwide.app/assets/may2024/h_cat_1.webp" /> */}
      <Card.Body>
        <div className='ms-5 'style={{marginTop:'350px'}}>
          <Card.Title style={{color:'white'}}><b><h3>Pro Planet</h3></b></Card.Title>
          <h5 style={{color:'white'}}>Proplanet is a community that is committed to make our plane a better place to live in. Our ultimate goal is to inspire the next generation and increase their participation in the conservation of nature.</h5>
          <Button style={{backgroundColor:'darkgreen',borderColor:'darkgreen',color:'white',width:'150px'}}><b>Read More</b></Button>
        </div>
      </Card.Body>
    </Card>
        </div>
        <div className='col-md-6 '>
        <Card className='mt-sm-4' style={{ width: '100%',height:'600px',backgroundImage:'url("https://thumbs.dreamstime.com/b/pharmacy-chemistry-theme-test-glass-flask-solution-research-laboratory-science-medical-background-tubes-dark-toned-324758794.jpg")',backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
     {/*  <Card.Img variant="top" src="https://images.woodlandworldwide.app/assets/may2024/h_cat_1.webp" /> */}
      <Card.Body>
        <div className="ms-5"style={{marginTop:'350px'}}>
          <Card.Title style={{color:'white'}}><b><h3>Woodland Research Lab</h3></b></Card.Title>
          <h5 style={{color:'white'}}>Woodlands expertise combines activity focused designs and technologically advanced materials available, created in the most innovative and effective manner possible.

Rea</h5>
          <Button style={{backgroundColor:'darkgreen',borderColor:'darkgreen',color:'white',width:'150px'}}><b>Read More</b></Button>
        </div>
      </Card.Body>
    </Card>
          </div>
      </div>
    </>
  )
}

export default Home