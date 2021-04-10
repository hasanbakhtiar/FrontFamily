const root = document.getElementById('root');
// var library = {
//        name: 1984,
//        author: "george orwell",
//        pageLenght: 201 
// }
// console.log(library);

class Book extends React.Component{
            constructor(props){
                super(props);
                this.changePage = this.changePage.bind(this);
                this.state = {
                    name: 1984,
                    author: "George Orwell",
                    pageLenght: 201 
                }
            }

            changePage(){
                this.setState({
                    name: 1900,
                    pageLenght : 100
                })
            }

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <p>{this.state.author}</p>
                <p>{this.state.pageLenght}</p>
                <button onClick={this.changePage}>Change pageLenght</button>
            </div>
        );
    }
}

var publicComp = (
    <Book />
);

ReactDOM.render(publicComp,root);