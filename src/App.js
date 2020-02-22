import React from "react";

class App extends React.Component {
  state = {
    test: null
  };
  componentDidMount() {
    console.log("test");
  }
  render() {
    return <div>test</div>;
  }
}

export default App;
