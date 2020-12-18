import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';


const Home =()=><h1>Strona starrtowa</h1>;
const News =()=><h1>Aktualnosci</h1>;
const Contact =()=><h1>kontakt do nas </h1>;
const ErrorPage =()=><h1>Strona nie istnieje</h1>;

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
                <div>
                    <header>
                        <nav>
                            <ul>
                                <li><NavLink exact to="/">start</NavLink></li>
                                <li><NavLink to="/news">aktuanosci</NavLink></li>
                                <li><NavLink to="/contact">kontakt</NavLink></li>
                            </ul>
                        </nav>
                    </header>
                    <section>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/news" component={News}/>
                            <Route path="/contact" component={Contact}/>
                            <Route component={ErrorPage}/>
                        </Switch>
                    </section>
                </div>
            </Router>
         );
    }
}
 
export default App;