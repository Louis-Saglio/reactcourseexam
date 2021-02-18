import {Route, Switch} from "react-router-dom";
import {Login} from "./login";
import {Signup} from "./signup";
import {Logout} from "./logout";
import React from "react";

export function Auth() {
  return (
    <div>
      <Switch>
        <Route path="/auth/login"><Login/></Route>
        <Route path="/auth/signup"><Signup/></Route>
        <Route path="/auth/logout"><Logout/></Route>
      </Switch>
    </div>
  )
}