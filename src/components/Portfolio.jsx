import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import {Link} from 'react-router-dom';



const Portfolio = () => {
    const ScrollToTop = () => {
        window.scrollTo(0, 0);
      };

    gsap.registerPlugin(ScrollTrigger);

    const sectionRef = useRef(null)
    const triggerRef = useRef(null)

    const myWindowWidthTimes3 = (window.innerWidth * 3)
    console.log(myWindowWidthTimes3);


useEffect(() => {

   

    const pin = gsap.fromTo(sectionRef.current,{
        translateX:0

    },{
      translateX:"-200vw",
      ease:'none',
      duration:1,
      scrollTrigger:{
        trigger:triggerRef.current,
        start:"top top",
        end:"2000 top",
        scrub:true,
        pin:true
      }  
    })

    return()=>{
       pin.kill() 
    }
    
  }, []);

const applyColorOverlay = (e) => {
    let overlay2 = document.querySelector('.color-overlay');
    overlay2.style.backgroundColor = window.getComputedStyle(e.target).backgroundColor;
    
  };

  const removeColorOverlay = () => {
     let overlay2 = document.querySelector('.color-overlay');
    overlay2.style.backgroundColor = '';
  }; 

  const applyColorOverlay2 = (e) => {
    let overlay2 = document.querySelector('.color-overlay2');
    overlay2.style.backgroundColor = window.getComputedStyle(e.target).backgroundColor;
    
  };

  const removeColorOverlay2 = () => {
     let overlay2 = document.querySelector('.color-overlay2');
    overlay2.style.backgroundColor = '';
  }; 
  const applyColorOverlay3 = (e) => {
    let overlay3 = document.querySelector('.color-overlay3');
    overlay3.style.backgroundColor = window.getComputedStyle(e.target).backgroundColor;
    
  };

  const removeColorOverlay3 = () => {
     let overlay3 = document.querySelector('.color-overlay3');
    overlay3.style.backgroundColor = '';
  }; 



  return (
    <>      
     <div id="portfolio" className="portfolioWrapper scroll-section-outer ">
     {/* <!-- Start of Container 1  --> */}
     
     <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">

     
            <div className="container-port-1 container-hz d-flex justify-content-center scroll-section">
            <div className="portfolio-identifier">
                    <p className="">Portfolio Case Study: Mangan Inc.</p>
                </div>
                <div className="color-overlay"></div>
                <div className="row d-flex justify-content-between port-content">
                   
                    <div className="col-lg-5 p-5 d-flex flex-column justify-content-center">
                        <h2 className="text-white mb-4">Mangan Inc. <br/>Power Distribution</h2>
                        <img className="signature-port" src="images/signature-hr-port-01.svg" alt="signature"/>
                        <div className="row my-2">
                            <div className="col">
                                <span className="text-white hz-subheader">Energy Company</span>
                                <div className="hz-logo-imgs">
                                    <img src="images/White-logo-300x133.png" alt="Mangan Inc. White Logo"
                                        className="img-fluid" width="100px"/>
                                    <img src="images/wp-logo.png" alt="WordPress Logo White" className="img-fluid"
                                        width="100px"/>
                                </div>
                            </div>
                        </div>
                        <p className="text-white container-text">Mangan Power Distribution was quickly expanding and needed
                            an
                            elegant website
                            to showcase the power and electrical distribution arm of the company. Here is what I
                            designed and built.</p>

                            <p className="text-white color-hover-title">Hover over each color</p>
          <div className="row container-color-scheme">
          <div
          className="color-1 col-3"
          onMouseOver={applyColorOverlay}
          onMouseOut={removeColorOverlay}
        ></div>
        <div
          className="color-2 col-3"
          onMouseOver={applyColorOverlay}
          onMouseOut={removeColorOverlay}
        ></div>
        <div
          className="color-3 col-3"
          onMouseOver={applyColorOverlay}
          onMouseOut={removeColorOverlay}
        ></div>
        <div
          className="color-4 col-3"
          onMouseOver={applyColorOverlay}
          onMouseOut={removeColorOverlay}
        ></div>
          </div>
                       

                        <div className="row my-4">
                            <div className="col-lg-6 col-6 d-md-flex d-none flex-column">
                                <p className="text-white font-weight-bold">Typography:</p>
                                <p className="text-white">Open Sans</p>
                            </div>
                            <div className="col-lg-6 col-12">
                                <Link to="/mangan" className="btn mb-5 "
                                    onClick={ScrollToTop}>View Case Study</Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-5 d-md-flex d-none align-content-center justify-content-center ">
                        <div className="row d-flex align-items-center d-lg-flex d-md-none">
                            <Link to="/mangan" className="img-a" onClick={ScrollToTop}>
                                <img className="img-fluid align-self-center  d-none d-sm-block img-mock-up"
                                    src="images/mangan-mockup.png" alt="Mangan Inc." height="100%"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Container 1 --> */}
            {/* Start COntainer 2  */}
<div className="container-port-2 container-hz d-flex justify-content-center scroll-section">
<div className="portfolio-identifier">
                    <p className="">Portfolio Case Study: Ship & Shore.</p>
                </div>
                <div className="color-overlay2"></div>
                <div className="row d-flex justify-content-between port-content">
                   
                    <div className="col-lg-5 p-5 d-flex flex-column justify-content-center">
                        <h2 className="text-white mb-4">Ship & Shore Environmental</h2>
                        <img className="signature-port" src="images/signature-hr-port-01.svg" alt="signature"/>
                        <div className="row my-2">
                            <div className="col">
                                <span className="text-white hz-subheader">Air pollution abatement company</span>
                                <div className="hz-logo-imgs">
                                    <img src="images/sse-logo-white.png" alt="Ship and Shore Environmental"
                                        className="img-fluid" width="100px"/>
                                    <img src="images/wp-logo.png" alt="WordPress Logo White" className="img-fluid"
                                        width="100px"/>
                                </div>
                            </div>
                        </div>
                        <p className="text-white container-text">Ship & Shore Environmental Inc. needed a website redesign to showcae their air pollution abatment services in an interesting and engaging way. Check out the result.</p>

                            <p className="text-white color-hover-title">Hover over each color</p>
          <div className="row container-color-scheme">
          <div
          className="color-1 col-3"
          onMouseOver={applyColorOverlay2}
          onMouseOut={removeColorOverlay2}
        ></div>
        <div
          className="color-2 col-3"
          onMouseOver={applyColorOverlay2}
          onMouseOut={removeColorOverlay2}
        ></div>
        <div
          className="color-3 col-3"
          onMouseOver={applyColorOverlay2}
          onMouseOut={removeColorOverlay2}
        ></div>
        <div
          className="color-4 col-3"
          onMouseOver={applyColorOverlay2}
          onMouseOut={removeColorOverlay2}
        ></div>
          </div>
                       

                        <div className="row my-4">
                            <div className="col-lg-6 col-6 d-md-flex d-none flex-column">
                                <p className="text-white font-weight-bold">Typography:</p>
                                <p className="text-white">Muli, Helvetica</p>
                            </div>
                            <div className="col-lg-6 col-12">
                                <Link to="/shipandshore" className="btn mb-5 "
                                    onClick={ScrollToTop}>View Case Study</Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-5 d-md-flex d-none align-content-center justify-content-center ">
                        <div className="row d-flex align-items-center d-lg-flex d-none">
                            <Link to="/shipandshore" className="img-a" onClick={ScrollToTop} >
                                <img className="img-fluid align-self-center  d-none d-sm-block img-mock-up"
                                    src="images/sse-mockup.png" alt="Ship and Shore" height="100%"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Container 2--> */}
     {/* Start COntainer 2  */}
