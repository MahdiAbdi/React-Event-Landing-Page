import React, { Component } from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About';

import './Styles/main.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: {
        background: 'http://eazzy.me/html/imevent/assets/img/preview/background-img-slider.jpg'
      },
      about: {
        icon: 'star',
        title: "What's about event",
        subtitle: "whats going on there come and learn",
        text: "Praesent ac sem in neque venenatis tristique. Morbi et ligula velit. Nullam a augue vel mi porta vestibulum non ac elit. Vivamus convallis tortor et fermentum semper. In hac habitasse platea dictumst. Curabitur eget dui id metus pulvinar suscipit. Quisque vitae ligula laoreet, scelerisque leo quis, facilisis metus. Sed pellentesque, urna sed varius consectetur, eros augue fringilla magna, id sem magna vel diam. Nulla sed hendrerit nunc.",
        buttons: [
          {
            text: 'Register',
            icon: 'arrow-circle-right'
          },
          {
            text: 'Watch Video',
            icon: ''
          }
        ],
        images: [
          {
            src: "http://eazzy.me/html/imevent/assets/img/preview/about-lg-1.jpg"
          },
          {
            src: "http://eazzy.me/html/imevent/assets/img/preview/about-lg-2.jpg"
          },
          {
            src: "http://eazzy.me/html/imevent/assets/img/preview/about-lg-3.jpg"
          },
          {
            src: "http://eazzy.me/html/imevent/assets/img/preview/about-lg-4.jpg"
          },
        ]
      }
    }
  }
  render() {
    return (
      <div>
        {/* <Home background={this.state.home.background} /> */}
        <About icon={this.state.about.icon} title={this.state.about.title} subtitle={this.state.about.subtitle} text={this.state.about.text} buttons={this.state.about.buttons} images={this.state.about.images} />
      </div>
    );
  }
}

export default App;
