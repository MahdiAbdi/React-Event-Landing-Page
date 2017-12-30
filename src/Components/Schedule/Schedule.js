import React, { Component } from 'react';
import { Row ,Col } from 'reactstrap';
class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
      selectedSubTab: 0,
    };
  }
  changeSelectedTab(index) {
    this.setState({
      selectedTab: index,
    });
  }
  changeSelectedSubTab(index) {
    this.setState({
      selectedSubTab: index,
    });
  }
  tabsWidthDefiner(thing) {
    let customWidth = Math.floor(100/thing.length);
    let widthStyle = {
      width: `${customWidth}%`,
    }
    return widthStyle;
  }
  render(){
    return(
      <section id="plan" className="schedule">
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
              <a href={this.props.button.href} className="btn btn-theme btn-theme-lg btn-theme-transparent-grey">
                <i className={`fa fa-${this.props.button.icon}`} />{this.props.button.text}</a>
            </Col>
          </Row>
          <div className="table">
            <Row className="tabs">
              {
                this.props.data.map((cat, index) =>
                  <Col className={`${this.state.selectedTab === index ? 'active' : ''} tab`} key={index} onClick={() => this.changeSelectedTab(index)} md="auto" style={this.tabsWidthDefiner(this.props.data)}>
                    <a href="#plan">
                      <strong>{cat.title}</strong>
                      <small>{cat.subtitle}</small>
                    </a>
                  </Col>
                )
              }
            </Row>
            <Row className="subtabs">
              {
                this.props.data[this.state.selectedTab].subTabs.map((subTab, index) =>
                  <Col className={`${this.state.selectedSubTab === index ? 'active' : ''} subtab`} key={index} onClick={() => this.changeSelectedSubTab(index)} md="auto" style={this.tabsWidthDefiner(this.props.data[this.state.selectedTab].subTabs)}>
                    <a href="#plan">
                      <strong>{subTab.title}</strong>
                    </a>
                  </Col>
                )
              }
            </Row>
            <Row className="tab-content">
              {
                this.props.data[this.state.selectedTab].subTabs[this.state.selectedSubTab].posts.map((post, index) =>
                  <Row className="post">
                    <Col md={3}>
                      <img src={post.avatar} />
                    </Col>
                    <Col md={9} className="content" >
                      <div className="meta">
                        <span><i className="fa fa-clock-o"/> {post.time}</span>
                        <a href="#" className="pull-right">
                          <span className="fa fa-stack fa-xs">
                            <i className="fa fa-stack-2x fa-circle-thin"></i>
                            <i className="fa fa-stack-1x fa-share-alt"></i>
                          </span>
                        </a>
                      </div>
                      <h2 className="title">{post.title}</h2>
                      <p>{post.desc}</p>
                      <h5 className="info"><i className="fa fa-microphone" /> {post.name} / {post.position}</h5>
                    </Col>
                  </Row>
                )
              }
            </Row>
          </div>
        </div>
      </section>
    )
  }
}

export default Schedule;
