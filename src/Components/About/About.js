import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      image: ''
    }
    this.toggle = this.toggle.bind(this);
    this.setModalImage = this.setModalImage.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  setModalImage(image) {
    this.setState({image: image});
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
                      <div className="media" onClick={() => {this.setModalImage(image);this.toggle();}}>
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
        {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
            <img src={this.state.image.large} alt={this.state.image.alt} />
            <span>
              {this.state.image.alt}
            </span>
          </ModalBody>
        </Modal>
      </section>
    )
  }
}

export default About;
