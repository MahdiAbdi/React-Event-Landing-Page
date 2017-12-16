import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class About extends Component {
  constructor(props) {
    super(props);
  }
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
              <a href="#register" className="btn btn-theme btn-theme-xl scroll-to animated flipInY visible" >{this.props.buttons[0].text} <i className="fa fa-arrow-circle-right"></i></a>
              <a href="#" className="btn btn-theme btn-theme-xl btn-theme-transparent animated flipInY visible" >{this.props.buttons[1].text}</a>
            </p>
          </Col>
          <Col md="4">
            <Row className="thumbnails">
              <Col sm="6" xs="6">
                <div className="thumbnail no-border no-padding animated fadeInLeft visible">
                  <div className="media">
                    <img src="http://eazzy.me/html/imevent/assets/img/preview/about-sm-4.jpg" alt="" />
                    <div className="caption hovered">
                      <div className="caption-wrapper div-table">
                        <div className="caption-inner div-cell">
                          <p className="caption-buttons"><a href="http://eazzy.me/html/imevent/assets/img/preview/about-lg-1.jpg" className="btn caption-zoom" data-gal="prettyPhoto"><i className="fa fa-search"></i></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm="6" xs="6">
                <div className="thumbnail no-border no-padding animated fadeInLeft visible">
                  <div className="media">
                    <img src="http://eazzy.me/html/imevent/assets/img/preview/about-sm-1.jpg" alt="" />
                    <div className="caption hovered">
                      <div className="caption-wrapper div-table">
                        <div className="caption-inner div-cell">
                          <p className="caption-buttons"><a href="http://eazzy.me/html/imevent/assets/img/preview/about-lg-1.jpg" className="btn caption-zoom" data-gal="prettyPhoto"><i className="fa fa-search"></i></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm="6" xs="6">
                <div className="thumbnail no-border no-padding animated fadeInLeft visible">
                  <div className="media">
                    <img src="http://eazzy.me/html/imevent/assets/img/preview/about-sm-2.jpg" alt="" />
                    <div className="caption hovered">
                      <div className="caption-wrapper div-table">
                        <div className="caption-inner div-cell">
                          <p className="caption-buttons"><a href="http://eazzy.me/html/imevent/assets/img/preview/about-lg-1.jpg" className="btn caption-zoom" data-gal="prettyPhoto"><i className="fa fa-search"></i></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm="6" xs="6">
                <div className="thumbnail no-border no-padding animated fadeInLeft visible">
                  <div className="media">
                    <img src="http://eazzy.me/html/imevent/assets/img/preview/about-sm-3.jpg" alt="" />
                    <div className="caption hovered">
                      <div className="caption-wrapper div-table">
                        <div className="caption-inner div-cell">
                          <p className="caption-buttons"><a href="http://eazzy.me/html/imevent/assets/img/preview/about-lg-1.jpg" className="btn caption-zoom" data-gal="prettyPhoto"><i className="fa fa-search"></i></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    )
  }
}

export default About;
