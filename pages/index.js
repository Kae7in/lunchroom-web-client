import React, { Component } from 'react';

class Splash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api', { mode: 'cors'})
      .then(response => response.json())
      .then(data => this.setState({ data: data.a }));
  }

  render() {
    return (
      <html>
        <body>
          <h1>My Second Heading</h1>
          <p>My first fetch: {this.state.data}</p>
        </body>
      </html>
    );
  }
}

export default Splash

// const Index = () => (
//   <html>
//     <body>
//       <h1>My First Heading</h1>
//       <p>My first paragraph.</p>
//     </body>
//   </html>
// )
//
// export default Index


// import React, { Component } from 'react';
//
// class App extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       data: null,
//     };
//   }
//
//   componentDidMount() {
//     fetch('localhost:3000/api')
//       .then(response => response.json())
//       .then(data => this.setState({ data }));
//   }
//
// }
//
// export default Index;
