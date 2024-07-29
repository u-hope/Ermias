import Card from '../../components/Card/card';
import './service.css';
import backend from "../../Img/backend.png";
import frontend from "../../Img/frontend.png";
import Digital from "../../Img/digital.png";
import machine from "../../Img/machine.png";
import ExCard from '../../components/exCard/exCard';



function Service(props) {

  return (
    <div className='service_main'>
          <div className='service_top'> 
            <div className='service_title'>Skills</div>
          </div>
          <div className='service_bottom'>
            <ExCard myImg={backend} title={"BackEnd Development"} detail={"2 years experience"} techStack={"Nodejs || Python || Javascript"}/>
            <ExCard myImg={frontend} title={"FrontEnd Development"} detail={"3 years experience"} techStack={"Reactjs || HTML || SCSS || Javascript"}/>
            <ExCard myImg={machine} title={"Machine Learning Models Development"} detail={"2 years experience"} techStack={"LLM || Computer Vision "}/>
            <ExCard myImg={Digital} title={"Digital Marketing"} detail={"1 year experience"} techStack={"Strategizing || Posting || Runing Campaigns"}/>
            <ExCard myImg={backend} title={"BackEnd Development"} detail={"2 years experience"} techStack={"Nodejs  || Python || Javascript"}/>
          </div> 
    </div>
  )
}

export default Service
