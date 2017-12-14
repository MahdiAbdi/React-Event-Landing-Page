import React, { Component } from 'react';
import Home from './Components/Home/Home'
import './Styles/main.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: {
        background: 'http://eazzy.me/html/imevent/assets/img/preview/background-img-slider.jpg'
      }
    }
  }
  render() {
    return (
      <div>
        <Home background={this.state.home.background} />
      </div>
    );
  }
}

export default App;
