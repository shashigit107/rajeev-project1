
import './App.css';
import { route, Switch } from "react-router-dom"
import Headers from './Headers/header';
import Footer from "./Footers/Footer"

function App() {
  return (
    <div>
      <Switch>
        <route exact path="/">
          <Headers/>
        </route>
      </Switch>
      <Switch>
        <route exact path="/profile">
          <h1>hey... you are at profile page</h1>
        </route>
      </Switch>
      <Switch>
        <route exact path="/shops">
          <h1>hey.....you are at shops page</h1>
        </route>
      </Switch>
      <Switch>
        <route exact path="/faqs">
          <h1>hey......your at faqs page</h1>
        </route>
      </Switch>
      <Switch>
        <route exact path="/cart">
          <h1>hey......your at cart page</h1>
        </route>
      </Switch>
      <Footer/>
      
    </div>
  );
}

export default App;
