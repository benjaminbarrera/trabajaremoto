import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Home from './Pages/Home'

const Routing = ()=> {
  return (
    <div>
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/first" component={() => <div>first</div>} />
            <Route path="/second" component={() => <div>second</div>} />
            <Route path="/third" component={() => <div>third</div>} />
        </Switch>
    </div>
  );
}

export default Routing;