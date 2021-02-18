import React, {useState} from "react"
import {BrowserRouter, Link, Route, Switch} from "react-router-dom"
import {Blog} from "./blog/blog";
import {Auth} from "./auth/auth";
import {Settings} from "./user/settings";
import {AdminSettings} from "./user/adminSettings";


function MainApp() {
  return (
    <div>
      <h2>Main App</h2>
      <ul>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
      <Switch>
        <Route path="/blog"><Blog/></Route>
        <Route path="/settings"><Settings/></Route>
        <Route path="/admin"><AdminSettings/></Route>
      </Switch>
    </div>
  )
}

// Context meant to distribute the role of the current user to the subcomponents which need it
// Work in progress
export const RoleContext = React.createContext(null)


function App() {
  const [role, setRole] = useState(null)
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li><Link to="/auth/login">Login</Link></li>
          <li><Link to="/auth/signup">Signup</Link></li>
          <li><Link to="/auth/logout">Logout</Link></li>
        </ul>
        <Switch>
          <RoleContext.Provider value={setRole}>
            <Route path="/auth"><Auth/></Route>
            <Route path="/"><MainApp/></Route>
          </RoleContext.Provider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
