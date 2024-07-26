import Navbar from '../../components/navbar/navbar';
import './header.css';
import computer from "../../Img/comp.png";
import github from "../../Img/Header/github.png";
import llm from "../../Img/Header/llm.png";
import reactjs from "../../Img/Header/reactjs.png";
import nodejs from "../../Img/Header/nodejs.png";
import pythons from "../../Img/Header/python.png";
import computerVision from "../../Img/Header/computerVision.png";
import HeadCard from '../../components/headerCard/headcard';


function Header(props) {

  return (
    <div className='header_main'>  
       <Navbar phone='0913-45-78-91' phoneTwo=''/>
       <div className='header_body'>
          <div className='header_left'> 
              <div className='header_name'>{props.headerName}</div>
              <div className='header_motto'>{props.headerMotto}</div>
              <div className='header_button'>Download Resume </div>
          </div>

          <div className='header_right'> 

              <img src={computer} alt='computerSvg' className='computer'/>
              <div></div>
              <HeadCard image={pythons}  text={"Python"}/>
              <HeadCard image={reactjs}  text={"Reactjs"}/>
              <HeadCard image={nodejs}  text={"Nodejs"}/>
              <HeadCard image={llm}  text={"Large Langage Models"}/>
              <HeadCard image={computerVision}  text={"Computer Vision"}/>
              <HeadCard image={github}  text={"Github"}/>
              
          </div>  
       </div>
    </div>
  )
}

export default Header;
