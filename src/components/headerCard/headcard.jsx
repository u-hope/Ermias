import "./headcard.css";

function HeadCard(props){
    return(
        <div className="headCard">
            <img src={props.image} alt="Header Surounding Image"/>
            <span>{props.text}</span>
        </div>
    );
}

export default HeadCard