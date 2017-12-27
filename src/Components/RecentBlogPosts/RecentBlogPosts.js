import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class RecentBlogPosts extends Component {
  constructor(props) {
    super(props);
  }

  widthDefiner() {
    let customWidth = Math.floor(100/this.props.column);
    console.log(this.props.column,customWidth);
    let widthStyle = {
      width: `${customWidth}%`,
    }
    return widthStyle;
  }

  render(){
    return(
      <section className="recent-bp">
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
          <Row className="post-row">
            {
              this.props.data.map((post, index) =>
                {
                  if(index<this.props.limit) {
                    return(
                      <Col md="auto" style={this.widthDefiner()}>
                        <article className="post">
                          <div className="post-media">
                            <div className="post-type">
                              <i className={`fa fa-${post.type}`}></i>
                            </div>
                            <img src={post.img.src} alt={post.img.alt} />
                          </div>
                          <div className="post-header">
                            <h2 className="post-title"><a href="#">{post.title}</a></h2>
                            <div className="post-meta">
                              <span className="post-date">
                                Posted on
                                <span className="date">{post.date}</span>
                              </span>
                              <span className="pull-right">
                                <i className="fa fa-comment" />
                                <a href="#">{post.comments.length}</a>
                              </span>
                            </div>
                          </div>
                          <div className="post-body">
                            <div className="post-excerpt">
                              <p>{post.text}</p>
                            </div>
                          </div>
                          <div className="post-footer">
                            <span className="post-readmore">
                              <a href={post.button.href} className="btn btn-theme btn-theme-transparent">{post.button.text}</a>
                            </span>
                          </div>
                        </article>
                      </Col>
                    );
                  }
                }
              )
            }
          </Row>
          <Row className="buttons">
            {
              this.props.button.map((btn, index) =>
                <a href={btn.href} className="btn btn-theme">
                  <i className={`fa fa-${btn.icon}`} /> {btn.text}
                </a>
              )
            }
          </Row>
        </div>
      </section>
    )
  }
}

export default RecentBlogPosts;
