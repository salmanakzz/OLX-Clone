import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import View from "./Pages/ViewPost";
import "./App.css";
import { AuthContext, FirbaseContext } from "./store/Context";

/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";
import Post from "./store/PostContext";

function App() {
  const { setUser } = useContext(AuthContext);
  const { firbase } = useContext(FirbaseContext);
  useEffect(() => {
    firbase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div>
      <Post>
        <Router>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/view">
            <View />
          </Route>
        </Router>
      </Post>
    </div>
  );
}

export default App;
