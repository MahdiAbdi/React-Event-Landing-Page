import React, { Component } from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Donation from './Components/Donation/Donation';
import Sponsors from './Components/Sponsors/Sponsors';
import Testimonials from './Components/Testimonials/Testimonials';
import Speakers from './Components/Speakers/Speakers';
import Price from './Components/Price/Price';
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
        column: 5,
        buttons: [
          {
            text: 'Become a Sponsor Now!',
            href: '#',
            icon: 'thumbs-up',
            classes: ''
          }
        ],
        data: [
          {
            href: "#",
            img: "http://eazzy.me/html/imevent/assets/img/partner/light/partner-1.png",
            alt: ""
          },
          {
            href: "#",
            img: "http://eazzy.me/html/imevent/assets/img/partner/light/partner-1.png",
            alt: ""
          },
          {
            href: "#",
            img: "http://eazzy.me/html/imevent/assets/img/partner/light/partner-1.png",
            alt: ""
          },
          {
            href: "#",
            img: "http://eazzy.me/html/imevent/assets/img/partner/light/partner-1.png",
            alt: ""
          },
          {
            href: "#",
            img: "http://eazzy.me/html/imevent/assets/img/partner/light/partner-1.png",
            alt: ""
          },
          {
            href: "#",
            img: "http://eazzy.me/html/imevent/assets/img/partner/light/partner-1.png",
            alt: ""
          },
          {
            href: "#",
            img: "http://eazzy.me/html/imevent/assets/img/partner/light/partner-1.png",
            alt: ""
          },
          {
            href: "#",
            img: "http://eazzy.me/html/imevent/assets/img/partner/light/partner-1.png",
            alt: ""
          },
          {
            href: "#",
            img: "http://eazzy.me/html/imevent/assets/img/partner/light/partner-1.png",
            alt: ""
          },
          {
            href: "#",
            img: "http://eazzy.me/html/imevent/assets/img/partner/light/partner-1.png",
            alt: ""
          },
          {
            href: "#",
            img: "http://eazzy.me/html/imevent/assets/img/partner/light/partner-1.png",
            alt: ""
          },
          {
            href: "#",
            img: "http://eazzy.me/html/imevent/assets/img/partner/light/partner-1.png",
            alt: ""
          },
          {
            href: "#",
            img: "http://eazzy.me/html/imevent/assets/img/partner/light/partner-1.png",
            alt: ""
          },
        ],
      },
      testimonials: {
        icon: 'comments',
        title: "Testimonials",
        subtitle: "See What People Say About Us",
        quotes: [
          {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Donec cursus magna eget sem convallis facilisis. Vestibulum dictum nibh at ullamcorper tincidunt. Phasellus scelerisque nisl non ullamcorper pellentesque. Nunc sagittis, felis in feugiat mollis, libero eros consectetur elit non cursus lacus nisl at dolor.",
            company: "Vestaak",
            avatar: "http://eazzy.me/html/imevent/assets/img/preview/avatar-1.jpg"
          },
          {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Donec cursus magna eget sem convallis facilisis. Vestibulum dictum nibh at ullamcorper tincidunt. Phasellus scelerisque nisl non ullamcorper pellentesque. Nunc sagittis, felis in feugiat mollis, libero eros consectetur elit non cursus lacus nisl at dolor.",
            company: "Vestaak",
            avatar: "http://eazzy.me/html/imevent/assets/img/preview/avatar-2.jpg"
          },
          {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Donec cursus magna eget sem convallis facilisis. Vestibulum dictum nibh at ullamcorper tincidunt. Phasellus scelerisque nisl non ullamcorper pellentesque. Nunc sagittis, felis in feugiat mollis, libero eros consectetur elit non cursus lacus nisl at dolor.",
            company: "Vestaak",
            avatar: "http://eazzy.me/html/imevent/assets/img/preview/avatar-3.jpg"
          },
        ]
      },
      speakers : {
        icon: 'user',
        title : 'Event Speakers',
        column: 6,
        subtitle: "meet with greaters",
        buttons: [
          {
            text: 'See All Speakers',
            href: '#',
            icon: 'user',
            classes: ''
          }
        ],
        socials: [
          'facebook', 'twitter', 'dribbble'
        ],
        data : [
          {
            name: 'baby Stewards Jr',
            img: 'https://bootstrapmade.com/demo/themes/Groovin/assets/img/dummies/team1.jpg',
            position: 'CEO - Founder',
            text: "Praesent ac sem in neque venenatis tristique. Morbi et ligula velit. Nullam a augue vel mi porta vestibulum non ac elit.",
            social : {
              facebook: '#',
              twitter: '#',
              dribbble: ''
            }
          },
          {
            name: 'Tommy Kreunichev',
            img: 'https://bootstrapmade.com/demo/themes/Groovin/assets/img/dummies/team2.jpg',
            position: ' Lead designer ',
            text: "Praesent ac sem in neque venenatis tristique. Morbi et ligula velit. Nullam a augue vel mi porta vestibulum non ac elit.",
            social : {
              facebook: '#',
              twitter: '',
              dribbble: '#'
            }
          },
          {
            name: 'Moriella Maccini',
            img: 'https://bootstrapmade.com/demo/themes/Groovin/assets/img/dummies/team3.jpg',
            position: 'Customer support',
            text: "Praesent ac sem in neque venenatis tristique. Morbi et ligula velit. Nullam a augue vel mi porta vestibulum non ac elit.",
            social : {
              facebook: '',
              twitter: '#',
              dribbble: '#'
            }
          },
          {
            name: 'Brian James Scoothie',
            img: 'https://bootstrapmade.com/demo/themes/Groovin/assets/img/dummies/team4.jpg',
            position: 'Coffee maker',
            text: "Praesent ac sem in neque venenatis tristique. Morbi et ligula velit. Nullam a augue vel mi porta vestibulum non ac elit.",
            social : {
              facebook: '#',
              twitter: '',
              dribbble: '#'
            }
          },
          {
            name: 'Sarah Jhinson',
            img: 'https://bootstrapmade.com/demo/themes/Imperial/img/team-2.jpg',
            position: 'Product Manager',
            text: "Praesent ac sem in neque venenatis tristique. Morbi et ligula velit. Nullam a augue vel mi porta vestibulum non ac elit.",
            social : {
              facebook: '',
              twitter: '',
              dribbble: '#'
            }
          },
          {
            name: 'Amanda Jepson',
            img: 'https://bootstrapmade.com/demo/themes/Imperial/img/team-4.jpg',
            position: 'Accountant',
            text: "Praesent ac sem in neque venenatis tristique. Morbi et ligula velit. Nullam a augue vel mi porta vestibulum non ac elit.",
            social : {
              facebook: '#',
              twitter: '#',
              dribbble: '#'
            }
          },
        ],
      },
      price: {
        icon: 'dollar',
        title : 'Event Price list',
        subtitle: "perfect price for event",
        data: [
          {
            name: "Personal",
            price: "111",
            features: [
              "Lorem ipsum dolor sit amet",
              "Consectetur adipiscing elit",
              "Sed vitae diam metus",
              "Donec cursus magna",
            ],
          },
          {
            name: "Personal",
            price: "111",
            features: [
              "Lorem ipsum dolor sit amet",
              "Consectetur adipiscing elit",
              "Sed vitae diam metus",
              "Donec cursus magna",
            ],
          },
          {
            name: "Personal",
            price: "124",
            features: [
              "Lorem ipsum dolor sit amet",
              "Consectetur adipiscing elit",
              "Sed vitae diam metus",
              "Donec cursus magna",
            ],
          },
          {
            name: "Personal",
            price: "175",
            features: [
              "Lorem ipsum dolor sit amet",
              "Consectetur adipiscing elit",
              "Sed vitae diam metus",
              "Donec cursus magna",
            ],
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
        <Donation icon={this.state.donation.icon} title={this.state.donation.title} subtitle={this.state.donation.subtitle} text={this.state.donation.text} buttons={this.state.donation.buttons} />
        <Sponsors icon={this.state.sponsors.icon} title={this.state.sponsors.title} subtitle={this.state.sponsors.subtitle} data={this.state.sponsors.data} buttons={this.state.sponsors.buttons} column={this.state.sponsors.column} />
        <Testimonials icon={this.state.testimonials.icon} title={this.state.testimonials.title} subtitle={this.state.testimonials.subtitle} quotes={this.state.testimonials.quotes} />
        <Speakers icon={this.state.speakers.icon} title={this.state.speakers.title} subtitle={this.state.speakers.subtitle} data={this.state.speakers.data} socials={this.state.speakers.socials} buttons={this.state.speakers.buttons} column={this.state.speakers.column} />
        <Price icon={this.state.price.icon} title={this.state.price.title} subtitle={this.state.price.subtitle} data={this.state.price.data} />
      </div>
    );
  }
}

export default App;
