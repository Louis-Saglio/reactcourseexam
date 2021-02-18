import React, {useCallback, useContext, useState} from "react";
import {authService} from "../services";
import {RoleContext} from "../App";

export function Login() {
  const setRole = useContext(RoleContext)
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const login = useCallback(
    () => {
      authService.login(user, password).then((role) => setRole(role))
    },
    [user, password, setRole]
  )

  return (
    <div>
      <h3>Login</h3>
      <input placeholder="username" value={user} onChange={event => setUser(event.target.value)}/>
      <input placeholder="password" type="password" value={password}
             onChange={event => setPassword(event.target.value)}/>
      <button onClick={authService.login}>Submit</button>
    </div>
  )
}