import { Component } from "react";

class SearchBox extends Component {
    render () {


        return <input onChange={this.props.onSearchChangeHandler} placeholder={this.props.placeholder} type="search" className={this.props.className}/>
    }
}

export default SearchBox