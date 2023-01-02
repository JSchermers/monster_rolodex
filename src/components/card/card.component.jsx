// import { Component } from "react";

// class Card extends Component {
//     render() {
//         const {id, name, email} = this.props.monster;
        
//         return <div>
//         <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
//         <div>{name}</div>
//         <div>{email}</div>
//         </div>
//     }
// }

const Card = ({monster : {id, name, email}}) =>        
    <div>
    <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
    <div>{name}</div>
    <div>{email}</div>
    </div>


export default Card