const root = document.getElementById('root');

let number = 0;
const btnAddClassName = "btnRed";
const btnClearClassName = "btnGreen";

const addOne = () =>{
    number ++;
    renderApp();

}
const clearOne = () =>{
    number --;
    renderApp();

}

var renderApp = () => {
        var template = 
        
        <div>
            <h1>Number: {number}</h1>

            <button id="btnPlusOne" className={btnAddClassName} onClick = {addOne}>+1</button>
            <button id="btnMinusOne" className={btnClearClassName} onClick = {clearOne}>-1</button>
        </div>
        
        ;
ReactDOM.render(template,root);

}
renderApp();


var counter = () =>{

    var infoTime = (
        <div>
            <h2>Time is:{new Date().toLocaleTimeString()}</h2>
        </div>
    );

ReactDOM.render(infoTime,root);

}
// setInterval(counter, 1000);
// counter();



