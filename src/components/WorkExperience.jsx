import React from 'react'

function WorkExperience() {
  return (
    <>
    <div className="container-fluid container-work-experience">
        <div className="row my-5">
            <div className="col-lg-12">

                    <h3 className="text-white spacer-title">Work Experience</h3>
                    <img className="hr" src="images/signature-hr2-02.svg" alt="Work Experience HR" />
            </div>     
               
        </div>
        <div className="row d-flex justify-content-between ">
            <div className="col-lg-5">
                <div className="mb-5 text-white d-flex flex-column container-job-experience">
                    <h4>
                        Front-End Developer
                    </h4>
                    <span className="company">Influx Marketing</span>
                  
                    <span className="years">2023 - 2024</span>
                    <span className="description-title">Description:</span>
                    <span className="description">I actively managed and enhanced client websites, employing advanced technologies such as HTML, CSS3, SCSS, jQuery, PHP, and Apache. My responsibilities included custom CSS development, image management, form handling, and server configuration. Additionally, I oversaw the creation and maintenance of essential user endpoints to ensure an optimal user experience.</span>
                </div>
                <div className="mb-5 text-white d-flex flex-column container-job-experience">
                    <h4>
                        Front-End Project Manager
                    </h4>
                    <span className="company">Coalition Technologies</span>
                  
                    <span className="years">2022 - 2023</span>
                    <span className="description-title">Description:</span>
                    <span className="description">As an experienced project manager, I excel in reviewing project scopes, devising and executing plans, defining scope, allocating resources, and managing risks. I ensure timely, budget-conscious project completion while adhering to standards and collaborating with cross-functional teams. My expertise lies in balancing usability and performance, attending client meetings, developing quality assurance processes, and staying abreast of industry trends to identify client solution opportunities.</span>
                </div>

                

            </div>
            <div className="col-lg-5">
                <div className="mb-5 text-white d-flex flex-column container-job-experience">
                    <h4>
                        Front-End Developer
                    </h4>
                    <span className="company">Cheef Holdings</span>
                  
                    <span className="years">2021 - 2022</span>
                    <span className="description-title">Description:</span>
                    <span className="description">My primary responsibilities include refining page designs with Elementor, integrating site functionality via diverse plugins, and efficiently organizing content. This entails structuring extensive text, crafting web components such as toggles, accordions, and carousels, and optimizing images through compression techniques that maintain quality.</span>
                </div>

                <div className="mb-5 text-white d-flex flex-column container-job-experience">
                    <h4>
                        Front-End Developer
                    </h4>
                    <span className="company">TLG Marketing</span>
                  
                    <span className="years">2018 - 2021</span>
                    <span className="description-title">Description:</span>
                    <span className="description">Responsible for the design, development, and management of over 90 client websites across various industries, including medical, legal, and governmental sectors. At the outset of each project, I created website mock-ups using Adobe XD and subsequently developed functional websites utilizing WordPress and Elementor. Concurrently, I produced assets for other clients, ensuring the timely completion of all projects.</span>
                </div>

            </div>
        </div>
        <div className="row my-5">
            <div className="col-lg-12 text-center">

                    <h3 className="text-white spacer-title">Clients</h3>
                    <img className="hr" src="images/signature-hr2-02.svg" alt="Work Experience HR" />
            </div>     
               
        </div>
       
        <div className="row my-5">
        <div className="images-parent-container">
                    <div className="item-client-logo ">
                        <a href="https://www.anthelionhelicopters.com/" target="_blank"><img src="images/logoAnthelion.png" alt="Anthelion helicopters"/></a>
                    </div>
                   
                    <div className="item-client-logo ">
                        <a href="https://lairp.org/" target="_blank"><img src="images/logoLAIRP.png" alt="Los Angeles Institute for Restorative Practices"/></a>
                    </div>
                    <div className="item-client-logo ">
                        <a href="https://lbwater.org/" target="_blank"><img src="images/logoLB.png" alt="Long Beach Water Department"/></a>
                    </div>
                    <div className="item-client-logo ">
                        <a href="https://shipandshore.com/" target="_blank"><img src="images/logoSS.png" alt="Ship &amp; Shore Environmental"/></a>
                    </div>
                   
                   
                    <div className="item-client-logo ">
                        <a href="https://hollyweedcbd.com/" target="_blank"><img src="images/hollyweed.png" alt="Hollyweed CBD"/></a>
                    </div>
                    <div className="item-client-logo ">
                        <a href="https://cheefbotanicals.com/" target="_blank"><img src="images/cheef-logo-clients.png" alt="Cheef Botanicals"/></a>
                    </div>
                  
                    <div className="item-client-logo ">
                        <a href="https://www.alineinc.com/" target="_blank"><img src="images/aline.png" alt="Aline microfluidics"/></a>
                    </div>
                    <div className="item-client-logo ">
                        <a href="https://www.fralock.com/" target="_blank"><img src="images/fralock.png" alt="Fralock solutions"/></a>
                    </div>
                </div>

        </div>
    </div>
    </>
  )
}

export default WorkExperience