import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import '../node_modules/bootstrap/scss/bootstrap.scss';



const root = document.getElementById('root');

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.clearItems = this.clearItems.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.state={
           items: ['item1','item2','item3']
    
        }
    }


    componentDidMount(){
        const json = localStorage.getItem('items');
        const items = JSON.parse(json);

        if (items) {
            this.setState({
                items: items
            })
        }

        // console.log('creat component');
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.items.lenght !== this.state.items.length) {
            const json = JSON.stringify(this.state.items);
            localStorage.setItem('items', json)
        }
    }

    componentWillUnmount(){
        console.log('deleted component');
    }

    


    // -----------------------------
deleteItem(item){
    this.setState((prevState) => {
     const arr =   prevState.items.filter((i)=>{
            return item != i
        })
        return{
            items: arr
        }
    })
}
    // -----------------------------
    clearItems(){
        this.setState({
            items: []
        });
    }   
    // -----------------------------

    addItem(item){
        if (!item) {
            return 'please add item';
        }else if(this.state.items.indexOf(item) > -1){
                return 'please add deferent item';
        }
            this.setState((prevState) =>{
                return {items: prevState.items.concat(item)}
            })
    }

// ======================================
    render() {
        var app = {
            title: "Todo Application",
            description: "Lorem ipsum dolor sit amet."
        };
        return (
            <div className="container my-5">
                <div className="card">
                    <div className="card-header">
                         <Header title = {app.title} description={app.description} />
                    </div>
                    <div className="card-body">
                         <TodoList items={this.state.items} deleteItem={this.deleteItem} clearItems={this.clearItems}/>
                         </div>
                         <div className="card-footer">
                         <Action addItem = {this.addItem} />
                         </div>
                </div>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>

                <h1 id="header1">{this.props.title}</h1>
                <div>{this.props.description}</div>
            </div>
        );
    }
}

class TodoList extends React.Component {


   
    
    render() {
        return (
      <div>
                <ul className="list-group">
                  {
                         this.props.items.map((item,index) =>  
                        <TodoItem deleteItem = {this.props.deleteItem} key={index} item={item}/>
                    )
                  }
            </ul>
            
                <p><button className="btn btn-outline-danger float-right mt-3" onClick={this.props.clearItems}>Clear Items</button></p>
      </div>

        )
    }
}

class TodoItem extends React.Component {
    constructor(props){
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }
    deleteItem(){
        this.props.deleteItem(this.props.item);
    }
    render() {
        return (
          <li className="list-group-item">
              {this.props.item}
              <button className="btn btn-danger btn-sm float-right" onClick={this.deleteItem}>x</button>
          </li>
        );
    }
}

class Action extends React.Component {
    constructor(props){
        super(props)
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error: ''
        }
    }
onFormSubmit(e){
    e.preventDefault();

    const item  = e.target.elements.txtItem.value.trim();
    const error = this.props.addItem(item);
    this.setState({
        error: error
    })
    e.target.elements.txtItem.value = '';

    // if (item) {
    //     this.props.addItem(item);
    // }
}

    render() {
        return (
            <div>
                {this.state.error && <p className="text-danger">{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <div className="input-group">
                    <input className="form-control" type="text" name="txtItem" />
                    <div className="input-group-append">
                            <button className="btn btn-success btn-sm" type="submit">Add Item</button>
                    </div>
                    </div>
                </form>
            </div>
        );
    }
}

var template = (

    <div>
        <TodoApp />

    </div>
)

ReactDOM.render(template, root);