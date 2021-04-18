import React,{useState, useEffect} from "react"
import './App.css';
import Navbar from './Components/Navbar';
import Todo from './Components/Todo';
import { BrowserRouter,Switch, Route, Link } from "react-router-dom";
import Signin from './Components/Signin';
import Login from './Components/Login';

import {auth} from './firebase'
// import Login from "./Components/Login"
function App() {
  const [user, setUser]= useState(null)
  useEffect(()=>{
    const unsubscribe= auth.onAuthStateChanged(
      user=>{
        if(user) setUser(user)
        else setUser(null)
      }
    )
return ()=>{
  unsubscribe()
}
  },[]) 
  return (
  <>
    <Navbar user={user}/>
    {/* <Todo/> */}
<Switch>
  <Route path="/" exact>
    <Todo  user={user}/>
  </Route>
  <Route path="/signin" exact>
    <Signin/>
  </Route>
  <Route path="/login" exact>
    <Login/>
  </Route>
</Switch>
</>
  );
}

export default App;
