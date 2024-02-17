import { Component } from "react";
import './card-component.styles.css'

class CardComponent extends Component {
    render() {
        const {name,id,email} = this.props.monster
        return (
            <div className='card-container'>
                    <img alt={`monster ${name}`} src={`https://robohash.org/${id*20}?set=set2`}/>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
        )
    }
}

export default CardComponent;