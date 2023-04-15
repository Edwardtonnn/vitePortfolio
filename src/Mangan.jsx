import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from 'react-bootstrap/Carousel';

function Mangan() {
  return (
    <>
    <head>
    <title>Mangan Energy Company | Portfolio Page</title> 
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@100&display=swap" rel="stylesheet"></link>
    
    </head>
      <Header/>
      <div className="container-header container-header-1">
        <h1>Energy Company</h1>
        <img className="port-hr" src="images/signature-hr-01.svg" alt="Signature HR"/>
      </div>
      <div className="container-fluid port-interior">
      <div className="row d-flex justify-content-between port-intro-text py-5">
                <div className="col-lg-2 col-6 py-5">
                    <span className="text-white d-block fw-normal">Client:</span>
                    <img className="port-logo" src="images/White-logo-300x133.png" alt="WordPress logo" width="150px"/>
                </div>
                <div className="col-lg-2 col-6 py-5">
                    <span className=" text-white d-block fw-normal">Built using:</span>
                    <img className="port-logo" src="images/wp-logo.png" alt="WordPress logo" width="150px"/>
                </div>
                <div className="col-lg-7 py-5">
                    <span className=" text-white fw-normal">The Challenge:</span>
                    <p className="text-white">Mangan Power Distribution was quickly expanding and needed a elegant website to showcase the power and electrical distribution arm of the company. My challeng was to design a website that was cohesive with the already existing Mangan brand yet different enough to warrant the $6,000 USD price tag we ended up charging. Below you’ll see the result.</p>
                </div>
            </div>
            <div className="row d-flex justify-content-between py-5">
                <div className="col-lg-2 col-md-4 my-3">
                    <span className="text-white fw-normal d-block">
                        Project type:
                    </span>
                    <span className="text-white">Website design, graphic design</span>                   
                </div>
                <div className="col-lg-2 col-md-4 my-3">
                <span className="text-white fw-normal d-block">
                        Timeline:
                    </span>
                    <span className="text-white">
                        Completed in 6 weeks
                    </span>
                </div>
                <div className="col-lg-2 col-md-4 my-3">
                    <span className="text-white fw-normal d-block">
                        Special functionality:
                    </span>
                    <span className="text-white">
                    <a href="https://manganpower.com/resources/technical-papers/" target="_blank">Email capture</a>, customized JS based <a href="https://manganpower.com/microgrid-design-system-integration-services/" target="_blank">scrolling topbar</a> 
                    </span>
                </div>
            </div>

            {/* <!-- Start Carousel  --> */}
      
                <Carousel className="py-5 mangan" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/manganEnergyBase.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Arc Flash Solutions</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/manganEnergyBase2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Power System Analysis</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/manganEnergyBase3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Relay Upgrade</h3>
       
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                {/* <!-- End Carousel  --> */}

                {/* Start Container Color Scheme   */}
                <div className="row container-color-scheme-port py-5">
                    <div className="col-lg-2 py-5">
                        <span className="text-white fw-normal d-block">
                            Color scheme:
                        </span>

                    </div>
                    <div className="col-lg-12">
                    <div className="containerColor energy">
                        <div className="color1">                            
                        </div>
                        <div className="color2">                            
                        </div>
                        <div className="color3">                            
                        </div>
                        <div className="color4">                           
                        </div>
                        </div>
                    </div>
                </div>
                {/* End Container Color Scheme  */}

                {/* Start Typography Section  */}

                <div className="row container-typography-port py-5">
                    <div className="col-lg-2">
                        <span className="text-white fw-normal d-block">Typography:</span>
                        <span className="text-white">Barlow, Serif</span>
                    </div>
                    <div className="col-lg-12 py-5">
                    <p className="type text-white">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq                Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                    </div>                   
                </div>

                {/* End Typography Section  */}

                {/* Start Noteworthy and carousel section  */}
                <div className="row py-5 text-white d-flex justify-content-between align-items-center">
                    <div className="col-lg-4">
                        <span className="text-white fw-normal d-block">Noteworthy:</span>
                        <p>During this project I was asked to rebrand some technical schematics using the new color scheme I had designed. I’d never colorized electronic schematics before but was pleasantly satisfied with the end result. </p>
                    </div>
                    <div className="col-lg-4">
                    <Carousel className="py-5 schematic" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/schematic.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/schematic2.jpg"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/schematic3.jpg"
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
                {/* <!-- End Carousel  --> */}

                       
                    </div>                    
                    </div> 
                    {/* End Noteworthy and carousel section  */}

                    <div className="row container-visit py-5">
                <a href="https://manganpower.com/" target="_blank" className="btn btn-danger ">Visit Website</a>
                </div>            
      </div>

      <Footer/>
    </>
  )
}

export default Mangan
