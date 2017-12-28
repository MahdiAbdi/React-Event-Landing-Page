import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
class Footer extends Component {
  constructor(props) {
    super(props);
  }

  colorDefiner(color) {
    let style = {
      background: color
    };
    return style;
  }

  render(){
    return(
      <section className="footer">
        <div className="container">
          <ul className="social-line list-inline">
            <div className="icon-container">
              {
                this.props.social.map((icon, index) =>
                  <span className="fa-stack negative">
                    <i className="fa rhex fa-stack-2x" style={this.colorDefiner(icon.color)} ></i>
                    <i className={`fa fa-${icon.icon} fa-stack-1x`} style={{color: '#fff'}} />
                  </span>
                )
              }
            </div>
          </ul>
          <div className="center">
            <p>
              © 2014 im Event — An One Page Event Manager Theme made with passion by jThemes Studio 
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default Footer;
