import logo from './logo.svg';
import './App.css';
import Header from './Header';
import MainBody from './MainBody';
import Footer from './Footer';
import React, {Component } from 'react';

//fetch("").then(respons=>Response.json()).then(response=>setState()).catch()
class App extends Component {
  //The state data is will normally becoming from some data sources
  state = {
    headerText : "New Header text For Page",
    bodySection: {
      image: "https://us.123rf.com/450wm/nd3000/nd30001807/nd3000180700231/104102326-group-of-happy-people-eating-food-outdoors.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam tristique mauris nec hendrerit. Aliquam non turpis tempor, vulputate felis lobortis, auctor lectus. Duis eu ex quis velit rhoncus fermentum ac ac enim. Morbi quis justo neque. Proin pharetra purus quis volutpat aliquet. Nunc eu ligula a velit faucibus ultricies eu vel purus. Morbi iaculis erat quis ante dignissim dapibus in non nibh. Suspendisse ornare nunc odio, ut dapibus felis ornare non. Integer auctor, felis eu dignissim aliquam, massa nisl malesuada dui, eget egestas erat eros at turpis. Pellentesque aliquam maximus bibendum."
    },
    footerSection: "Copyright Decemeber 2020"
  }
  render() {
      return (
      <div className="mainContainer">
    <Header anyNameforAttr={this.state.headerText}></Header>
    <MainBody bodyAttr = {this.state.bodySection}></MainBody>
    <Footer footerAttr = {this.state.footerSection}></Footer>
      </div>
    );
  }
}

export default App;
