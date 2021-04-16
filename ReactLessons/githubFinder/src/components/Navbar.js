import React, { Component } from 'react'

 class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary">
                    <a href={this.props.url} className="navbar-brand">
                    <i className={this.props.icon}></i>{this.props.title}
                    </a>
                </nav>
                
            </div>
        )
    }
}

export default Navbar
