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
            className="owl-theme" items={this.props.column} loop margin={10} nav navText={["<i class='fa fa-caret-left' />","<i class='fa fa-caret-right' />"]}
          >
            {
              this.props.data.map((item, index) =>
                <div class="item">
                  <a href={item.href}>
                    <img src={item.img} alt={item.alt} /></a>
                </div>
              )
            }
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
