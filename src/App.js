import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { AppContextProvider } from "./Context/AppContext";

import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
