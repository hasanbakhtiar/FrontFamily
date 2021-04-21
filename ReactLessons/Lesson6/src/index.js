import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/scss/bootstrap.scss'
import './styles/main.scss'
import { BrowserRouter, Route, Link } from 'react-router-dom'



const Nav = () => (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav d-flex justify-content-between mr-auto">
                    <li className="nav-item active">
                        <Link exact to="/" activeClassName="active">Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" activeClassName="active">About </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" activeClassName="active">Contact </Link>
                    </li>




                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </>
)




const HomePage = () => (
    <>
        <div className="row">
            <div className="col-4">
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>

    </>
)

const ContactPage = () => (
    <>
        <div className="container">
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </div>
    </>
)

const AboutPage = () => (
    <>
        <div>
            <div className="container main-box">
                <div className="left-box"></div>
                <div className="right-box">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, ab voluptatibus unde numquam deserunt repellendus nulla suscipit? Quos quas aliquam, eveniet voluptates eum accusamus non vitae ducimus. Voluptates, aspernatur facere?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, ab voluptatibus unde numquam deserunt repellendus nulla suscipit? Quos quas aliquam, eveniet voluptates eum accusamus non vitae ducimus. Voluptates, aspernatur facere?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, ab voluptatibus unde numquam deserunt repellendus nulla suscipit? Quos quas aliquam, eveniet voluptates eum accusamus non vitae ducimus. Voluptates, aspernatur facere?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, ab voluptatibus unde numquam deserunt repellendus nulla suscipit? Quos quas aliquam, eveniet voluptates eum accusamus non vitae ducimus. Voluptates, aspernatur facere?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, ab voluptatibus unde numquam deserunt repellendus nulla suscipit? Quos quas aliquam, eveniet voluptates eum accusamus non vitae ducimus. Voluptates, aspernatur facere?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, ab voluptatibus unde numquam deserunt repellendus nulla suscipit? Quos quas aliquam, eveniet voluptates eum accusamus non vitae ducimus. Voluptates, aspernatur facere?
                </div>
            </div>

        </div>
    </>
)


const App = () => (
    <BrowserRouter>
        <Nav />
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/contact" component={ContactPage}></Route>
        <Route path="/about" component={AboutPage}></Route>


    </BrowserRouter>
)






ReactDOM.render(<App />, document.getElementById('root'));



