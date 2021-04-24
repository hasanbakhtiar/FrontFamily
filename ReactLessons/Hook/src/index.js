//class, stateless function component

//React v16+ : function component + hook => stateful function component

import React, {  useState } from 'react';
import ReactDOM from 'react-dom';



// class App extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             count: 0
//         }
//     }

//     render(){
//         return(
//             <div>
//                 <p>{this.state.count} clicked</p>
//                 <button onClick={()=>this.setState({
//                     count: this.state.count + 1
//                 })}>+1</button>
//             </div>
//         )
//     }
// }


//ES5
// function App(){
//     return(
//         <div>React1</div>
//     )
// }


//ES6
const App = (props) =>{
    const [count,setData] = useState(props.count);
    const hesab = ()=>{
        setData(count+1);
    }
    return(
        <div>
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



