import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <section className="contact opposite">
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
          <div className="form">
            <form action="" method="post" role="form" class="contactForm">
              <div class="form-group">
                <input name="name" class="form-control" id="name" placeholder="Your Name" type="text" />
                <div class="validation" style={this.style}></div>
              </div>
              <div class="form-group">
                <input class="form-control" name="email" id="email" placeholder="Your Email" type="email" />
                <div class="validation" style={this.style}></div>
              </div>
              <div class="form-group">
                <input class="form-control" name="subject" id="subject" placeholder="Subject" type="text" />
                <div class="validation" style={this.style}></div>
              </div>
              <div class="form-group">
                <textarea class="form-control msg" name="message" rows="10" placeholder="Message"></textarea>
                <div class="validation" style={this.style}></div>
              </div>
              <div className="buttons">
                <a href={this.props.button.href} className="btn btn-theme">
                  <i className={`fa fa-${this.props.button.icon}`} /> {this.props.button.text}
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact;
