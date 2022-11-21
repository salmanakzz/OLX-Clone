import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FirbaseContext } from "./store/Context";
import firbase from "./firbase/config";
import Context from "./store/Context";

ReactDOM.render(
  <FirbaseContext.Provider value={{ firbase }}>
    <Context>
      <App />
    </Context>
  </FirbaseContext.Provider>,
  document.getElementById("root")
);
