import React, { Component } from 'react'
import "./style.css"

class Webbrain extends Component {
    constructor(props){
        super(props) 
            this.state = {
              data:  [
                {id: 1, name:"Islom Abdulahadov", status: "student", age: 20 },
                {id: 2, name:"Nurmat Rajabov", status: "Programmer", age: 24 },
                {id: 3, name:"Alisher Boyzoqov", status: "Biolog", age: 24 },
                {id: 4, name:"Sherali Bolqiboyev", status: "Artist", age: 20 },
            ]
            }
    }
  render() {
    return (

      <div className='container'>
        <div className='center'>
            <h2>Webbrain Academy</h2>
            <input className='inp__search' type="text" placeholder='Search...' />
            <select name="" id="">
                <option value="id">ID</option>
            </select>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Age</th>
                    <th>Edit</th>
                </tr>
                <tr>
                    {
                        this.state.data.map((value,index) => {
                            return <td>
                                {value.id} <br /> {value.name} <br />{value.status} <br />{value.age}
                                
                            </td>
                        })
                    }
                </tr>
            </table>
        </div>
      </div>
    )
  }
}

export default Webbrain;