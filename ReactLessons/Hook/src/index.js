//class, stateless function component

//React v16+ : function component + hook => stateful function component

import React, {  useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import  './styles/main.scss'
import image from './img/img.jpg';
import { createStore } from 'redux'


const initalState = {
    count: 0
}

const store = createStore((state = initalState, action)=>{
    switch(action.type){
        case "INCREMENT":
            return{
                
            }
            case "DECREMET":
            return{
                count: state.count - 1
            }
            default:
                return state
    }
})

store.dispatch({
    type: "INCREMENT"
})






//ES6
const App = (props) =>{
    const [count,setData] = useState(props.count);
    const hesab = ()=>{
        setData(count+1);
    }

    useEffect(()=>{
        console.log('didmount');
    },[])
    useEffect(()=>{
        console.log(' update');
    })
   
    return(
        <div>
             <img src={image}   alt=""/>

             <p>{count} clicked</p>
             <button onClick={hesab}>+1</button>
             <button onClick={()=>setData(count-1)}>-1</button>
             <button onClick={()=>setData(props.count)}>reset</button>

        </div>
        
    )
}



App.defaultProps = {
    count:5
}



ReactDOM.render(<App />, document.getElementById('root'));



