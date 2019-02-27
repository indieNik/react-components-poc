import React, { Component } from 'react';
import './App.scss';

import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import SecondarySidebar from "./Components/SecondarySidebar/SecondarySidebar";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Sidebar></Sidebar>
        <SecondarySidebar></SecondarySidebar>
        <div className="container">
        </div>
      </div>
    );
  }
}

export default App;
