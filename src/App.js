import React, { Component } from 'react';
import './App.scss';

import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import SecondarySidebar from "./Components/SecondarySidebar/SecondarySidebar";
import Img from './logo.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header>
          <img src={Img} className='logo-image'></img>
        </Header>
        <Sidebar></Sidebar>
        <SecondarySidebar></SecondarySidebar>
        <div className="container">
        </div> */}
        <eng-header></eng-header>
        <eng-sidebar></eng-sidebar>
        <eng-secondary-sidebar></eng-secondary-sidebar>
      </div>
    );
  }
}

export default App;
