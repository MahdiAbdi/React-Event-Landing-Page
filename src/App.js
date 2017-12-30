import React, { Component } from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Donation from './Components/Donation/Donation';
import Sponsors from './Components/Sponsors/Sponsors';
import Testimonials from './Components/Testimonials/Testimonials';
import Speakers from './Components/Speakers/Speakers';
import Price from './Components/Price/Price';
import Register from './Components/Register/Register';
import FAQ from './Components/FAQ/FAQ';
import RecentBlogPosts from './Components/RecentBlogPosts/RecentBlogPosts';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import FinalLoc from './Components/Location/Location';
import Schedule from './Components/Schedule/Schedule';
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
            featured: false,
            features: [
              {
                text: "Lorem ipsum dolor sit amet",
                icon: 'check-circle-o',
              },
              {
                text: "Consectetur adipiscing elit",
                icon: 'check-circle-o',
              },
              {
                text: "Sed vitae diam metus",
                icon: 'check-circle-o',
              },
              {
                text: "Donec cursus magna",
                icon: 'check-circle-o',
              },
            ],
          },
          {
            name: "Personal",
            price: "111",
            featured: true,
            features: [
              {
                text: "Lorem ipsum dolor sit amet",
                icon: 'check-circle-o',
              },
              {
                text: "Consectetur adipiscing elit",
                icon: 'check-circle-o',
              },
              {
                text: "Sed vitae diam metus",
                icon: 'check-circle-o',
              },
              {
                text: "Donec cursus magna",
                icon: 'check-circle-o',
              },
            ],
          },
          {
            name: "Personal",
            price: "124",
            featured: false,
            features: [
              {
                text: "Lorem ipsum dolor sit amet",
                icon: 'check-circle-o',
              },
              {
                text: "Consectetur adipiscing elit",
                icon: 'check-circle-o',
              },
              {
                text: "Sed vitae diam metus",
                icon: 'check-circle-o',
              },
              {
                text: "Donec cursus magna",
                icon: 'check-circle-o',
              },
            ],
          },
          {
            name: "Personal",
            price: "175",
            featured: false,
            features: [
              {
                text: "Lorem ipsum dolor sit amet",
                icon: 'check-circle-o',
              },
              {
                text: "Consectetur adipiscing elit",
                icon: 'check-circle-o',
              },
              {
                text: "Sed vitae diam metus",
                icon: 'check-circle-o',
              },
              {
                text: "Donec cursus magna",
                icon: 'check-circle-o',
              },
            ],
          },
        ]
      },
      register: {
        icon: 'ticket',
        title : 'Register now',
        subtitle: "dont mıss event!",
        data: [
          {
            name: 'name',
            type: 'text',
            title: '',
            placeholder: 'Name and Surname'
          },
          {
            name: 'email',
            type: 'text',
            title: '',
            placeholder: 'Your Mail Here'
          },
          {
            name: 'phone',
            type: 'text',
            title: '',
            placeholder: 'Your Phone Number'
          },
          {
            name: 'pricec',
            type: 'dropdown',
            title: '',
            options: [
              "100$",
              "200$",
              "300$",
              "500$",
              "850$",
            ],
          },
        ],
        button: {
          text: 'Register Nowww',
          icon: 'arrow-circle-right',
      }},
      faq: {
        icons: {
          primary: 'question',
          active: 'angle-right',
          normal: 'plus',
        },
        title : 'Event FAQS',
        subtitle: "find your answers",
        button: {
          href: '#',
          icon: 'pencil',
          text: ' Open a ticket',
        },
        data: [
          {
            icon: 'angle-right',
            href: '#',
            text: 'How to ...?! 1',
            answer: {
              text: " 1 Vestibulum sit amet tincidunt urna, eget ullamcorper purus. Aenean feugiat quis tortor vitae fringilla. Pellentesque augue nisl, condimentum at sem et, fermentum varius ligula. Nulla dignissim nulla eget congue cursus.",
              features: [
                {
                  icon: 'check-circle-o',
                  text: 'Awesome Feature',
                },
                {
                  icon: 'check-circle-o',
                  text: 'Awesome Feature',
                },
                {
                  icon: 'check-circle-o',
                  text: 'Awesome Feature',
                },
                {
                  icon: 'check-circle-o',
                  text: 'Awesome Feature',
                },
                {
                  icon: 'check-circle-o',
                  text: 'Awesome Feature',
                },
              ],
            },
          },
          {
            icon: 'angle-right',
            href: '#',
            text: 'How to ...?!',
            answer: {
              text: ' 2 Vestibulum sit amet tincidunt urna, eget ullamcorper purus. Aenean feugiat quis tortor vitae fringilla. Pellentesque augue nisl, condimentum at sem et, fermentum varius ligula. Nulla dignissim nulla eget congue cursus.',
              features: [
                {
                  icon: 'check-circle-o',
                  text: 'Awesome Feature',
                },
                {
                  icon: 'check-circle-o',
                  text: 'Awesome Feature',
                },
                {
                  icon: 'check-circle-o',
                  text: 'Awesome Feature',
                },
                {
                  icon: 'check-circle-o',
                  text: 'Awesome Feature',
                },
                {
                  icon: 'check-circle-o',
                  text: 'Awesome Feature',
                },
              ],
            },
          },
          {
            icon: 'angle-right',
            href: '#',
            text: 'How to ...?!',
            answer: {
              text: ' 3 Vestibulum sit amet tincidunt urna, eget ullamcorper purus. Aenean feugiat quis tortor vitae fringilla. Pellentesque augue nisl, condimentum at sem et, fermentum varius ligula. Nulla dignissim nulla eget congue cursus.',
              features: [
                {
                  icon: 'check-circle-o',
                  text: 'Awesome Feature',
                },
                {
                  icon: 'check-circle-o',
                  text: 'Awesome Feature',
                },
                {
                  icon: 'check-circle-o',
                  text: 'Awesome Feature',
                },
                {
                  icon: 'check-circle-o',
                  text: 'Awesome Feature',
                },
                {
                  icon: 'check-circle-o',
                  text: 'Awesome Feature',
                },
              ],
            },
          },
          {
            icon: 'angle-right',
            href: '#',
            text: 'How to ...?!',
            answer: {
              text: ' 4 Vestibulum sit amet tincidunt urna, eget ullamcorper purus. Aenean feugiat quis tortor vitae fringilla. Pellentesque augue nisl, condimentum at sem et, fermentum varius ligula. Nulla dignissim nulla eget congue cursus.',
              features: [
                {
                  icon: 'check-circle-o',
                  text: 'Awesome Feature',
                },
                {
                  icon: 'check-circle-o',
                  text: 'Awesome Feature',
                },
                {
                  icon: 'check-circle-o',
                  text: 'Awesome Feature',
                },
                {
                  icon: 'check-circle-o',
                  text: 'Awesome Feature',
                },
                {
                  icon: 'check-circle-o',
                  text: 'Awesome Feature',
                },
              ],
            },
          },
        ],
      },
      recentbp: {
        icon: 'file-text-o',
        title : 'Recent Blog Posts',
        subtitle: "get news!",
        limit: '4',
        column: '4',
        button: [
          {
            href: '#',
            icon: 'file',
            text: 'See all news',
          },
        ],
        data: [
          {
            type: 'video-camera',
            img: {
              src: 'http://eazzy.me/html/imevent/assets/img/preview/recent-post-1.jpg',
              alt: ''
            },
            title: 'Standart Blog Post Header Here',
            date: '1st Sep 1998',
            text: "Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi tristiquetus et senectus et netus et malesuada ac turpis.",
            button: {
              href: '#',
              text: 'Read More',
            },
            comments: [
              "asdfghjklasdfghjkl",
              "qwertyuiuytrewq",
              "zxcvbnm,mnbvcxz",
              "asdfghjklasdfghjkl",
              "qwertyuiuytrewq",
              "zxcvbnm,mnbvcxz",
              "asdfghjklasdfghjkl",
              "qwertyuiuytrewq",
              "zxcvbnm,mnbvcxz",
              "asdfghjklasdfghjkl",
              "qwertyuiuytrewq",
              "zxcvbnm,mnbvcxz",
              "asdfghjklasdfghjkl",
              "qwertyuiuytrewq",
              "zxcvbnm,mnbvcxz",
            ],
          },
          {
            type: 'video-camera',
            img: {
              src: 'http://eazzy.me/html/imevent/assets/img/preview/recent-post-1.jpg',
              alt: ''
            },
            title: 'Standart Blog Post Header Here',
            date: '1st Sep 1998',
            text: "Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi tristiquetus et senectus et netus et malesuada ac turpis.",
            button: {
              href: '#',
              text: 'Read More',
            },
            comments: [
              "asdfghjklasdfghjkl",
              "qwertyuiuytrewq",
              "zxcvbnm,mnbvcxz",
              "asdfghjklasdfghjkl",
              "qwertyuiuytrewq",
              "zxcvbnm,mnbvcxz",
              "asdfghjklasdfghjkl",
              "qwertyuiuytrewq",
              "zxcvbnm,mnbvcxz",
              "asdfghjklasdfghjkl",
              "qwertyuiuytrewq",
              "zxcvbnm,mnbvcxz",
              "asdfghjklasdfghjkl",
              "qwertyuiuytrewq",
              "zxcvbnm,mnbvcxz",
            ],
          },
          {
            type: 'video-camera',
            img: {
              src: 'http://eazzy.me/html/imevent/assets/img/preview/recent-post-1.jpg',
              alt: ''
            },
            title: 'Standart Blog Post Header Here',
            date: '1st Sep 1998',
            text: "Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi tristiquetus et senectus et netus et malesuada ac turpis.",
            button: {
              href: '#',
              text: 'Read More',
            },
            comments: [
              "asdfghjklasdfghjkl",
              "qwertyuiuytrewq",
              "zxcvbnm,mnbvcxz",
              "asdfghjklasdfghjkl",
              "qwertyuiuytrewq",
              "zxcvbnm,mnbvcxz",
              "asdfghjklasdfghjkl",
              "qwertyuiuytrewq",
              "zxcvbnm,mnbvcxz",
              "asdfghjklasdfghjkl",
              "qwertyuiuytrewq",
              "zxcvbnm,mnbvcxz",
              "asdfghjklasdfghjkl",
              "qwertyuiuytrewq",
              "zxcvbnm,mnbvcxz",
            ],
          },
          {
            type: 'video-camera',
            img: {
              src: 'http://eazzy.me/html/imevent/assets/img/preview/recent-post-1.jpg',
              alt: ''
            },
            title: 'Standart Blog Post Header Here',
            date: '1st Sep 1998',
            text: "Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi tristiquetus et senectus et netus et malesuada ac turpis.",
            button: {
              href: '#',
              text: 'Read More',
            },
            comments: [
              "asdfghjklasdfghjkl",
              "qwertyuiuytrewq",
              "zxcvbnm,mnbvcxz",
              "asdfghjklasdfghjkl",
              "qwertyuiuytrewq",
              "zxcvbnm,mnbvcxz",
              "asdfghjklasdfghjkl",
              "qwertyuiuytrewq",
              "zxcvbnm,mnbvcxz",
              "asdfghjklasdfghjkl",
              "qwertyuiuytrewq",
              "zxcvbnm,mnbvcxz",
              "asdfghjklasdfghjkl",
              "qwertyuiuytrewq",
              "zxcvbnm,mnbvcxz",
            ],
          },
          {
            type: 'video-camera',
            img: {
              src: 'http://eazzy.me/html/imevent/assets/img/preview/recent-post-1.jpg',
              alt: ''
            },
            title: 'Standart Blog Post Header Here',
            date: '1st Sep 1998',
            text: "Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi tristiquetus et senectus et netus et malesuada ac turpis.",
            button: {
              href: '#',
              text: 'Read More',
            },
            comments: [
              "asdfghjklasdfghjkl",
              "qwertyuiuytrewq",
              "zxcvbnm,mnbvcxz",
              "asdfghjklasdfghjkl",
              "qwertyuiuytrewq",
              "zxcvbnm,mnbvcxz",
              "asdfghjklasdfghjkl",
              "qwertyuiuytrewq",
              "zxcvbnm,mnbvcxz",
              "asdfghjklasdfghjkl",
              "qwertyuiuytrewq",
              "zxcvbnm,mnbvcxz",
              "asdfghjklasdfghjkl",
              "qwertyuiuytrewq",
              "zxcvbnm,mnbvcxz",
            ],
          },
        ],
      },
      contact: {
        icon: 'phone',
        title : 'Contact Us',
        subtitle: "lorem ipsum",
        button: {
          text: 'Send Message',
          href: '#',
          icon: 'paper-plane',
        }
      },
      footer: {
        social: [
          {
            href: '#',
            icon: 'instagram',
            color: 'cyan',
          },
          {
            href: '#',
            icon: 'facebook',
            color: 'blue',
          },
          {
            href: '#',
            icon: 'telegram',
            color: 'hotpink',
          },
          {
            href: '#',
            icon: 'google',
            color: 'mediumslateblue',
          },
          {
            href: '#',
            icon: 'skype',
            color: 'mediumspringgreen',
          },
          {
            href: '#',
            icon: 'twitter',
            color: 'blue',
          },
          {
            href: '#',
            icon: 'dribbble',
            color: 'red',
          },
        ]
      },
      location: {
        icon: 'star',
        title: "What's about event",
        text: `Apple Store SOHO‎ 103 Prince St New York,‎ NY 10012, United States‎ +1 212-226-3126‎ ‎ hello@imevent.com`,
        button: {
          href: '#',
          icon: 'arrow-circle-right',
          text: 'Get Directions ',
        },
        defaultZoom: 10,
        height: '600',
        position: {
          lat: -34.397,
          lng: 150.644,
        }
      },
      schedule: {
        icons: {
          primary: 'question',
          active: 'angle-right',
          normal: 'plus',
        },
        title : 'Conference or Event Schedule',
        subtitle: "dont forget it",
        button: {
          href: '#',
          icon: 'print',
          text: ' Download Schedule',
        },
        data: [
          {
            title: "Day 1",
            subtitle: "10.01.1998",
            subTabs: [
              {
                title: "Hall 1A",
                posts: [
                  {
                    avatar: "http://eazzy.me/html/imevent/assets/img/preview/avatar-v2-2.jpg",
                    time: "08:00 - 08:45",
                    title: "Post Title 1A1",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Donec cursus magna eget sem convallis facilisis. Vestibulum dictum nibh at ullamcorper tincidunt. Phasellus scelerisque nisl non ullamcorper pellentesque. Nunc sagittis, felis in feugiat mollis, libero eros consectetur elit non cursus lacus nisl at dolor.",
                    name: "John Snow",
                    position: "CEO at Throne.io",
                    socials: [
                      {
                        icon: 'facebook',
                        href: '#',
                      },
                      {
                        icon: 'instagram',
                        href: '#',
                      },
                      {
                        icon: 'twitter',
                        href: '#',
                      },
                      {
                        icon: 'telegram',
                        href: '#',
                      },
                    ]
                  },
                  {
                    avatar: "http://eazzy.me/html/imevent/assets/img/preview/avatar-v2-2.jpg",
                    time: "09:00 - 09:45",
                    title: "Post Title 1A2",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Donec cursus magna eget sem convallis facilisis. Vestibulum dictum nibh at ullamcorper tincidunt. Phasellus scelerisque nisl non ullamcorper pellentesque. Nunc sagittis, felis in feugiat mollis, libero eros consectetur elit non cursus lacus nisl at dolor.",
                    name: "John Snow",
                    position: "CEO at Throne.io",
                    socials: [
                      {
                        icon: 'facebook',
                        href: '#',
                      },
                      {
                        icon: 'instagram',
                        href: '#',
                      },
                      {
                        icon: 'twitter',
                        href: '#',
                      },
                      {
                        icon: 'telegram',
                        href: '#',
                      },
                    ]
                  },
                ]
              },
              {
                title: "Hall 1B",
                posts: [
                  {
                    avatar: "http://eazzy.me/html/imevent/assets/img/preview/avatar-v2-2.jpg",
                    time: "08:00 - 08:45",
                    title: "Post Title 1B1",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Donec cursus magna eget sem convallis facilisis. Vestibulum dictum nibh at ullamcorper tincidunt. Phasellus scelerisque nisl non ullamcorper pellentesque. Nunc sagittis, felis in feugiat mollis, libero eros consectetur elit non cursus lacus nisl at dolor.",
                    name: "John Snow",
                    position: "CEO at Throne.io",
                    socials: [
                      {
                        icon: 'facebook',
                        href: '#',
                      },
                      {
                        icon: 'instagram',
                        href: '#',
                      },
                      {
                        icon: 'twitter',
                        href: '#',
                      },
                      {
                        icon: 'telegram',
                        href: '#',
                      },
                    ]
                  },
                  {
                    avatar: "http://eazzy.me/html/imevent/assets/img/preview/avatar-v2-2.jpg",
                    time: "09:00 - 09:45",
                    title: "Post Title 1B2",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Donec cursus magna eget sem convallis facilisis. Vestibulum dictum nibh at ullamcorper tincidunt. Phasellus scelerisque nisl non ullamcorper pellentesque. Nunc sagittis, felis in feugiat mollis, libero eros consectetur elit non cursus lacus nisl at dolor.",
                    name: "John Snow",
                    position: "CEO at Throne.io",
                    socials: [
                      {
                        icon: 'facebook',
                        href: '#',
                      },
                      {
                        icon: 'instagram',
                        href: '#',
                      },
                      {
                        icon: 'twitter',
                        href: '#',
                      },
                      {
                        icon: 'telegram',
                        href: '#',
                      },
                    ]
                  },
                ]
              },
              {
                title: "Hall 1C",
                posts: [
                  {
                    avatar: "http://eazzy.me/html/imevent/assets/img/preview/avatar-v2-2.jpg",
                    time: "08:00 - 08:45",
                    title: "Post Title 1C1",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Donec cursus magna eget sem convallis facilisis. Vestibulum dictum nibh at ullamcorper tincidunt. Phasellus scelerisque nisl non ullamcorper pellentesque. Nunc sagittis, felis in feugiat mollis, libero eros consectetur elit non cursus lacus nisl at dolor.",
                    name: "John Snow",
                    position: "CEO at Throne.io",
                    socials: [
                      {
                        icon: 'facebook',
                        href: '#',
                      },
                      {
                        icon: 'instagram',
                        href: '#',
                      },
                      {
                        icon: 'twitter',
                        href: '#',
                      },
                      {
                        icon: 'telegram',
                        href: '#',
                      },
                    ]
                  },
                  {
                    avatar: "http://eazzy.me/html/imevent/assets/img/preview/avatar-v2-2.jpg",
                    time: "09:00 - 09:45",
                    title: "Post Title 1C2",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Donec cursus magna eget sem convallis facilisis. Vestibulum dictum nibh at ullamcorper tincidunt. Phasellus scelerisque nisl non ullamcorper pellentesque. Nunc sagittis, felis in feugiat mollis, libero eros consectetur elit non cursus lacus nisl at dolor.",
                    name: "John Snow",
                    position: "CEO at Throne.io",
                    socials: [
                      {
                        icon: 'facebook',
                        href: '#',
                      },
                      {
                        icon: 'instagram',
                        href: '#',
                      },
                      {
                        icon: 'twitter',
                        href: '#',
                      },
                      {
                        icon: 'telegram',
                        href: '#',
                      },
                    ]
                  },
                ]
              },
            ]
          },
          {
            title: "Day 2",
            subtitle: "11.01.1998",
            subTabs: [
              {
                title: "Hall 2A",
                posts: [
                  {
                    avatar: "http://eazzy.me/html/imevent/assets/img/preview/avatar-v2-2.jpg",
                    time: "08:00 - 08:45",
                    title: "Post Title 2A1",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Donec cursus magna eget sem convallis facilisis. Vestibulum dictum nibh at ullamcorper tincidunt. Phasellus scelerisque nisl non ullamcorper pellentesque. Nunc sagittis, felis in feugiat mollis, libero eros consectetur elit non cursus lacus nisl at dolor.",
                    name: "John Snow",
                    position: "CEO at Throne.io",
                    socials: [
                      {
                        icon: 'facebook',
                        href: '#',
                      },
                      {
                        icon: 'instagram',
                        href: '#',
                      },
                      {
                        icon: 'twitter',
                        href: '#',
                      },
                      {
                        icon: 'telegram',
                        href: '#',
                      },
                    ]
                  },
                  {
                    avatar: "http://eazzy.me/html/imevent/assets/img/preview/avatar-v2-2.jpg",
                    time: "09:00 - 09:45",
                    title: "Post Title 2A2",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Donec cursus magna eget sem convallis facilisis. Vestibulum dictum nibh at ullamcorper tincidunt. Phasellus scelerisque nisl non ullamcorper pellentesque. Nunc sagittis, felis in feugiat mollis, libero eros consectetur elit non cursus lacus nisl at dolor.",
                    name: "John Snow",
                    position: "CEO at Throne.io",
                    socials: [
                      {
                        icon: 'facebook',
                        href: '#',
                      },
                      {
                        icon: 'instagram',
                        href: '#',
                      },
                      {
                        icon: 'twitter',
                        href: '#',
                      },
                      {
                        icon: 'telegram',
                        href: '#',
                      },
                    ]
                  },
                ]
              },
              {
                title: "Hall 2B",
                posts: [
                  {
                    avatar: "http://eazzy.me/html/imevent/assets/img/preview/avatar-v2-2.jpg",
                    time: "08:00 - 08:45",
                    title: "Post Title 2B1",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Donec cursus magna eget sem convallis facilisis. Vestibulum dictum nibh at ullamcorper tincidunt. Phasellus scelerisque nisl non ullamcorper pellentesque. Nunc sagittis, felis in feugiat mollis, libero eros consectetur elit non cursus lacus nisl at dolor.",
                    name: "John Snow",
                    position: "CEO at Throne.io",
                    socials: [
                      {
                        icon: 'facebook',
                        href: '#',
                      },
                      {
                        icon: 'instagram',
                        href: '#',
                      },
                      {
                        icon: 'twitter',
                        href: '#',
                      },
                      {
                        icon: 'telegram',
                        href: '#',
                      },
                    ]
                  },
                  {
                    avatar: "http://eazzy.me/html/imevent/assets/img/preview/avatar-v2-2.jpg",
                    time: "09:00 - 09:45",
                    title: "Post Title 2B2",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Donec cursus magna eget sem convallis facilisis. Vestibulum dictum nibh at ullamcorper tincidunt. Phasellus scelerisque nisl non ullamcorper pellentesque. Nunc sagittis, felis in feugiat mollis, libero eros consectetur elit non cursus lacus nisl at dolor.",
                    name: "John Snow",
                    position: "CEO at Throne.io",
                    socials: [
                      {
                        icon: 'facebook',
                        href: '#',
                      },
                      {
                        icon: 'instagram',
                        href: '#',
                      },
                      {
                        icon: 'twitter',
                        href: '#',
                      },
                      {
                        icon: 'telegram',
                        href: '#',
                      },
                    ]
                  },
                ]
              },
              {
                title: "Hall 2C",
                posts: [
                  {
                    avatar: "http://eazzy.me/html/imevent/assets/img/preview/avatar-v2-2.jpg",
                    time: "08:00 - 08:45",
                    title: "Post Title 2C1",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Donec cursus magna eget sem convallis facilisis. Vestibulum dictum nibh at ullamcorper tincidunt. Phasellus scelerisque nisl non ullamcorper pellentesque. Nunc sagittis, felis in feugiat mollis, libero eros consectetur elit non cursus lacus nisl at dolor.",
                    name: "John Snow",
                    position: "CEO at Throne.io",
                    socials: [
                      {
                        icon: 'facebook',
                        href: '#',
                      },
                      {
                        icon: 'instagram',
                        href: '#',
                      },
                      {
                        icon: 'twitter',
                        href: '#',
                      },
                      {
                        icon: 'telegram',
                        href: '#',
                      },
                    ]
                  },
                  {
                    avatar: "http://eazzy.me/html/imevent/assets/img/preview/avatar-v2-2.jpg",
                    time: "09:00 - 09:45",
                    title: "Post Title 2C2",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Donec cursus magna eget sem convallis facilisis. Vestibulum dictum nibh at ullamcorper tincidunt. Phasellus scelerisque nisl non ullamcorper pellentesque. Nunc sagittis, felis in feugiat mollis, libero eros consectetur elit non cursus lacus nisl at dolor.",
                    name: "John Snow",
                    position: "CEO at Throne.io",
                    socials: [
                      {
                        icon: 'facebook',
                        href: '#',
                      },
                      {
                        icon: 'instagram',
                        href: '#',
                      },
                      {
                        icon: 'twitter',
                        href: '#',
                      },
                      {
                        icon: 'telegram',
                        href: '#',
                      },
                    ]
                  },
                ]
              },
            ]
          },
          {
            title: "Day 3",
            subtitle: "12.01.1998",
            subTabs: [
              {
                title: "Hall 3A",
                posts: [
                  {
                    avatar: "http://eazzy.me/html/imevent/assets/img/preview/avatar-v2-2.jpg",
                    time: "08:00 - 08:45",
                    title: "Post Title 3A1",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Donec cursus magna eget sem convallis facilisis. Vestibulum dictum nibh at ullamcorper tincidunt. Phasellus scelerisque nisl non ullamcorper pellentesque. Nunc sagittis, felis in feugiat mollis, libero eros consectetur elit non cursus lacus nisl at dolor.",
                    name: "John Snow",
                    position: "CEO at Throne.io",
                    socials: [
                      {
                        icon: 'facebook',
                        href: '#',
                      },
                      {
                        icon: 'instagram',
                        href: '#',
                      },
                      {
                        icon: 'twitter',
                        href: '#',
                      },
                      {
                        icon: 'telegram',
                        href: '#',
                      },
                    ]
                  },
                  {
                    avatar: "http://eazzy.me/html/imevent/assets/img/preview/avatar-v2-2.jpg",
                    time: "09:00 - 09:45",
                    title: "Post Title 3A2",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Donec cursus magna eget sem convallis facilisis. Vestibulum dictum nibh at ullamcorper tincidunt. Phasellus scelerisque nisl non ullamcorper pellentesque. Nunc sagittis, felis in feugiat mollis, libero eros consectetur elit non cursus lacus nisl at dolor.",
                    name: "John Snow",
                    position: "CEO at Throne.io",
                    socials: [
                      {
                        icon: 'facebook',
                        href: '#',
                      },
                      {
                        icon: 'instagram',
                        href: '#',
                      },
                      {
                        icon: 'twitter',
                        href: '#',
                      },
                      {
                        icon: 'telegram',
                        href: '#',
                      },
                    ]
                  },
                ]
              },
              {
                title: "Hall 3B",
                posts: [
                  {
                    avatar: "http://eazzy.me/html/imevent/assets/img/preview/avatar-v2-2.jpg",
                    time: "08:00 - 08:45",
                    title: "Post Title 3B1",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Donec cursus magna eget sem convallis facilisis. Vestibulum dictum nibh at ullamcorper tincidunt. Phasellus scelerisque nisl non ullamcorper pellentesque. Nunc sagittis, felis in feugiat mollis, libero eros consectetur elit non cursus lacus nisl at dolor.",
                    name: "John Snow",
                    position: "CEO at Throne.io",
                    socials: [
                      {
                        icon: 'facebook',
                        href: '#',
                      },
                      {
                        icon: 'instagram',
                        href: '#',
                      },
                      {
                        icon: 'twitter',
                        href: '#',
                      },
                      {
                        icon: 'telegram',
                        href: '#',
                      },
                    ]
                  },
                  {
                    avatar: "http://eazzy.me/html/imevent/assets/img/preview/avatar-v2-2.jpg",
                    time: "09:00 - 09:45",
                    title: "Post Title 3B2",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Donec cursus magna eget sem convallis facilisis. Vestibulum dictum nibh at ullamcorper tincidunt. Phasellus scelerisque nisl non ullamcorper pellentesque. Nunc sagittis, felis in feugiat mollis, libero eros consectetur elit non cursus lacus nisl at dolor.",
                    name: "John Snow",
                    position: "CEO at Throne.io",
                    socials: [
                      {
                        icon: 'facebook',
                        href: '#',
                      },
                      {
                        icon: 'instagram',
                        href: '#',
                      },
                      {
                        icon: 'twitter',
                        href: '#',
                      },
                      {
                        icon: 'telegram',
                        href: '#',
                      },
                    ]
                  },
                ]
              },
              {
                title: "Hall 3C",
                posts: [
                  {
                    avatar: "http://eazzy.me/html/imevent/assets/img/preview/avatar-v2-2.jpg",
                    time: "08:00 - 08:45",
                    title: "Post Title 3C1",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Donec cursus magna eget sem convallis facilisis. Vestibulum dictum nibh at ullamcorper tincidunt. Phasellus scelerisque nisl non ullamcorper pellentesque. Nunc sagittis, felis in feugiat mollis, libero eros consectetur elit non cursus lacus nisl at dolor.",
                    name: "John Snow",
                    position: "CEO at Throne.io",
                    socials: [
                      {
                        icon: 'facebook',
                        href: '#',
                      },
                      {
                        icon: 'instagram',
                        href: '#',
                      },
                      {
                        icon: 'twitter',
                        href: '#',
                      },
                      {
                        icon: 'telegram',
                        href: '#',
                      },
                    ]
                  },
                  {
                    avatar: "http://eazzy.me/html/imevent/assets/img/preview/avatar-v2-2.jpg",
                    time: "09:00 - 09:45",
                    title: "Post Title 3C2",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam metus. Donec cursus magna eget sem convallis facilisis. Vestibulum dictum nibh at ullamcorper tincidunt. Phasellus scelerisque nisl non ullamcorper pellentesque. Nunc sagittis, felis in feugiat mollis, libero eros consectetur elit non cursus lacus nisl at dolor.",
                    name: "John Snow",
                    position: "CEO at Throne.io",
                    socials: [
                      {
                        icon: 'facebook',
                        href: '#',
                      },
                      {
                        icon: 'instagram',
                        href: '#',
                      },
                      {
                        icon: 'twitter',
                        href: '#',
                      },
                      {
                        icon: 'telegram',
                        href: '#',
                      },
                    ]
                  },
                ]
              },
            ]
          },
        ]

      },
    }
  }
  render() {
    return (
      <div>
        {/* <Home background={this.state.home.background} /> */}
        <About icon={this.state.about.icon} title={this.state.about.title} subtitle={this.state.about.subtitle} text={this.state.about.text} buttons={this.state.about.buttons} images={this.state.about.images} />
        <Donation icon={this.state.donation.icon} title={this.state.donation.title} subtitle={this.state.donation.subtitle} text={this.state.donation.text} buttons={this.state.donation.buttons} />
        <Schedule icons={this.state.schedule.icons} title={this.state.schedule.title} subtitle={this.state.schedule.subtitle} button={this.state.schedule.button} data={this.state.schedule.data} />
        <Sponsors icon={this.state.sponsors.icon} title={this.state.sponsors.title} subtitle={this.state.sponsors.subtitle} data={this.state.sponsors.data} buttons={this.state.sponsors.buttons} column={this.state.sponsors.column} />
        <Testimonials icon={this.state.testimonials.icon} title={this.state.testimonials.title} subtitle={this.state.testimonials.subtitle} quotes={this.state.testimonials.quotes} />
        <Speakers icon={this.state.speakers.icon} title={this.state.speakers.title} subtitle={this.state.speakers.subtitle} data={this.state.speakers.data} socials={this.state.speakers.socials} buttons={this.state.speakers.buttons} column={this.state.speakers.column} />
        <Price icon={this.state.price.icon} title={this.state.price.title} subtitle={this.state.price.subtitle} data={this.state.price.data} featured={this.state.price.featured} />
        <Register icon={this.state.register.icon} title={this.state.register.title} subtitle={this.state.register.subtitle} data={this.state.register.data} button={this.state.register.button} />
        <FAQ icons={this.state.faq.icons} title={this.state.faq.title} subtitle={this.state.faq.subtitle} data={this.state.faq.data} button={this.state.faq.button} />
        <RecentBlogPosts icon={this.state.recentbp.icon} title={this.state.recentbp.title} subtitle={this.state.recentbp.subtitle} data={this.state.recentbp.data} button={this.state.recentbp.button} limit={this.state.recentbp.limit} column={this.state.recentbp.column} />
        <FinalLoc defaultZoom={this.state.location.defaultZoom} height={this.state.location.height} position={this.state.location.position} icon={this.state.location.icon} title={this.state.location.title} text={this.state.location.text} button={this.state.location.button}  />
        <Contact icon={this.state.contact.icon} title={this.state.contact.title} subtitle={this.state.contact.subtitle} button={this.state.contact.button} />
        <Footer social={this.state.footer.social} />
      </div>
    );
  }
}

export default App;
