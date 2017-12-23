import React, { Component } from 'react';
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
class Register extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
   this.setState({
     dropdownOpen: !this.state.dropdownOpen
   });
 }

  render(){
    return(
      <section className="register opposite">
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

          <form id="registration-form" name="registration-form" className="registration-form" action="#" method="post">
            <Row>
              <Col sm={12} className="form-alert"></Col>
              {
                this.props.data.map((input, index) =>
                  {
                    if(input.type !== "dropdown") {
                      return(
                        <Col sm={6} md={3}>
                          <div className="form-group">
                            <input className={`form-control input-${input.name}`} title={input.title} type="text" placeholder={input.placeholder} />
                          </div>
                        </Col>
                      );
                    }
                    else {
                      return (
                        <Col sm={6} md={3}>
                          <select className="form-control select">
                            <option>Select Your Price Tab</option>
                            {
                              input.options.map((option, index) =>
                                <option>
                                  {option}
                                </option>
                              )
                            }
                          </select>
                        </Col>
                      );
                    }
                  }
                )
              }
              <Col md={12} className="overflowed">
                <div className="text-center margin-top">
                  <button className="btn btn-theme btn-theme-xl submit-button" type="submit"> {this.props.button.text} <i className={`fa fa-${this.props.button.icon}`}></i></button>
                </div>
              </Col>
            </Row>
          </form>
        </div>
      </section>
            )
          }
        }

export default Register;
