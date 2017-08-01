import React, { Component } from "react";

class ProductCard extends Component {
  render() {
    let products = this.props.productList.results.map(product => {
      return (
        <div key={product.title}>
          <div >
            <p>{product.title}</p>
          </div>
        </div>
      );
    });
    return (
      <div>
        {products}
      </div>
    );
  }
}

export default ProductCard;
