const root = document.getElementById("root");

class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.state={
            items: ['item1', 'item2', 'item3']
        }
    }

deleteItem(item){
    this.setState((prevState) =>{
        const arr  = prevState.items.filter((i) =>{
            return item != i
        })
        return{
            items:arr
        }
    })
}
    addItem(item){
        if(!item){
            return 'please add item';

        }else if(this.state.items.indexOf(item) > -1){
            return 'please add deferent item';
        }
        this.setState((prevState) =>{
            return {items: prevState.items.concat(item)}
        })
   
    }



    render(){
        var app = {
            title: "ToDo Application",
            description: "This app for To Do"
        };
        return(
          
            <div>
                <Header title={app.title} description={app.description}/>
                <TodoList items={this.state.items} />
                <Action addItem={this.addItem}/>
            </div>

        );
    }
}


class Header extends React.Component{

    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
            </div>
            
        );
    }
}

class TodoList extends React.Component{

    render(){
        return(
                <ul>
                   {
                       this.props.items.map((item,index)=>
                       <TodoItem item={item} key={index}/>)
                   }
                </ul>
            
        );
    }
}


class TodoItem extends React.Component{
    constructor(props){
super(props);
this.deleteItem = this.deleteItem.bind(this);
    }
    deleteItem(){
        this.porps.deleteItem(this.porps.item);
    }

    render(){
        return(

            <li>{this.props.item}
            <button onClick={this.deleteItem}>x</button></li>
            
        );
    }
}

class Action extends React.Component{
    constructor(props){
            super(props);
            this.onFormSubmit = this.onFormSubmit.bind(this);
            
    }

    onFormSubmit(e){
           e.preventDefault();
           const item = e.target.elements.txtItem.value.trim();
           
    }

    render(){
        return(

          <div>
                <form onSubmit={this.onFormSubmit}>
                <input type="text" name="txtItem"/>
                <button type="submit">Add Item</button>
            </form>
          </div>
            
        );
    }
}






















const template = (
    <TodoApp />
);

ReactDOM.render(template, root);






// const root = document.getElementById('root');

// class InfoData extends React.Component{
//     render(){
//         return(

//             <div>
//                 <h1>{this.props.title}</h1>
//                 <p>{this.props.metn}</p>
//             </div>
//         );

//     }
// }
 
// class List extends React.Component{ //2ci
//     render(){
//         return(
//             <div>
//                 <ul>
//                 <Item />
//             </ul>
//             <ul>
//                 <Item />
//             </ul>
//             <ul>
//                 <Item />
//             </ul>
//             <ul>
//                 <Item />
//             </ul>
//             </div>
//         );
//     }
// }

// class Item extends React.Component{ //3cu 
//     render(){
//         return(
//             <li>Lorem ipsum dolor sit amet.</li>
//         );
//     }
// }

// var infoMetn = {
//     item : "Item",
//     model: "s10"
    
// };

// class Main extends React.Component{
//     render(){
//         return(
//             <div>
//                 <InfoData title="React" metn={infoMetn.model}/>
//                 <List />
//             </div>
//         );
//     }
// }



// var template = (<Main />);


// ReactDOM.render(template,root);





