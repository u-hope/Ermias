import React, { useRef, useEffect, useState } from 'react';
import './about.css';

function About(props) {
  const myRef = useRef();
  const [myElementIsVisible, setMyElementIsVisible] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMyElementIsVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);

    // Add click event listeners to the .aboutImg elements
    const aboutImgs = document.querySelectorAll('.aboutImg');
    aboutImgs.forEach((aboutImg) => {
      aboutImg.addEventListener('click', (e) => {
        removeActiveClasses();
        aboutImg.classList.add('active');
      });
    });

    // Clean up the event listeners on component unmount
    return () => {
      aboutImgs.forEach((aboutImg) => {
        aboutImg.removeEventListener('click', (e) => {
          removeActiveClasses();
          aboutImg.classList.add('active');
        });
      });
    };
  }, []);

  function removeActiveClasses() {
    const aboutImgs = document.querySelectorAll('.aboutImg');
    aboutImgs.forEach((aboutImg) => {
      aboutImg.classList.remove('active');
    });
  }

  return (
    <div className="about_main">
      <div className="about_top">
        <div className="about_title" style={{color:"#00859B"}}>About Us</div>
        <div className="about_body" style={{textAlign:"center",color:"#fff"}}>
        {/* We work to increase the visibility and awareness of gender equality issues while elevating the voices of underrepresented communities. We do this by facilitating networking and collaboration between a wide range of organizations, NGOs, and advocates in order to foster synergies and collective action. We also support grassroots movements in influencing policy and driving systemic change through strategic advocacy efforts. By making essential resources, educational materials, and empowering tools easily accessible, we empower individuals and strengthen the capacity of gender equality champions.  */}
        I am a skilled and motivated Software Engineer actively pursuing a Master’s degree in Artificial Intelligence (AI). With a strong
foundation in software development and a deep understanding of AI concepts and techniques, I utilize new technologies to
develop innovative solutions that address complex challenges.
        </div>
         </div> 
      <div className={`about_bottom ${myElementIsVisible ? 'aboutanim' : 'about'}`} ref={myRef}>
        <div className="aboutContainer">
          <div className="aboutImg One ">
            <p>Artificial Intelligence Engineer</p>
            <span id='textTool'>Click to View</span>
          </div>
          <div className="aboutImg Two">
            <p>Frontend Design</p>
            <span id='textTool'>Click to View</span>
          </div>
          <div className="aboutImg Three active">
            <p>This is Me</p>
            <span id='textTool'>Click to View</span>
          </div>
          <div className="aboutImg Four">
            <p>Digital Marketing</p>
            <span id='textTool'>Click to View</span>
          </div>
          <div className="aboutImg Five">
            <p>Software Design and Development</p>
            <span id='textTool'>Click to View</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;