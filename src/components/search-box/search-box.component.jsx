// import { Component } from "react";
import './search-box.style.css'

// class SearchBox extends Component {
//     render () {
//         return <input onChange={this.props.onSearchChangeHandler} placeholder={this.props.placeholder} type="search" className={this.props.className}/>
//     }
// }

const SearchBox = ({onSearchChangeHandler, placeholder, className}) => {
    return <input onChange={onSearchChangeHandler} placeholder={placeholder} type="search" className={className}/>
}

export default SearchBox