import axios from "axios";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import Nav from "./Nav";
import Header from "./Header";
import "./App.css";

function App(props) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        `https://products-api-01.herokuapp.com/api/products`
      );
      setProducts(response.data);
      setFilteredProducts(response.data);
      console.log(response.data);
    };
    getProducts();
  }, []);

  return (
    <div className="App">
     <Header />
      <Switch>
        <Route exact path="/">
          
          <Nav
            products={products}
            setFilteredProducts={setFilteredProducts}
            filteredProducts={filteredProducts}
          />
          <Products products={filteredProducts} />
        </Route>
        <Route path="/product/:id">
          <ProductDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
