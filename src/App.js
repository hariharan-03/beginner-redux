import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Headers from './containers/Headers';
import ProductDetails from './containers/ProductDetails';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <div className="App">
      <Router>
      <Headers/>
      {/* <Switch> */}
      <Route path="/" exact component={ProductListing} />
      <Route path="/product/:productId" exact component={ProductDetails} />
      <Route>404 Not Found!</Route>
      {/* </Switch> */}
      </Router>
    
    </div>
  );
}

export default App;
