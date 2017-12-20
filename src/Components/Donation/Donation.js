import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Donation extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <section className="donation">
        <div className="container">
          <h1 className="section-title">
            <span className="icon-inner">
              <span className="fa-stack negative">
                <i className="fa rhex fa-stack-2x"></i>
                <i className="fa fa-star fa-stack-1x"></i>
              </span>
            </span>
            <span className="title-inner animated fadeInRight visible">
              {this.props.title} <small>/ {this.props.subtitle}</small>
            </span>
          </h1>
          <Row>
            <p className="animated fadeInUp visible">{this.props.text}</p>
            <p className="btn-row">
              {
                this.props.buttons.map((button ,index) =>
                  <a key={index} href={button.href} className={`btn btn-theme btn-theme-xl ${button.classes}`} >{button.text} <i className={`fa fa-${button.icon}`}></i></a>
                )
              }
            </p>
          </Row>
        </div>
      </section>
    )
  }
}

export default Donation;
