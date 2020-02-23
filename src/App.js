import React from "react";

class App extends React.Component {
  state = {
    test: null
  };
  componentDidMount() {}
  render() {
    return (
      <form method="post" action="http://localhost:3001/api/items">
        <input type="text" name="test" value="123" />
        <input type="submit" />
      </form>
    );
  }
}

export default App;
