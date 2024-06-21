import React from 'react'
import headshot from '/images/headshot.jpg'
import headshotSignature from '/images/abbreviatedSignature3.svg'
import resume from '/images/2023EdwardGSingleton.pdf'
import RecentWorks from './RecentWorks'
import Portfolio from './Portfolio'
import WorkExperience from './WorkExperience'
import Socials from './Socials'



function Homepage() {
 

    return (
        <>
            <div className="container-fluid homepage py-5">
                
                <div className="row d-flex h-75 justify-content-center align-items-center">
                    <div className="col-lg-4">
                        
                        <div className="container-main-img">
                        <div className="socials">
                            <div className="icon-wrapper">
                               <Socials/>
                            </div>
                        </div>
                            <img className="img-fluid rounded-circle" src={headshot} alt="Headshot Img" width={'250px'} />
                            <img className="homepage-signature-img" src={headshotSignature} alt="Headshot signature image" width={'250px'}/>
                            <span className="headshot-text text-white">Edward G. Singleton</span>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <h1 className="text-white mb-3">Front-End Developer</h1>
                        <p className="text-white text-intro-p mb-3">Hey there! Thanks for checking out my portfolio. I am a Front-End Developer &amp; Designer who works with HTML, CSS, JavaScript &amp; Adobe Suite to create stunning websites and graphic assets.</p>
                        <div className="btn-container">
                            
                            <a href={resume} target="_blank" className="btn btn-primary ">View Resume</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="logos">
              <div className="logos-slider">
              <a href="https://www.anthelionhelicopters.com/" target="_blank"><img src="images/logoAnthelion.png" alt="Anthelion helicopters"/></a>
              <a href="https://lairp.org/" target="_blank"><img src="images/logoLAIRP.png" alt="Los Angeles Institute for Restorative Practices"/></a>
              <a href="https://lbwater.org/" target="_blank"><img src="images/logoLB.png" alt="Long Beach Water Department"/></a>
              <a href="https://shipandshore.com/" target="_blank"><img src="images/logoSS.png" alt="Ship &amp; Shore Environmental"/></a>
              <a href="https://hollyweedcbd.com/" target="_blank"><img src="images/hollyweed.png" alt="Hollyweed CBD"/></a>
              <a href="https://cheefbotanicals.com/" target="_blank"><img src="images/cheef-logo-clients.png" alt="Cheef Botanicals"/></a>
              <a href="https://www.alineinc.com/" target="_blank"><img src="images/aline.png" alt="Aline microfluidics"/></a>
              <a href="https://www.fralock.com/" target="_blank"><img src="images/fralock.png" alt="Fralock solutions"/></a>
              <a href="https://www.anthelionhelicopters.com/" target="_blank"><img src="images/logoAnthelion.png" alt="Anthelion helicopters"/></a>
              <a href="https://lairp.org/" target="_blank"><img src="images/logoLAIRP.png" alt="Los Angeles Institute for Restorative Practices"/></a>
              <a href="https://lbwater.org/" target="_blank"><img src="images/logoLB.png" alt="Long Beach Water Department"/></a>
              <a href="https://shipandshore.com/" target="_blank"><img src="images/logoSS.png" alt="Ship &amp; Shore Environmental"/></a>
              <a href="https://hollyweedcbd.com/" target="_blank"><img src="images/hollyweed.png" alt="Hollyweed CBD"/></a>
              <a href="https://cheefbotanicals.com/" target="_blank"><img src="images/cheef-logo-clients.png" alt="Cheef Botanicals"/></a>
              <a href="https://www.alineinc.com/" target="_blank"><img src="images/aline.png" alt="Aline microfluidics"/></a>
              <a href="https://www.fralock.com/" target="_blank"><img src="images/fralock.png" alt="Fralock solutions"/></a>
              
              </div>
            </div>

            <div className="container-fluid container-abt d-flex justify-content-center pb-5">
                <div className="row d-flex justify-content-around">
                    <div className="col-lg-4 container-abt-info d-flex align-items-center flex-column justify-content-center ">
                        <h2 className="text-white">About Me</h2>
                        <img className="hr-abt mb-3" src="images/signature-hr-01.svg" alt="hr" width={'150px'}/>
                        <p className="text-white">As a multidisciplinary professional, I specialize in crafting sophisticated, typography-centric designs and delivering seamless web experiences. With over 6 years of experience using Adobe Suite, including Photoshop, Illustrator, Adobe XD, and Premiere Pro, I have honed my expertise in design and development. My technical proficiency spans design principles, HTML, CSS, JavaScript, command-line operations, React, and WordPress. I am able to construct completely custom WordPress themes and develop React applications from the ground up. I live in Los Angeles with my dogs, Theo and Simon. During my free time you can find me salsa dancing somewhere in Los Angeles. Discover more about my professional journey at <a href="https://edwardtonnn.com/" target="_blank">Edwardtonnn.com</a>
                        </p>

                    </div>
                    <div className="col-lg-6 container-abt-graphic d-flex justify-content-center align-content-center">
       <img className="img-fluid abt-gif my-5" width="100%" height="auto" src="/images/work4.gif" alt="" />       
                    </div>
                </div>     
            </div>

            

        <Portfolio/>
        <RecentWorks/>
        <WorkExperience/>
       

        </>
    )
}

export default Homepage