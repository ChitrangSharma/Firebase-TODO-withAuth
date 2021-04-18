import './App.css';
import Navbar from './Components/Navbar';
import Todo from './Components/Todo';
import { BrowserRouter,Switch, Route, Link } from "react-router-dom";
import Signin from './Components/Signin';
import Login from './Components/Login';
// import Login from "./Components/Login"
function App() {
  return (
  <>
    <Navbar/>
    {/* <Todo/> */}
<Switch>
  <Route path="/" exact>
    <Todo/>
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
