import React, { Component } from 'react'

class DollorToSom extends Component {
    constructor(props){
        super(props)
        this.state = {
            dollar: null,
            sum: null,
        }
    }
  render() {
    const onChange = e =>{
        this.setState(prev => ({...prev, dollar: +e.target.value}))
    };

    const transfer = () => {
        let result = 15000 * this.state.dollar
        this.setState(prev => ({prev, sum: result}))
    }

    return (
      <div>
        <h2>Dollarni kiriting [{" "}] 1$ o'zbek summasiga 15000 so'mni tashkil etadi!</h2>
        <div>
            Dollarni Kiriting <input onChange={onChange} type="number" /> 1$ O'zbek summasida 15 000 so'mni tashkil etadi! {" "}
            <button onClick={transfer}>Transfer</button>
        </div>
        <hr />
        {this.state.dollar && this.state.sum ? (
            <p>Siz kiritgan dollar {this.state.dollar}$ Uzb so'miga esa {this.state.sum}ga teng </p>
        ) : ( " " )
        }
      </div>
    )
  }
}


export default DollorToSom;