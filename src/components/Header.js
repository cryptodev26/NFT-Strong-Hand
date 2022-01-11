import React from "react";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
    constructor () {
        super()
        this.state =  {
            route : window.location.pathname,
            show : false,
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle (e) {
        this.setState({
            show : !this.state.show
        })
        const toggler = document.getElementsByClassName('toggle-collapse')[0]
        toggler.style.display = (this.state.show ? 'none' : 'block')
    }

    render () {
        return (
            <div className="header">
                <div className="diamond">
                    <ul>
                        <li>DIAMOND</li>
                        <li>HAND</li>
                        <li>PASSPORT</li>
                    </ul>
                    <img src={require('../assets/img/diamond.svg').default} alt = "..."/>
                </div>
                <div className="links">
                    <div className="toggle-collapse">
                        <ul>
                            <li>
                                <Link to="/home" className={this.state.route === '/home' ? 'active' : ''}>HOME</Link>
                            </li>
                            <li>
                                <Link to="/demo" className={this.state.route === '/demo' ? 'active' : ''}>DEMO</Link>
                            </li>
                            <li>
                                <Link to="/contact" className={this.state.route === '/contact' ? 'active' : ''}>CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                    <Button variant="secondary" onClick={this.toggle} className="collapse-button">
                        <span className="navbar-toggler-icon"></span>
                    </Button>
                </div>
            </div>
        );
    }
}

export default Header;