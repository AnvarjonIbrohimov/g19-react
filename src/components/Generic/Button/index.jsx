import React, { Component } from 'react'
import {Container} from './style';

class Button extends Component {
  render() {
    return <Container 
    style={this.props.style}
            disabled={this.props.disabled && "disabled"}
            onClick={this.props.onClick} 
            type={this.props.type}>

          {this.props.icon && this.props.icon}{this.props.children}
        </Container>
  }
}
export default  Button;