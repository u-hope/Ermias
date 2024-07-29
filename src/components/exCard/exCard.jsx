import './exCard.css';


function ExCard(props) {

  return (
    <div className='flip'>
        <div className='cardFront front'>
          <div className='card_top'>
            <img alt='topimg' src={props.myImg}/>
          </div>
        </div>
        
        <div className='back'>
          <div class="flip-card-back">
            <h1>{props.title}</h1> 
            <p>{props.detail}</p>
            <p style={{color:"greenyellow"}}>{props.techStack}</p>
        </div>
        </div>
        </div>
  )
}

export default ExCard


