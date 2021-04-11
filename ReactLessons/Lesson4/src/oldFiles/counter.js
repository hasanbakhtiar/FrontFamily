
const root = document.getElementById("root");

class Counter extends React.Component{

    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            number: 0
        }
    }

    addOne(){
        this.setState((addState) =>{
            return{
                number: addState.number + 1
            }
        })
    }

    minusOne(){
        this.setState((minusState) =>{
            return{
                number: minusState.number - 1
            }
        })
    }


    reset(){
        this.setState({
            number: 0
        })
    }


            render(){
                return(
                       <div>
                           <h1>Number: {this.state.number}</h1>
                           <button onClick={this.addOne}>+1</button>
                           <button onClick={this.minusOne}>-1</button>
                           <button onClick={this.reset}>Reset</button>
                       </div> 
                );
            }
}

const template = (
    <Counter />
);
ReactDOM.render(template,root);







// const root = document.getElementById('root');

// let number = 0;
// const btnAddClassName = "btnRed";
// const btnClearClassName = "btnGreen";

// const addOne = () =>{
//     number ++;
//     renderApp();

// }
// const clearOne = () =>{
//     number --;
//     renderApp();

// }

// var renderApp = () => {
//         var template = 
        
//         <div>
//             <h1>Number: {number}</h1>

//             <button id="btnPlusOne" className={btnAddClassName} onClick = {addOne}>+1</button>
//             <button id="btnMinusOne" className={btnClearClassName} onClick = {clearOne}>-1</button>
//         </div>
        
//         ;
// ReactDOM.render(template,root);

// }
// renderApp();


// var counter = () =>{

//     var infoTime = (
//         <div>
//             <h2>Time is:{new Date().toLocaleTimeString()}</h2>
//         </div>
//     );

// ReactDOM.render(infoTime,root);

// }
// setInterval(counter, 1000);
// counter();



