import React, { Component } from 'react';
import "./Header.css";
{/* extend the Component class to bring in in-built functions and 
properties from React Component class */}
class Header extends Component {
    constructor(props)
    {
        super(props);
        console.log(this.props);
    }
    render() { 
        return ( 
        <div className="headerContainer">
            <h1 className="headerText">{this.props.anyNameforAttr}</h1>
            <p className="links"><a href="#">Home</a> | <a href="#">About us</a> | <a href="#">Contact Us</a> | <a href="#">Socials</a></p>
        </div> );
    }
}
 
export default Header;