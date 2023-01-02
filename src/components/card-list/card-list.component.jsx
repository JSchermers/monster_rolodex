// import { Component } from "react";
import Card from "./../card/card.component"

// class CardList extends Component {
//     render() {
//         console.log(this.props)
//         const { monsters } = this.props;
//         return <div>{monsters.map((monster) => {      

//             return <Card key={monster.id} monster={monster}/>
//         })}</div>
//     }
// }

const CardList = ({monsters}, forwardedRef) => (

    <div>{monsters.map((monster) => {      

        return <Card key={monster.id} monster={monster}/>
    })}</div> )


export default CardList