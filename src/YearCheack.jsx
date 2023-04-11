import React, { Component } from 'react'

export default class YearCheack extends Component {
    constructor(props){
        super(props)
        this.state = {
            yosh: null,
            transfer: null,
        }
    }
  render() {

    const onChange = e => {
        this.setState(prev => ({...prev, yosh: e.target.value}))
    };
    const transfer = () => {
        let natija = 2023 - this.state.yosh 
        this.setState(prev => ({...prev, transfer: natija}))
    }
    return (
      <div>
        <h2>Yoshni aniqlovchi Dastur Tuzilsin</h2>
        <div>Tyg'ilgan sanani kiriting <input onChange={onChange} type="number"/> {""} <button onClick={transfer}>Transfer</button></div>
        {(this.state.yosh  && this.state.transfer ? (
            <p>Sizning hozirgi yoshingiz{" "}{this.state.transfer} {" "}dasiz</p>
        ): (""))

        }
      </div>
    )
  }
}
