import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
function About() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={500}>

          <div className=" row w-100 d-flex justify-content-center align-items-center flex-column" style={{ backgroundImage: 'url("https://media.istockphoto.com/id/1720161964/photo/close-up-of-two-hikers-feet-walking-in-forest.jpg?s=2048x2048&w=is&k=20&c=uZY6kBfvIhzQqmk7_6GjM-LHGcxdLnW3gnGHLQpSx9g=")', height: '700px', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', opacity: '.8' }}>
            <div className='col-md-3'></div>
            <div className=' col-md-6 d-flex justify-content-center align-items-center flex-column '>
              <h1 style={{ color: 'white', fontFamily: 'cursive' }}><b>ABOUT US</b></h1>
              <p className="p-5" style={{ color: 'white', textAlign: 'center',textAlign:'justify' }}>Woodland's parent company, Aero Group, has been a well known name in the outdoor shoe industry since the early 50s. Founded in Quebec, Canada, it entered the Indian market in 1992. Before that, Aero Group was majorly exporting its leather shoes to Russia. After the division of Russia into various states known as the USSR, the group decided to launch some of its products in India. Hence, the first hand-stitched leather shoe was launched, which took the entire shoe market by storm. That shoe made the brand 'Woodland'.</p>
              <div className='col-md-3'></div>
            </div>
          </div>

        </Carousel.Item>
        <Carousel.Item interval={500}>

          <div className="row w-100" style={{ backgroundImage: 'url("https://media.istockphoto.com/id/2065805415/photo/walking-through-the-woodlands.jpg?s=2048x2048&w=is&k=20&c=M1dPtXd75bISfggU8LoJ1F7pxc_EG1DfTZk58lKItzM=")', height: '700px', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', opacity: '.8' }}>
            <div className='col-md-3'></div>
            <div className=' col-md-6 d-flex justify-content-center align-items-center flex-column '>
              <h1 style={{ color: 'white', fontFamily: 'cursive' }}><b>ADVENTURE</b></h1>
              <p className="p-5" style={{ color: 'white', textAlign: 'center' ,textAlign:'justify'}}>Over the years, the appetite for adventure sports has been on the rise. It is the spirit of adventure that defines Woodland. A spirit that is willing to stretch the levels of human endurance; a spirit that desires to reach the furthest frontiers; a spirit that craves to venture into the unknown.

              </p>
              <div className='col-md-3'></div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row w-100" style={{ backgroundImage: 'url("https://images.alphacoders.com/566/566707.jpg")', height: '700px', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', opacity: '.8' }}>
            <div className='col-md-3'></div>
            <div className=' col-md-6 d-flex justify-content-center align-items-center flex-column '>
              <h1 style={{ color: 'white', fontFamily: 'cursive' }}><b>OUR PRODUCTS</b></h1>
              <p className="p-5" style={{ color: 'white', textAlign: 'center',textAlign:'justify' }}>Woodland offers an extensive line of footwear, performance apparel and outdoor gear. Whether it's a lightweight jacket for active pursuits or a summit tested parka for the coldest places on earth, the focus is on creating truly functional solutions for outdoor and adventure enthusiasts.
                Technology & Innovation</p>
              <div className='col-md-3'></div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
 <Container>
        <div className='row w-100 rounded-5 mt-5 mb-5'style={{backgroundColor:'darkgreen',color:'white'}}>
          <div className='col-md-1'></div>
          <div className='col-md-12'>
          <div className='row w-100'>
            <div className='col-md-3'></div>
             <div className='col-md-6 p-5'>
                <h1 className='text-center'>Technology & Innovation</h1>
                <p style={{textAlign:'justify'}}>The increasing diversity of outdoor activity requires creative solutions that meet the quest for adventure. That's where Woodland's expertise comes into picture. It combines activity focused designs and technologically advanced materials available, created in the most innovative and effective manner possible.</p>
             </div>
             <div className='col-md-3'></div>
          </div>
          </div>
          <div className='col-md-1'></div>
        </div>
 </Container>
    </>
  )
}

export default About