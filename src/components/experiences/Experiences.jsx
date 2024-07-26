import Card from '../Card/card';
import './experiences.css';
import backend from "../../Img/backend.png";
import frontend from "../../Img/frontend.png";
import Digital from "../../Img/digital.png";
import machine from "../../Img/machine.png";

function Experiences(props) {

  return (
    <div className='experience_main'>
        <div className="ex-wrapper">
                    <div className="exLeft">
                        <div className="section-heading">
                            <h4>My Projects</h4>
                            <div className="line-dec"></div>
                            <p>
                            As a seasoned software engineer, I bring a unique blend of skills 
                            and experiences to the table, including 1 year as a freelance social 
                            media manager, 2 years as a front-end website developer using HTML5, CSS, JavaScript 
                            and ReactJS, 1 year as a JavaScript developer working with Node.js and Express.js, 
                            and 2 years as a machine learning engineer proficient in Python, large language models, 
                            computer vision, and recommender systems. Whether you need a social media strategist, 
                            a front-end virtuoso, a back-end wizard, or an AI trailblazer, I possess the versatile skill 
                            set to tackle your most complex software engineering challenges. 
                            Let's collaborate and unlock new possibilities together.
                            </p>
                        </div>
                    </div>
                    <div className='leftWrapper'>
                    <div className="filter-categories">
                                <ul className="project-filter">
                                    <li className="filter" data-filter="all"><span>Show All</span></li>
                                    <li className="filter" data-filter="webdesign"><span>Webdesign</span></li>
                                    <li className="filter" data-filter="socialmedia"><span>Social Media</span></li>
                                    <li className="filter" data-filter="machinelearning"><span>Machine Learning Model</span></li>
                                    <li className="filter" data-filter="work"><span>Work Experience</span></li>
                                </ul>
                            </div>
                    <div className="exRight">
                    <Card myImg={backend} title={"BackEnd Development"} detail={"2 years experience"}/>
                    <Card myImg={frontend} title={"FrontEnd Development"} detail={"3 years experience"}/>
                    <Card myImg={machine} title={"Machine Learning Models Development"} detail={"2 years experience"}/>
                    <Card myImg={Digital} title={"Digital Marketing"} detail={"1 year experience"}/>
                    <Card myImg={backend} title={"BackEnd Development"} detail={"2 years experience"}/>
                  
                   </div>
                   </div>
            </div> 
    </div>
  )
}

export default Experiences
