import React from "react";
import Router from "./Components/Router";
import GlobalStyle from "./Components/GlobalStyles";

class App extends React.Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyle />
      </>
    );
  }
}

export default App;
