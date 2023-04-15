import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from 'react-bootstrap/Carousel';

function ShipAndShore() {
  return (
    <>
    <head>
    <title>Ship & Shore | Portfolio Page</title>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200&display=swap" rel="stylesheet"/>
    
    </head>
      <Header/>
      <div className="container-header container-header-2">
        <h1>Environmental Company</h1>
        <img className="port-hr" src="images/signature-hr-01.svg" alt="Signature HR"/>
      </div>
      <div className="container-fluid port-interior">
      <div className="row d-flex justify-content-between port-intro-text py-5">
                <div className="col-lg-2 col-6 py-5">
                    <span className="text-white d-block fw-normal">Client:</span>
                    <img className="port-logo" src="images/sse-logo-white.png" alt="WordPress logo" width="150px"/>
                </div>
                <div className="col-lg-2 col-6 py-5">
                    <span className=" text-white d-block fw-normal">Built using:</span>
                    <img className="port-logo" src="images/wp-logo.png" alt="WordPress logo" width="150px"/>
                </div>
                <div className="col-lg-7 py-5">
                    <span className=" text-white fw-normal">The Challenge:</span>
                    <p className="text-white">Ship & Shore Environmental, based in Long Beach, CA was looking to redesign their website. I was tasked with creating a unique site from start to finish for an industry with very few competitors. I chose to focus on the environmental aspect of the company incorporating greens, blues and whites throughout the design. Check out the process and final website below.</p>
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
                    Completed in 7 weeks
                    </span>
                </div>
                <div className="col-lg-2 col-md-4 my-3">
                    {/* <span className="text-white fw-normal d-block">
                        Special functionality:
                    </span>
                    <span className="text-white">
                    <a href="https://manganpower.com/resources/technical-papers/" target="_blank">Email capture</a>, customized JS based <a href="https://manganpower.com/microgrid-design-system-integration-services/" target="_blank">scrolling topbar</a> 
                    </span> */}
                </div>
            </div>

            {/* <!-- Start Carousel  --> */}
      
                <Carousel className="py-5 sse" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/sseBase.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/sseBase1.jpg"
          alt="Second slide"
        />
      
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
                    <div className="containerColor sse">
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
                        <span className="text-white">Muli, Serif</span>
                    </div>
                    <div className="col-lg-12 py-5">
                    <p className="type text-white">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq                Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                    </div>                   
                </div>

                {/* End Typography Section  */}
            

                <div className="row container-visit py-5">
                  <a href="https://shipandshore.com/" target="_blank" className="btn btn-danger">Visit Website</a>
                </div>            
              </div>

      <Footer/>
    </>
  )
}

export default ShipAndShore
