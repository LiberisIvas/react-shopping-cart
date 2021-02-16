import React from "react";
import Products from "./components/Products";
import data from "./data.json"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    }
  }
  render() {
  return (
    <div className="grid-container">
      <header>
        <a href="/"> Your shopping cart </a>
        
      </header>
      <div className="content">
        <div className="main">
          <Products products={this.state.products}></Products>
        </div>
        <div className="sidebar">Cart Items</div>
      </div>
      <footer> All Rights Reserved</footer>
    </div>
  );
}
}
export default App;
