const root = document.getElementById('root');

class InfoData extends React.Component{
    render(){
        return(

            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.metn}</p>
            </div>
        );

    }
}
 
class List extends React.Component{ //2ci
    render(){
        return(
            <div>
                <ul>
                <Item />
            </ul>
            <ul>
                <Item />
            </ul>
            <ul>
                <Item />
            </ul>
            <ul>
                <Item />
            </ul>
            </div>
        );
    }
}

class Item extends React.Component{ //3cu 
    render(){
        return(
            <li>Lorem ipsum dolor sit amet.</li>
        );
    }
}

var infoMetn = {
    item : "Item",
    model: "s10"
    
};

class Main extends React.Component{
    render(){
        return(
            <div>
                <InfoData title="React" metn={infoMetn.model}/>
                <List />
            </div>
        );
    }
}



var template = (<Main />);


ReactDOM.render(template,root);





