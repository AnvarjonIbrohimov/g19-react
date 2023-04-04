import React, {Component} from "react";
import './navbar.css'
class Navbar extends Component {
    constructor(props){
        super(props)
    }


    render() {
        console.log(this)
        return  <header className="header">Navbar {this.props.title} -- {this.props.count}  </header>
    };
};

export default Navbar;











