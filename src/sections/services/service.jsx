import Card from '../../components/Card/card';
import './service.css';
import backend from "../../Img/backend.png";
import frontend from "../../Img/frontend.png";
import Digital from "../../Img/digital.png";
import machine from "../../Img/machine.png";



function Service(props) {

  return (
    <div className='service_main'>
          <div className='service_top'> 
            <div className='service_title'>Skills</div>
          </div>
          <div className='service_bottom'>
            <Card myImg={backend} title={"BackEnd Development"} detail={"2 years experience"}/>
            <Card myImg={frontend} title={"FrontEnd Development"} detail={"3 years experience"}/>
            <Card myImg={machine} title={"Machine Learning Models Development"} detail={"2 years experience"}/>
            <Card myImg={Digital} title={"Digital Marketing"} detail={"1 year experience"}/>
            <Card myImg={backend} title={"BackEnd Development"} detail={"2 years experience"}/>
          </div> 
    </div>
  )
}

export default Service
