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
        
  
        <div className="row instagram">
        
        <div class="elfsight-app-8f58b520-5acc-4c0f-a8f8-e339f016c65a" data-elfsight-app-lazy></div>
        </div>
    </div>
    </>
  )
}

export default WorkExperience