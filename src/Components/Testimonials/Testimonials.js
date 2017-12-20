import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Row, Col } from 'reactstrap';
class Testimonials extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <section className="testimonials opposite">
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
          <OwlCarousel className="owl-theme" loop items={1} margin={20} >
            {
              this.props.quotes.map((testimonial, index) =>
                <div className="item">
                  <Row>
                    <Col md={10}>
                      <p>{testimonial.text}</p>
                      <h4>{testimonial.company}</h4>
                    </Col>
                    <Col md={2} className="hex">
                      <img src={testimonial.avatar} />
                    </Col>
                  </Row>
                </div>
              )
            }
          </OwlCarousel>
        </div>
      </section>
    )
  }
}

export default Testimonials;
