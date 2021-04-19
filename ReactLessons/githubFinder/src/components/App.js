import React, { Component } from 'react'
import Navbar from './Navbar'
import Users from './Users'
import Search from './Search'
import axios from 'axios'




class App extends Component {

    constructor(props){
        super(props);
        this.searchUsers = this.searchUsers.bind(this);

        this.state = {
            users: []
        }
    }

    searchUsers(keyword){
        
        axios
             .get(`https://api.github.com/search/users?q=${keyword}`)
             .then(res => this.setState({users: res.data.items}));

    }

    render() {
        return (
            <div>
                <Navbar url="https://github.com" title=" GitHub Finder" icon="fab fa-github" />
                <Search searchUsers={this.searchUsers} />
                <Users  users={this.state.users} />
            </div>
        )
    }
}

export default App

