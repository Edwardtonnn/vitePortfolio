import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {Link} from "react-router-dom";
import Socials from "./Socials"
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);


const Header = () => {

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  let mOpen = useRef(null);
  let mClose = useRef(null);
 const navbarRef = useRef(null)

  useEffect(() => {  
    
    const showNav = gsap.fromTo(navbarRef.current,
      {
        opacity:0
      },
      {
        opacity:1,
        duration:0.4
      }).progress(1);
      ScrollTrigger.create({
        start:"top top",
        end:"max",
        onUpdate:(self)=>{
          self.direction === -1 ?
          showNav.play()
          : showNav.reverse()
        }
      })

    let tll = new gsap.timeline();  

    mOpen.addEventListener('click', () => {

      tll.to('.menu',0,{
        visibility:'visible'
      })
      .to(mOpen, 0, {
        opacity:0,
        display:'none'})
      .to(mClose,0,{
        opacity:1 })
      .to('.menu-left', 1, {
        left: 0,
        ease: 'expo.inOut',
        duration:.5})
      .to('.menu-right', 1, {
        left: '50vw',
        ease: 'expo.inOut',
        duration:.5}, '-=1')   
     
    });

    mClose.addEventListener('click', () => {

      tll.to(mClose,0,{
        opacity:0, })
      .to(mOpen, 0, {
        opacity:1,
        display:'block'})
      
      .to('.menu-left', 1, {
        left: '-50vw',
        ease: 'expo.inOut',
        duration:.5})
      .to('.menu-right', 1, {
        left: '100vw',
        ease: 'expo.inOut',
        duration:.5}, '-=1')
      .to('.menu',0,{
        visibility:'hidden'
        
      })     
    });

  

   
   
  }, []);

  return (
    <>
    <div className="container-fluid nav-wrapper navbar" ref={navbarRef}>        
      <div className="row py-4">
        <div className="col-6">
        <Link to="/" onClick={ScrollToTop}>
          <span className="logo"><img src="images/logo.svg" alt="Signature" width="200px" /></span>
        </Link>
        </div>
        {/* Contains Menu Open and Menu Close  */}
        <div className="col-6 d-flex align-items-center justify-content-end menu-open-close-wrapper">
          <div className="menu-close">
            <div className="menu-close-img">              
            <img ref={el =>(mClose = el)} className="img-close-icon" src="images/close-img.png" alt="close image" height={'20px'} width={'20px'}/>
            </div>   
          </div> 
          <div className="menu">
              <div className="menu-left">
                <div className="spacer"></div>
                <div className="menu-links">
                  <div className="menu-link">
                    <Link to="/" onClick={ScrollToTop}>Home</Link>
                    </div>
                  <div className="menu-link">
                    <span>Portfolio</span>
                    </div>
                  <div className="sub-items">
                  <div className="menu-sublink">
                    <Link to="/mangan" onClick={ScrollToTop}>Energy Company</Link>
                    </div>
                  <div className="menu-sublink">
                    <Link to="/shipandshore" onClick={ScrollToTop}>Environmental Company</Link>
                    </div>
                  <div className="menu-sublink">
                    <Link to="/cheefbotanicals" onClick={ScrollToTop}>E-Commerce Company</Link>
                    </div>
                  </div>
                  <div className="menu-link">
                  <a href="/images/2023EdwardGSingleton.pdf" >Resume</a>
                    </div>
                  
                </div>
              </div>
              <div className="menu-right">
                <div className="spacer"></div>
                <div className="contact">
                  <div className="mail">
                    <h5 className="text-contact-title">Contact</h5>
                    
                    <ul class="text-white list-unstyled nav-contact">
                        <li>Edward Giovannie Singleton</li>
                        <li>Los Angeles, California</li>
                        <li><a href="tel:323-365-7776">+1(323)365-7776</a></li>
                        <li><a href="mailto:edwardtonnn@gmail.com">Send Email</a></li>
                       
                       
                    </ul>
                  </div>
                  <div className="socials">
                  <Socials/> 
                  </div>
                </div>
              </div>
            </div>
            <div ref={el => (mOpen = el)} className="menu-open">=</div>   
              
         
          </div>
          {/* End Menu Open and Meny Close  */}
      </div>
    </div>
    </>
  )
}

export default Header
