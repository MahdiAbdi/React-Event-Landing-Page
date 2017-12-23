import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Price extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <section className="price">
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
          <Row>
            {
              this.props.data.map((plan, index) =>
                <Col md={4} className="price-table-wrapper">
                  <div className={`price-table ${plan.featured ? 'featured' : ''}`}>
                    <div className="price-table-header">
                      <div className="price-label">
                        <h2 className="price-label-title">{plan.name}</h2>
                      </div>
                      <div className="price-value">
                        <span className="price-number">{plan.price}</span><span className="price-unit">$</span><span className="price-per"></span>
                      </div>
                    </div>
                    <div className="price-table-rows">
                      {
                        plan.features.map((feature, index) =>
                          <div className="price-table-row"><i className={`fa fa-${feature.icon}`}></i>{feature.text}</div>
                        )
                      }
                      <div className="price-table-row-bottom">
                        <a className="btn btn-theme scroll-to" href="#register">Register</a>
                      </div>
                    </div>
                  </div>
                </Col>
              )
            }
          </Row>
        </div>
      </section>
    )
  }
}

export default Price;
