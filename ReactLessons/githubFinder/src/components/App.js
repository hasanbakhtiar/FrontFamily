import React, { Component } from 'react'
import Navbar from './Navbar'
import Users from './Users'
import axios from 'axios'




class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        
        axios
             .get('https://api.github.com/users')
             .then(res => this.setState({users: res.data}));

    }

    render() {
        return (
            <div>
                <Navbar url="https://github.com" title="GitHub Finder" icon="fab fa-github" />
                <Users  users={this.state.users} />
            </div>
        )
    }
}

export default App

