import React, { Component } from 'react'

export default class NumOrtaArf extends Component {
    constructor(props){
        super(props)
        this.state = {
            son1: null,
            son2: null,
            natija: null,
        }
    }
  render() {
    const onChange1 = e => {
        this.setState(prev => ({...prev, son1: +e.target.value}))
    };
    const onChange2 = e => {
        this.setState(prev => ({...prev, son2: +e.target.value}))
    };
    const onClick = () => {
        let result = this.state.son1 + this.state.son2;
        this.setState(prev => ({...prev, natija: result / 2 }))
    }




    return (
      <div>
        <h3>Sonning o'rta arfmetigini topib beruvchi dastur tuzing!</h3>
        <div>
            Son - 1 <input onChange={onChange1} type="number" />
            Son - 2 <input onChange={onChange2} type="number" />
            {" "}
            <button onClick={onClick}>Go</button>
            {this.state.son1 && this.state.son2 ? (
                 <p>
                    Sonning o'rta arfmetik {" "}
                    {this.state.son1} 
                    {" "}
                    {this.state.son2} {" "}
                    yig'indisi =
                    {" "}
                    {this.state.natija} ga teng
                </p>
            ) : (" ")

            }
         
        </div>
      </div>
    )
  }
}
