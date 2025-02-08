import React from 'react'
import headshot from '/images/headshot.jpg'
import headshotSignature from '/images/abbreviatedSignature3.svg'
// import resume from '/images/2023EdwardGSingleton.pdf'
import RecentWorks from './RecentWorks'
import Portfolio from './Portfolio'
import WorkExperience from './WorkExperience'
import Socials from './Socials'
import AboutMeCards from './AboutMeCards'
import CompanyLogoSlider from  './CompanyLogoSlider'
import Accordion from '../utils/accordionToggle';
import NoiseCanvas from './NoiseCanvas'

// generation noise 
function addNoiseToElement(selector) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    // Create a canvas element and append it as a child
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Match the size of the canvas to the element
    canvas.width = element.offsetWidth;
    canvas.height = element.offsetHeight;

    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none'; // Prevent blocking clicks
    canvas.style.zIndex = '1'; // Adjust z-index to sit above other content
    element.style.position = 'relative'; // Ensure the parent element has a positioning context

    element.appendChild(canvas);

    function drawNoise() {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const pixels = imageData.data;

      for (let i = 0; i < pixels.length; i += 4) {
        const value = Math.random() * 255; // Grayscale value
        pixels[i] = pixels[i + 1] = pixels[i + 2] = value; // R, G, B
        pixels[i + 3] = 20; // Alpha for subtle transparency
      }

      ctx.putImageData(imageData, 0, 0);
      requestAnimationFrame(drawNoise); // Animate continuously
    }

    drawNoise();

    // Update canvas size on window resize
    window.addEventListener('resize', () => {
      canvas.width = element.offsetWidth;
      canvas.height = element.offsetHeight;
    });
  });
}

// Apply the noise to elements with the `.noise` class
addNoiseToElement('.noise');




function Homepage() {


  return (
    <>
   <div className="container-fluid homepage py-5 animated-gradient">
        <NoiseCanvas className="noise-layer" />
        
        <div className="row d-flex h-75 justify-content-center align-items-center">
          <div className="col-lg-4">

            <div className="container-main-img">
              <div className="socials">
                <div className="icon-wrapper">
                  <Socials />
                </div>
              </div>
              <img className="img-fluid rounded-circle" src={headshot} alt="Headshot Img" width={'250px'} />
              <img className="homepage-signature-img" src={headshotSignature} alt="Headshot signature image" width={'250px'} />
              <span className="headshot-text text-white">Edward G. Singleton</span>
            </div>
          </div>
          <div className="col-lg-8 container-home-text">
            <p className="text-white text-uppercase">Let Me Introduce Myself</p>
            <h1 className="text-white mb-3">Front-End Developer</h1>
            <p className="text-white text-intro-p mb-3">A seasoned Front-End Developer &amp; Designer with over 8 years of experience who works with HTML, CSS, JavaScript, Adobe &amp; Figma to create stunning websites and graphic assets.</p>
            <p className="text-white mb-2">Currently based in: <del>Mexico, Dominican Republic,</del> <b> Los Angeles, CA</b></p>
            <p className="text-white">Highly Fluent: Spanish, <b>English</b></p>
            <div className="btn-container">

              {/* <a href={resume} target="_blank" className="btn btn-primary ">View Resume</a> */}
            </div>
          </div>
        </div>
        
      </div>
      
        
      

      <CompanyLogoSlider/>

      {/* About Me Section  */}

      <div className="container-fluid container-abt d-flex justify-content-center pb-5 min-height-110vh">
        <div className="row d-flex justify-content-around">
          <div className="col-lg-4 container-abt-info d-flex align-items-center flex-column justify-content-center ">
            <h2 className="text-white title-lg">About Me</h2>
            <img className="hr mb-5" src="images/signature-hr-port-01.svg" alt="signature" width={'150px'} />
            <p className="text-white justify-text">&nbsp;&nbsp;&nbsp;&nbsp;A multidisciplinary professional, I specialize in crafting sophisticated, typography-centric designs and delivering seamless web experiences. With over 7 years of experience using Adobe Suite, including <strong>Photoshop, Illustrator and Figma</strong>. My technical proficiency spans design principles, <strong>HTML, CSS, JavaScript, command-line operations, React, and WordPress.</strong> 
            </p>

            <Accordion
            title="Additional Information"
            description={
              <>
                I am able to construct completely custom WordPress themes and develop React applications from the ground up. I live in Los Angeles with my girlfriend of 8 years, Andrea, and our three dogs, Toby, Theo, and Simon. During my free time, you can find me teaching salsa and bachata dancing at Lucy Avalos Community Center. Learn more about me at{' '}
                <a className='link' href="https://edwardtonnn.com/" target="_blank" rel="noopener noreferrer">Edwardtonnn.com</a>.
              </>
            }
          />



          </div>
          <div className="col-lg-7 container-abt-graphic d-flex justify-content-center align-content-center">

            <AboutMeCards />

          </div>
        </div>
      </div>



      <Portfolio />
      <RecentWorks />
      <WorkExperience />


    </>
  )
}

export default Homepage