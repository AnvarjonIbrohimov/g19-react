import React, { Component } from 'react'

const data = [
    {id: 1, name: "Jack", age: 26},
    {id: 2, name: "Anvarjon", age: 13},
    {id: 3, name: "Akmal", age: 32},
    {id: 4, name: "Donyor", age: 23},
    {id: 5, name: "Abror", age: 12},
    {id: 6, name: "Akram", age: 21},
    {id: 7, name: "Bosit", age: 11},
    {id: 8, name: "Dimurod", age: 41},
]

class CRUD extends Component {
    constructor(props){
        super(props)
        this.state = {
            students: data,
            name: "",
            age: "",
            search: "",
        };
    };
  render() {
    const deleteUser = id => {
        const result = this.state.students.filter(value => value.id !== id)
        this.setState(previous => ({...previous, students: result}))
    };

    const onChange = e => {
        this.setState(previuos => ({...previuos, [e.target.name]: +e.target.value ? +e.target.value : e.target.value}))
    };

    const addUser = () => {
        if(this.state.name.length > 3 && +this.state.age >= 10 ){
            const newUser = {id: this.state.students.length + 1, name: this.state.name, age: this.state.age};
            this.setState(previous => ({...previous, students: [...this.state.students, newUser], name: "", age: ""}))
        }
    };
    const onInputEnter = e => {
        if(e.key === 'Enter'){ // keyDown qilganda key
            addUser()
        }
    };
    const onSearchChange = e => {
        const result  = data.filter(value => value.name.toLowerCase().includes(e.target.value.toLowerCase()))
        this.setState(previous => ({...previous, students: result }))
    }

    return (
      <div>
        <h3>CURD: Create; Read; Update; Delete</h3>
        <input type='text' placeholder='Search...' style={{width: "300px"}} onChange={onSearchChange} name='search'/>
        <ul>
            {
                this.state.students.map((value,index,arr) => {
                    return <li key={index}>
                        {value.id}. {value.name}   {value.age}
                        <button onClick={()=> deleteUser(value.id)}>Delete</button>
                    </li>
                })
            }
        </ul>
        <input 
        onChange={onChange} 
        value={this.state.name}
        name="name" type='text'
        style={{width: "200px"}} 
        placeholder='Enter Your Name' />
        <br />
        <input 
        onChange={onChange} 
        onKeyDown={onInputEnter}
        value={this.state.age}
        name="age" type='number' 
        style={{width: "129px"}} 
        placeholder='Enter Your Age' />
        <button onClick={addUser}>Add User</button>
      </div>
    )
  }
}

export default CRUD;  