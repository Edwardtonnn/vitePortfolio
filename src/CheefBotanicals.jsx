import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from 'react-bootstrap/Carousel';

function CheefBotanicals() {
  return (
    <>
    <head>
    <title>Cheef Botanicals | Portfolio Page</title>
    {/* <!-- Import Font  -->  */}
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap" rel="stylesheet"></link>
    
    </head>
      <Header/>
      <div className="container-header container-header-3">
        <h1>E-Commerce Company</h1>
        <img className="port-hr" src="images/signature-hr-01.svg" alt="Signature HR"/>
      </div>
      <div className="container-fluid port-interior">
      <div className="row d-flex justify-content-between port-intro-text py-5">
                <div className="col-lg-2 col-6 py-5">
                    <span className="text-white d-block fw-normal">Client:</span>
                    <img className="port-logo" src="images/cheef-logo.png" alt="WordPress logo" width="150px"/>
                </div>
                <div className="col-lg-2 col-6 py-5">
                    <span className=" text-white d-block fw-normal">Built using:</span>
                    <img className="port-logo" src="images/wp-logo.png" alt="WordPress logo" width="150px"/>
                </div>
                <div className="col-lg-7 py-5">
                    <span className=" text-white fw-normal">The Challenge:</span>
                    <p className="text-white">As a front-end developer I was brought onboard to help clean up the already existing website. I worked alongside the graphic design team to build a more cohesive aesthetic by providing input and leading the development of the brand and style guide. While there I also developed <a href="https://yithemes.com/themes/plugins/yith-woocommerce-ajax-product-filter/" target="_blank">product filtering</a> functionality and helped with SEO by minifying images and files. </p>
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
                        Continuous creation of assets
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
      
                <Carousel className="py-5 cheef" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/cheefBase.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/cheefBase2.jpg"
          alt="Second slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/cheefBase3.jpg"
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
                    <div className="containerColor cheef">
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
                        <span className="text-white">Didactic, Serif</span>
                    </div>
                    <div className="col-lg-12 py-5 cheef">
                    <p className="type text-white">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq                Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                    </div>                   
                </div>

                {/* End Typography Section  */}
            

                <div className="row container-visit py-5">
                  <a href="https://cheefbotanicals.com/" target="_blank" className="btn btn-danger">Visit Website</a>
                </div>            
              </div>

      <Footer/>
    </>
  )
}

export default CheefBotanicals
