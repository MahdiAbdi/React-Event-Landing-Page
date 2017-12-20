import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Price extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <section>
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
                <Col md={4} className="price-table featured">
                  <div className="price-table-header">
                    <div className="price-label">
                      <h2 className="price-label-title">{plan.name}</h2>
                    </div>
                    <div className="price-value">
                      <span className="price-number">{plan.price}</span><span className="price-unit">$</span><span className="price-per"></span>
                    </div>
                  </div>
                  <div className="price-table-rows">
                    <div className="price-table-row"><i className="fa fa-check-circle-o"></i> Lorem ipsum dolor sit amet</div>
                    <div className="price-table-row odd"><i className="fa fa-check-circle-o"></i> Consectetur adipiscing elit</div>
                    <div className="price-table-row"><i className="fa fa-check-circle-o"></i> Sed vitae diam metus</div>
                    <div className="price-table-row odd"><i className="fa fa-check-circle-o"></i> Donec cursus magna</div>
                    <div className="price-table-row-bottom">
                      <a className="btn btn-theme scroll-to" href="#register">Register</a>
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
