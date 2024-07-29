import './card.css';


function Card(props) {

  return (
    <div className='card_main'>
        <div class="flip-card-inner">
        <div className='cardFront'>
          <div className='card_top'>
            <img alt='topimg' src={props.myImg}/>
          </div>
          <div className='card_bottom'>
                <div className='card_title'>{props.title}</div>
                <div className='card_text'>{props.detail}</div>
          </div>
        </div>
        
        <div className='cardBack'>
          <div class="flip-card-back">
            <h1>John Doe</h1> 
            <p>Architect & Engineer</p> 
            <p>We love that guy</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Card
