import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Topbar from "./component/topbar/Topbar";
import Home from "./component/home/Home";
import Favorite from "./component/favorite/Favorite";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Topbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/favorite" component={Favorite} />
          </Switch>
        </>
      </Router>
    </Provider>
  );
}

export default App;
