import './card.css';


function Card(props) {

  return (
    <div className='card_main'>
          <div className='card_top'>
            <img alt='topimg' src={props.myImg}/>
          </div>
          <div className='card_bottom'>
                <div className='card_title'>{props.title}</div>
                <div className='card_text'>{props.detail}</div>
          </div>
    </div>
  )
}

export default Card
