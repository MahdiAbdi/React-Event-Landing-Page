import React, { Component } from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Donation from './Components/Donation/Donation';
import Sponsors from './Components/Sponsors/Sponsors';
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
            href: '#',
            icon: 'arrow-circle-right',
            classes: ''
          },
          {
            text: 'Watch Video',
            href: '#',
            icon: '',
            classes: 'btn-theme-transparent'
          }
        ],
        images: [
          {
            small: "http://eazzy.me/html/imevent/assets/img/preview/about-sm-1.jpg",
            large: "http://eazzy.me/html/imevent/assets/img/preview/about-lg-1.jpg",
            alt: "alt?!"
          },
          {
            small: "http://eazzy.me/html/imevent/assets/img/preview/about-sm-2.jpg",
            large: "http://eazzy.me/html/imevent/assets/img/preview/about-lg-2.jpg",
            alt: "alt?!"
          },
          {
            small: "http://eazzy.me/html/imevent/assets/img/preview/about-sm-3.jpg",
            large: "http://eazzy.me/html/imevent/assets/img/preview/about-lg-3.jpg",
            alt: "alt?!"
          },
          {
            small: "http://eazzy.me/html/imevent/assets/img/preview/about-sm-4.jpg",
            large: "http://eazzy.me/html/imevent/assets/img/preview/about-lg-4.jpg",
            alt: "alt?!"
          },
        ]
      },
      donation: {
        icon: 'ticket',
        title: "Donation ",
        subtitle: "lorem ipsum",
        text: "Etiam molestie, quam eget dignissim dapibus, diam libero auctor justo, a eleifend urna tellus et ligula. Curabitur elementum diam nec lacus pretium.",
        buttons: [
          {
            text: 'Make a Donation Now',
            href: '#',
            icon: '',
            classes: 'btn-theme-transparent'
          }
        ],
      },
      sponsors: {
        icon: 'thumbs-up',
        title: "Sponsors",
        subtitle: "dont forget it",
        buttons: [
          {
            text: 'Become a Sponsor Now!',
            href: '#',
            icon: 'thumbs-up',
            classes: ''
          }
        ],
      }
    }
  }
  render() {
    return (
      <div>
        {/* <Home background={this.state.home.background} /> */}
        <About icon={this.state.about.icon} title={this.state.about.title} subtitle={this.state.about.subtitle} text={this.state.about.text} buttons={this.state.about.buttons} images={this.state.about.images} />
        <Donation icon={this.state.donation.icon} title={this.state.donation.title} subtitle={this.state.donation.subtitle} text={this.state.donation.text} buttons={this.state.donation.buttons} />
        <Sponsors icon={this.state.sponsors.icon} title={this.state.sponsors.title} subtitle={this.state.sponsors.subtitle} buttons={this.state.sponsors.buttons} />
      </div>
    );
  }
}

export default App;
