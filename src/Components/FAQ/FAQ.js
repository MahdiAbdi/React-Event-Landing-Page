import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 3,
    };
    this.changeActive = this.changeActive.bind(this);
  }

  changeActive(index) {
    this.setState({active: index});
  }

  render(){
    return(
      <section id="faq" className="faq">
        <div className="container">
          <Row>
            <Col md={8}>
              <h1 className="section-title">
                <span className="icon-inner">
                  <span className="fa-stack negative">
                    <i className="fa rhex fa-stack-2x"></i>
                    <i className={`fa fa-${this.props.icons.primary} fa-stack-1x`}></i>
                  </span>
                </span>
                <span className="title-inner animated fadeInRight visible">
                  {this.props.title}
                  <small>/ {this.props.subtitle}</small>
                </span>
              </h1>
            </Col>
            <Col md={4}>
              <a href={this.props.button.href} className="btn btn-theme btn-theme-lg btn-theme-transparent-grey"><i class={`fa fa-${this.props.button.icon}`}></i>{this.props.button.text}</a>
            </Col>
          </Row>
          <Row>
            <Col sm={6} md={6}>
              <ul>
                {
                  this.props.data.map((item, index) =>
                    <li onClick={() => this.changeActive(index)} key={index} className={this.state.active === index ? 'active' : ''}>
                      <a href="#faq"><i className={`fa fa-${this.state.active === index ? this.props.icons.active : this.props.icons.normal}`}></i>
                        <span>{item.text}</span>
                      </a>
                    </li>
                  )
                }
              </ul>
            </Col>
            <Col sm={6} md={6}>
              <div className="faq-answer">
                <div className="container">
                  <Row>
                    {
                      this.props.data.map((item, index) =>
                        {
                          if(this.state.active === index) {
                            return(
                              <div>
                                <p>{item.answer.text}</p>
                                <Row>
                                  {
                                    item.answer.features.map((feature, index) =>
                                      <Col md={6}><p><i className={`fa fa-${feature.icon}`}></i>{feature.text}</p></Col>
                                    )
                                  }
                                </Row>
                              </div>
                            );
                          }
                        }
                      )
                    }
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    )
  }
}

export default FAQ;
