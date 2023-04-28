import React, {useState} from "react";



function Hook() {
    const [state, setState] = useState({counter: 0,user: { name: " ", age: null}})
    const [fruits, setFruits] = useState([
        {id: 1, name: "olma", price: 2000},
        {id: 2, name: "nok", price: 1000},
        {id: 3, name: "behi", price: 2500},
    ]);

    const increment = () => {
        setState(prev => ({...prev, counter: prev.counter + 1}))
    };
    const decrement = () => {
        setState(prev => ({...prev, counter: prev.counter - 1}))
    };
    const onChange = e => {
        const {name, value} = e.target
        setState(prev => ({...prev, user: {...prev.user,[name]: value}}))
    };
    const deleteFruit = id =>{
        const result = fruits.filter(fruit => fruit.id !== id )
        setFruits(() => result)
    }
    return(
        <div style={{flex: 1}}>
            <h3>Hook, {state.counter}</h3>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <hr />
            <h3>Name: {state.user.name}</h3>
            <h3>Age: {state.user.age}</h3>
            <input onChange={onChange} name='name' type="text" placeholder='Enter your name'/>
            <input onChange={onChange} name='age' type="text" placeholder='Enter your name'/>
            <hr />
            {
                fruits.map(fruit => (
                    <div key={fruit.id}>
                         {fruit.id}. {fruit.name} {fruit.price}
                    <button onClick={() => deleteFruit(fruit.id)}>X</button>
                    </div> 
                ))
            }
      </div>
    )
}
export default Hook;