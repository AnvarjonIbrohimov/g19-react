import React, {Component} from "react";
class Button extends Component{
    render(){
        return <button style={{backgroundColor: this.props.bg, color: this.props.colorr}}>{this.props.title}</button>
    }
}

export default Button;