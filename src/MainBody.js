import React, { Component } from 'react';
import "./MainBody.css";

class MainBody extends Component {
   constructor(props)
   {
       super(props);
   }
    render() { 
        return ( 
            <div>
                <div className="bodyContainer">
                    <p>
                    <img src={this.props.bodyAttr.image}></img>
                        <br></br>{this.props.bodyAttr.text}
                    </p>
                    <p>
                    <img src={this.props.bodyAttr.image}></img>
                     <br></br>{this.props.bodyAttr.text}
                    </p>
                    <p>
                    <img src={this.props.bodyAttr.image}></img>
                     <br></br>{this.props.bodyAttr.text}
                    </p>
                </div>
              
            </div>
         );
    }
}
 
export default MainBody;