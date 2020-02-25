import React from "react";
import Router from "./Components/Router";
import Header from "./Components/Header";
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
