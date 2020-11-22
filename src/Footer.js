import React, { Component } from 'react';

class Footer extends Component {
    constructor(props)
    {
        super(props);
    }
    render() { 
        return (
            <div><br></br><center>{this.props.footerAttr}</center></div>
         );
    }
}
 
export default Footer;