import React, { Component } from 'react'
import {Container} from './style';

class Button extends Component {
  render() {
    return <Container type={this.props.type}>
        {this.props.icon && this.props.icon}{this.props.children}
        </Container>
  }
}
export default  Button;