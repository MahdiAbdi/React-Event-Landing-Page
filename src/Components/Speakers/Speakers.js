import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
class Speakers extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <section className="speakers">
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
              this.props.data.map((speaker, index) =>
                <Col md={3}>
                  <div className="avatar">
                    <img src={speaker.img} />
                  </div>
                  <div className="titles">
                    <h4>{speaker.name}</h4>
                    <h5>{speaker.position}</h5>
                  </div>
                  <div className="caption">
                    {speaker.text}
                  </div>
                  <div className="social">
                    {
                      this.props.socials.map((uSocial, index) =>
                        speaker.social[uSocial] ? <a href={speaker.social[uSocial]}><i class={`fa fa-${uSocial}`}></i></a> : null
                      )
                    }
                  </div>
                </Col>
              )
            }
          </Row>
          <Row>
            <p className="btn-row">
              {
                this.props.buttons.map((button ,index) =>
                  <a key={index} href={button.href} className={`btn btn-theme btn-theme-xl ${button.classes}`}> <i className={`fa fa-${button.icon}`} /> {button.text}</a>
                )
              }
            </p>
          </Row>
        </div>
      </section>
    )
  }
}

export default Speakers;
