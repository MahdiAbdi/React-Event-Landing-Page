import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import {Row} from 'reactstrap'
class Sponsors extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="sponsors">
        <div className="container">
          <h1 className="section-title">
            <span className="icon-inner">
              <span className="fa-stack negative">
                <i className="fa rhex fa-stack-2x"></i>
                <i className={`fa fa-${this.props.icon} fa-stack-1x`}></i>
              </span>
            </span>
            <span className="title-inner animated fadeInRight visible">
              {this.props.title}
              <small>/ {this.props.subtitle}</small>
            </span>
          </h1>

          <OwlCarousel
            className="owl-theme" items={6} loop margin={10} nav navText={["<i class='fa fa-caret-left' />","<i class='fa fa-caret-right' />"]}
          >
            <div class="item">
              <a href="#">
                <img src="http://eazzy.me/html/imevent/assets/img/partner/light/partner-1.png" alt="" /></a>
            </div>
            <div class="item">
              <a href="#">
                <img src="http://eazzy.me/html/imevent/assets/img/partner/light/partner-2.png" alt="" /></a>
            </div>
            <div class="item">
              <a href="#">
                <img src="http://eazzy.me/html/imevent/assets/img/partner/light/partner-3.png" alt="" /></a>
            </div>
            <div class="item">
              <a href="#">
                <img src="http://eazzy.me/html/imevent/assets/img/partner/light/partner-4.png" alt="" /></a>
            </div>
            <div class="item">
              <a href="#">
                <img src="http://eazzy.me/html/imevent/assets/img/partner/light/partner-5.png" alt="" /></a>
            </div>
            <div class="item">
              <a href="#">
                <img src="http://eazzy.me/html/imevent/assets/img/partner/light/partner-6.png" alt="" /></a>
            </div>
            <div class="item">
              <a href="#">
                <img src="http://eazzy.me/html/imevent/assets/img/partner/light/partner-6.png" alt="" /></a>
            </div>
            <div class="item">
              <a href="#">
                <img src="http://eazzy.me/html/imevent/assets/img/partner/light/partner-1.png" alt="" /></a>
            </div>
            <div class="item">
              <a href="#">
                <img src="http://eazzy.me/html/imevent/assets/img/partner/light/partner-2.png" alt="" /></a>
            </div>
            <div class="item">
              <a href="#">
                <img src="http://eazzy.me/html/imevent/assets/img/partner/light/partner-3.png" alt="" /></a>
            </div>
            <div class="item">
              <a href="#">
                <img src="http://eazzy.me/html/imevent/assets/img/partner/light/partner-4.png" alt="" /></a>
            </div>
            <div class="item">
              <a href="#">
                <img src="http://eazzy.me/html/imevent/assets/img/partner/light/partner-5.png" alt="" /></a>
            </div>
            <div class="item">
              <a href="#">
                <img src="http://eazzy.me/html/imevent/assets/img/partner/light/partner-6.png" alt="" /></a>
            </div>
            <div class="item">
              <a href="#">
                <img src="http://eazzy.me/html/imevent/assets/img/partner/light/partner-6.png" alt="" /></a>
            </div>
          </OwlCarousel>
          <Row>
            <p className="btn-row">
              {
                this.props.buttons.map((button ,index) =>
                  <a key={index} href={button.href} className={`btn btn-theme btn-theme-xl ${button.classes}`} ><i className={`fa fa-${button.icon}`} /> {button.text}</a>
                )
              }
            </p>
          </Row>
        </div>
      </section>
    )
  }
}

export default Sponsors;