<div className="container-port-3 container-hz d-flex justify-content-center scroll-section">
<div className="portfolio-identifier">
                    <p className="">Portfolio Case Study: Cheef Botanicals</p>
                </div>
                <div className="color-overlay3"></div>
                <div className="row d-flex justify-content-between port-content">
                   
                    <div className="col-lg-5 p-5 d-flex flex-column justify-content-center">
                        <h2 className="text-white mb-4">Cheef <br/>Botanicals</h2>
                        <img className="signature-port" src="images/signature-hr-port-01.svg" alt="signature"/>
                        <div className="row my-2">
                            <div className="col">
                                <span className="text-white hz-subheader">E-Commerce Company</span>
                                <div className="hz-logo-imgs">
                                    <img src="images/cheef-logo.png" alt="Cheef Botanicals"
                                        className="img-fluid" width="100px"/>
                                    <img src="images/wp-logo.png" alt="WordPress Logo White" className="img-fluid"
                                        width="100px"/>
                                </div>
                            </div>
                        </div>
                        <p className="text-white container-text">Responsible for the branding of Cheef Botanicals and the overall UI/UX.</p>

                            <p className="text-white color-hover-title">Hover over each color</p>
          <div className="row container-color-scheme">
          <div
          className="color-1 col-3"
          onMouseOver={applyColorOverlay3}
          onMouseOut={removeColorOverlay3}
        ></div>
        <div
          className="color-2 col-3"
          onMouseOver={applyColorOverlay3}
          onMouseOut={removeColorOverlay3}
        ></div>
        <div
          className="color-3 col-3"
          onMouseOver={applyColorOverlay3}
          onMouseOut={removeColorOverlay3}
        ></div>
        <div
          className="color-4 col-3"
          onMouseOver={applyColorOverlay3}
          onMouseOut={removeColorOverlay3}
        ></div>
          </div>
                       

                        <div className="row my-4">
                            <div className="col-lg-6 col-6 d-md-flex d-none flex-column">
                                <p className="text-white font-weight-bold">Typography:</p>
                                <p className="text-white">Didact Gothic, Sans Serif</p>
                            </div>
                            <div className="col-lg-6 col-12">
                                <Link to="/cheefbotanicals" className="btn  mb-5 "
                                    onClick={ScrollToTop}>View Case Study</Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-5 d-md-flex d-none align-content-center justify-content-center ">
                        <div className="row d-flex align-items-center d-lg-flex d-none">
                            <Link to="/cheefbotanicals" className="img-a" onClick={ScrollToTop}>
                                <img className="img-fluid align-self-center  d-none d-sm-block img-mock-up"
                                    src="images/cheef-mockup.png" alt="Cheef Mockup" height="100%"/>
                            </Link>
                        </div>
                    </div>
                </div>
                </div>
        </div>

                </div>
            </div>
            {/* <!-- End Container 1 --> */}


     {/* </div> */}
      
     
    </>
  )
};

export default Portfolio;
