import React from 'react'
import GoogleMapEmbed from './GoogleMapEmbed'
import Socials from './Socials'
import {Link} from "react-router-dom";




function footer() {
    const ScrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      };

  return (
   <>
   <footer className="container-fluid py-5">
    <div className="row d-flex justify-content-between align-items-center">
        <div className="col-lg-4 mb-4">
      
            {/* <!-- modify this form HTML and place wherever you want your form --> */}
            
            <p className="text-white text-center mb-5 fw-normal">How can I help?</p>
            <form
            action="https://formspree.io/f/mgebnavz"
            method="POST"
            >
            <label>
                Email:
                <input type="email" name="email" />
            </label>
            <label>
                Message:
                <textarea name="message"></textarea>
            </label>
            {/* <!-- your other form fields go here --> */}
            <button type="submit">Send</button>
            </form>
        </div>
        <div className="col-lg-8 col-md-12 container-footer-info d-flex align-items-center justify-content-center">
            <div className="row d-flex align-items-center justify-content-center">                
                <div className="col-lg-4 col-md-12 my-3 p-3 ">
                <p class="text-white fw-normal">Contact</p>
                    <ul class="text-white list-unstyled">
                        <li>More about me at<a target="_blank" href="https://edwardtonnn.com/"> Edwardtonnn.com</a>. Thanks!
                        </li>
                       
                       
                    </ul>
                    <div class="container-social-footer ">                            
                      <Socials/>                   
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 my-3 p-3 ">
                    <p className="text-white fw-normal">Details</p>
                    <p className="text-white">This portfolio was built using <a href="https://vitejs.dev/" target="_blank">Vite.JS</a>, <a href="https://react.dev/" target="_blank">React</a> and <a href="https://greensock.com/" target="_blank">GSAP.JS</a> View <Link onClick={ScrollToTop} to="/privacy">Privacy Policy</Link> and users right to <Link to="/deletedata" onClick={ScrollToTop}> Delete Data </Link></p>
                </div>
                <div className="col-lg-4 col-md-12 my-3 p-3 ">
                <div className=" d-flex flex-column location-wrapper">                    
                    <div id="location">
                        <GoogleMapEmbed/>                           
                    </div>
                    <p className="text-white text-center" >
                    <ion-icon name="navigate-outline" role="img" className="md hydrated" aria-label="navigate outline"></ion-icon>&nbsp; Located in <b>South Gate, CA</b>
                    </p>
                </div>
            </div>                
        </div>            
        </div>
    </div>
   </footer>
   </>
  )
}

export default footer
