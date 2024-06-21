import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';


const RecentWorks = () => {

  

  // Recent Works 
  // LI hover background change 
  const [currentImage, setCurrentImage] = useState('work1.gif');
  const designsImage = useRef(null);
  const workList = useRef(null);
  const recentDesignsContainer = useRef(null);

  const workImages = ['bgwork1.jpg', 'bgwork2.jpg', 'bgwork3.jpg', 'bgwork4.jpg'];

  useEffect(() => {
    const listItems = workList.current.querySelectorAll('li');

    const handleMouseOver = (item, index) => {
      const newImage = item.id;

      if (newImage !== currentImage) {
        gsap.to(designsImage.current, {
          duration: 0.3,
          opacity: 0,
          onComplete: () => {
            setCurrentImage(newImage);
            gsap.to(designsImage.current, { duration: 0.3, opacity: 1 });
          },
        });

        recentDesignsContainer.current.style.backgroundImage = `url(images/${workImages[index]})`;
        gsap.to(recentDesignsContainer.current, { duration: 0.5, opacity: 1 });
      }
    };

    listItems.forEach((item, index) => {
      item.addEventListener('mouseover', () => handleMouseOver(item, index));
    });

    return () => {
      listItems.forEach((item, index) => {
        item.removeEventListener('mouseover', () => handleMouseOver(item, index));
      });
    };
  }, [currentImage, workImages]);

  return (
    <>
      <div ref={recentDesignsContainer} className="container-fluid container-recent-works py-5" id="recentDesignsContainer my-5">
        <div className="row d-flex justify-content-between">
          <div className="col-lg-3">
            <h2 className="text-white text-recent-work-title">Recent Works</h2>
            <img className="hr" src="images/signature-hr2-02.svg" alt="Recent Works HR" />

            <ul ref={workList} className="ul-recent-designs text-white list-unstyled work-list d-lg-block d-none">
              <li id="work1.gif">Modular Component Design</li>
              <li id="work2.gif">Component Integration</li>
              <li id="work3.gif">GSAP Timeline Reversal</li>
              <li id="work4.gif">Creative Experience</li>
             
            </ul>


            {/* Accordion Start  */}
            <Accordion className="d-lg-none d-block py-5" defaultActiveKey="0">
      <Accordion.Item  eventKey="0">
        <Accordion.Header className="py-3">Modular Component Design</Accordion.Header>
        <Accordion.Body className="py-3">
         <img className="img-fluid" src="images/work1.gif"/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Component Integration</Accordion.Header>
        <Accordion.Body>
        <img className="img-fluid" src="images/work2.gif"/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>GSAP Timeline Reversal</Accordion.Header>
        <Accordion.Body>
        <img className="img-fluid" src="images/work3.gif"/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Creative Experience</Accordion.Header>
        <Accordion.Body>
        <img className="img-fluid" src="images/work4.gif"/>
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
            {/* Accordion End  */}
          </div>
          <div className="col-lg-7 d-lg-flex d-none">
            <img ref={designsImage} id="designs" className="recentWorks img-fluid" src={`images/${currentImage}`} alt="Works" />
          </div>
        </div>
      
      </div>
    </>
  );
};

export default RecentWorks;
