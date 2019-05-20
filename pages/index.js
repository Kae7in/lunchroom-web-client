import React, { Component } from 'react';

class Splash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/beta-email-signup', { mode: 'cors'})
      .then(response => response.json())
      .then(data => this.setState({ data: data.msg }));
  }

  render() {
    return (
      <div>
        <h1>My Second Heading</h1>
        <p>My first fetch: {this.state.data}</p>
      </div>
    );
  }
}

export default Splash
