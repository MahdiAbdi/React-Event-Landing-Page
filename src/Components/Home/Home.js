import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  bgDefiner() {
    console.log(Container,Row,Col)
    return {
      background: `transparent url(${this.props.background}) 50% 0 repeat`
    };
  }

  render(){
    return(
      <section className="home" style={this.bgDefiner()}>
        <div className="event-description">
          <div className="container bordered">
            Hello
            {/* FUCK THIS SHIT */}
          </div>
        </div>
      </section>
    )
  }
}

export default Home;
