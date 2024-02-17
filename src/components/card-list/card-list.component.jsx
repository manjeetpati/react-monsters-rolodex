import { Component } from "react";
import './card-list.styles.css'
import CardComponent from "../card/card-component.component";

class CardList extends Component {
    render() {
        const {monsters} = this.props
        return (
            <div className='card-list'>
            {monsters.map((monster)=>{
                return (
                <CardComponent key={monster.id} monster={monster}/>
            )
            })}
            </div> 
        )
    }
}

export default CardList;