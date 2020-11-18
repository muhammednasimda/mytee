import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import ProductEdit from "./pages/productEdit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/productEdit" component={ProductEdit} />
      </BrowserRouter>
    </div>
  );
}

export default App;
