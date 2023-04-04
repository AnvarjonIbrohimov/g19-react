import React, {Component} from "react";
import './card.css'

class Card extends Component{

    render(){
        return (
        <div className="card__container">
            <div className="card__image"> image</div>
            <h4 className="card__title">{this.props.title}</h4>
            <p className="card__desc"> {this.props.country} </p>
            <p className="card__price">${this.props.price}</p>
            <button>Add to card</button>

        </div>
        ) 
    }
}

export default Card;
