import Dashboard from "./Components/Dashboard/Dashboard"
import Login from "./Components/login/login"






function App() {
  return (
    <Router>
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
     </Router>
    
  );
}

export default App;
