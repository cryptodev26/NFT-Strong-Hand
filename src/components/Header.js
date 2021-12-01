import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
    constructor () {
        super()
        this.state =  {
            route : window.location.pathname
        }
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
                    <img src={require('../assets/img/diamond.svg').default} />
                </div>
                <div className="links">
                    <ul className="links">
                        <li>
                            <Link to="/home" className={this.state.route == '/home' ? 'active' : ''}>HOME</Link>
                        </li>
                        <li>
                            <Link to="/demo" className={this.state.route == '/demo' ? 'active' : ''}>DEMO</Link>
                        </li>
                        <li>
                            <Link to="/contact" className={this.state.route == '/contact' ? 'active' : ''}>CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;