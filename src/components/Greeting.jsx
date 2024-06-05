import React, { Component } from 'react';

const greetingArray = [ // Should make it so that this is only the appropriate greetings
  "Hallo",
  "Hallå",
  "Hej",
];


class Home extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 3000);
  }

  componentWillUnmount() { // Corrected method name
    clearInterval(this.timeout);
  }

  render() {
    let greetingText = greetingArray[this.state.textIdx % greetingArray.length];

    return (
      <span>{greetingText}</span>
    );
  }
}

export default Home;
