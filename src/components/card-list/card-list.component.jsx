import { Component } from "react";

class CardList extends Component {
    render() {
        console.log(this.props)
        const { monsters } = this.props;
        return <div>{monsters.map((monster) => {
            return <div key={monster.id}>{monster.name}</div>
        })}</div>
    }
}

export default CardList