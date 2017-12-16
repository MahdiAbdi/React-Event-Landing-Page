import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class About extends Component {
  render(){
    return(
      <section className="container">
        <h1 className="section-title">
          <span>
            <span className="fa-stack">
              <i className="fa rhex fa-stack-2x"></i>
              <i className="fa fa-star fa-stack-1x"></i>
            </span>
          </span>
          <span className="title-inner animated fadeInRight visible">
            {this.props.title} <small>/ {this.props.subtitle}</small>
          </span>
        </h1>
        <Row>
          <Col md="8">
            <p className="animated fadeInUp visible">{this.props.text}</p>
            <p className="btn-row">
              {
                this.props.buttons.map((button ,index) =>
                  <a key={index} href={button.href} className={`btn btn-theme btn-theme-xl ${button.classes}`} >{button.text} <i className={`fa fa-${button.icon}`}></i></a>
                )
              }
            </p>
          </Col>
          <Col md="4">
            <Row className="thumbnails">
              {
                this.props.images.map((image, index) =>
                  <Col key={index} sm="6" xs="6">
                    <div className="thumbnail no-border no-padding">
                      <div className="media">
                        <img src={image.small} alt={image.alt} />
                        <div className="caption hovered">
                          <div className="caption-wrapper div-table">
                            <div className="caption-inner div-cell">
                              <p className="caption-buttons"><a href={image.big} className="btn caption-zoom"><i className="fa fa-search"></i></a></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                )
              }
            </Row>
          </Col>
        </Row>
      </section>
    )
  }
}

export default About;
