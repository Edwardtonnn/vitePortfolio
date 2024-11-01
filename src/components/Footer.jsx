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

   


   <footer>
   <div className="footer">

<div class="item-1">
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
<div class="item-2">
<p class="text-white fw-normal">Contact</p>
                <ul class="text-white list-unstyled footer-contact">
                    <li>Edward Giovannie Singleton</li>
                    <li>Los Angeles, California</li>
                    <li><a href="tel:323-365-7776">+1(323)365-7776</a></li>
                    <li><a href="mailto:edwardtonnn@gmail.com">Edwardtonnn@gmail.com</a></li>
                   
                   
                </ul>
                <div class="container-social-footer ">                            
                  <Socials/>                   
                </div>
</div>
<div class="item-3">
<p className="text-white fw-normal">Details</p>
<p className="text-white">This portfolio was built using <a href="https://vitejs.dev/" target="_blank">Vite.JS</a>, <a href="https://react.dev/" target="_blank">React</a> and <a href="https://greensock.com/" target="_blank">GSAP.JS</a> View <Link onClick={ScrollToTop} to="/privacy">Privacy Policy</Link> and users right to <Link to="/deletedata" onClick={ScrollToTop}> Delete Data </Link></p>
</div>
<div class="item-4">
<div id="location">
                    <GoogleMapEmbed/>                           
                </div>
                <p className="text-white text-center" >
                <ion-icon name="navigate-outline" role="img" className="md hydrated" aria-label="navigate outline"></ion-icon>&nbsp; Located in <b>South Gate, CA</b>
                </p>
</div>
</div>
   </footer>
   </>
  )
}

export default footer
