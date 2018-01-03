import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import OwlCarousel from 'react-owl-carousel';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  bgDefiner() {
    return {background: `transparent url(${this.props.background}) 50% 0 repeat`};
  }

  render() {
    return (
        <div id="main">
          <section className="page-section no-padding background-img-slider">
            {/* <div className="container"> */}
            <OwlCarousel id="main-slider"
              className="owl-theme"
              loop margin={10} nav items={1} dots={false} navText={["<i class='fa fa-caret-left' />","<i class='fa fa-caret-right' />"]}
            >
              <div class="item">
                <div className="item page text-center slide0">
                  <div className="caption">
                    <div className="container">
                      <div className="div-table">
                        <div className="div-cell">
                          <h2 className="caption-title animated fadeInDown visible">
                            <span>January 17-19, 2015</span>
                          </h2>
                          <h3 className="caption-subtitle animated fadeInUp visible">PHP Conference ın Istanbul</h3>
                          <div className="countdown-wrapper">
                            <div id="defaultCountdown" className="defaultCountdown clearfix is-countdown">
                              <span className="countdown-row countdown-show4">
                                <span className="countdown-section">
                                  <span className="countdown-amount">26</span>
                                  <span className="countdown-period">Days</span>
                                </span>
                                <span className="countdown-section">
                                  <span className="countdown-amount">7</span>
                                  <span className="countdown-period">Hours</span>
                                </span>
                                <span className="countdown-section">
                                  <span className="countdown-amount">49</span>
                                  <span className="countdown-period">Minutes</span>
                                </span>
                                <span className="countdown-section">
                                  <span className="countdown-amount">19</span>
                                  <span className="countdown-period">Seconds</span>
                                </span>
                              </span>
                            </div>
                          </div>
                          <p className="caption-text">
                            <a className="btn btn-theme btn-theme-xl scroll-to animated flipInY visible" href="#register">
                              Register
                              <i className="fa fa-arrow-circle-right"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="item page text-center slide1">
                  <div className="caption">
                    <div className="container">
                      <div className="div-table">
                        <div className="div-cell">
                          <h2 className="caption-title animated fadeInDown visible">
                            <span>January 17-19, 2015</span>
                          </h2>
                          <h3 className="caption-subtitle animated fadeInUp visible">PHP Conference ın Istanbul</h3>
                          <p className="caption-text">
                            <a className="btn btn-theme btn-theme-xl scroll-to animated flipInY visible" href="#register">
                              Register
                              <i className="fa fa-arrow-circle-right"></i>
                            </a>
                            <a className="btn btn-theme btn-theme-xl btn-theme-transparent-white animated flipInY visible" href="http://www.youtube.com/watch?v=O-zpOMYRi0w">Watch video</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="item page slide2">
                  <div className="caption">
                    <div className="container">
                      <div className="div-table">
                        <div className="div-cell">
                          <div className="row">
                            <div className="col-md-6 col-lg-4">
                              <div className="form-background">
                                <div className="form-header color">
                                  <h1 className="section-title">
                                    <span className="icon-inner">
                                      <span className="fa-stack">
                                        <i className="fa rhex fa-stack-2x"></i>
                                        <i className="fa fa-ticket fa-stack-1x"></i>
                                      </span>
                                    </span>
                                    <span className="title-inner">Event Register</span>
                                  </h1>
                                </div>

                                <form id="registration-form-alt" name="registration-form-alt" className="registration-form alt" action="#" method="post">

                                  <Row>
                                    <Col sm={12} className="form-alert"></Col>
                                    {
                                      this.props.formdata.map((input, index) =>
                                        {
                                          if(input.type !== "dropdown") {
                                            return(
                                              <Col sm={12}>
                                                <div className="form-group">
                                                  <input className={`form-control input-${input.name}`} title={input.title} type="text" placeholder={input.placeholder} />
                                                </div>
                                              </Col>
                                            );
                                          }
                                          else {
                                            return (
                                              <Col sm={12}>
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
                                    <Col sm={12}>
                                      <div className="text-center">
                                        <button className="btn btn-theme btn-block submit-button animated flipInY visible" type="submit">
                                          Register Now
                                          <i className="fa fa-arrow-circle-right"></i>
                                        </button>
                                      </div>
                                    </Col>
                                  </Row>
                                </form>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-8">
                              <div className="text-holder">
                                <h2 className="caption-title">January 17-19, 2015</h2>
                                <h3 className="caption-subtitle">PHP Conference ın ıstanbul
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="item page text-center slide3">
                  <div className="caption">
                    <div className="container">
                      <div className="div-table">
                        <div className="div-cell">
                          <h2 className="caption-title">
                            <span>January 17-19, 2015</span>
                          </h2>
                          <h3 className="caption-subtitle">PHP Conference ın Istanbul</h3>
                          <p className="caption-text">
                            <a className="btn btn-play" href="http://www.youtube.com/watch?v=O-zpOMYRi0w">
                              <i className="fa fa-play"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>

            <div className="event-description">
              <div className="container">
                <div className="row">
                  <div className="event-background">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-3">
                          <div className="media">
                            <span className="pull-left">
                              <i className="fa fa-calendar fa-2x"></i>
                            </span>
                            <div className="media-body">
                              <h4 className="media-heading">Date</h4>
                              <span>January 17- 19, 2015</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                          <div className="media">
                            <span className="pull-left">
                              <i className="fa fa-map-marker fa-2x"></i>
                            </span>
                            <div className="media-body">
                              <h4 className="media-heading">Location</h4>
                              <span>3200 Barbaros Bulvarı Besiktas/Istanbul, TR</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-2">
                          <div className="media">
                            <span className="pull-left">
                              <i className="fa fa-group fa-2x media-object"></i>
                            </span>
                            <div className="media-body">
                              <h4 className="media-heading">Remaining</h4>
                              <span>245 Tickets</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3">
                          <div className="media">
                            <span className="pull-left">
                              <i className="fa fa-microphone fa-2x"></i>
                            </span>
                            <div className="media-body">
                              <h4 className="media-heading">Speakers</h4>
                              <span>24 Professional Speakers</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </section>
        </div>
    )
  }
}

export default Home;
