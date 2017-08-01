import React, { Component } from "react";

class ProductCard extends Component {
  render() {
    let products = this.props.productList.results.map(product => {
      return (
        <div key={product.title}>
          <div className="productBorder">
            <div>
              <img className="" src={product.img_src} alt={product.title}/>
            </div>
            <div>
              <p>
                {product.title}
              </p>
              <p>
                {product.price}
              </p>
              <div>
                <h5>Services</h5>
                <ul>
                  <li>{product.services[0]}</li>
                  <li>{product.services[1]}</li>
                  <li>{product.services[2]}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="productListGrid">
        {products}
      </div>
    );
  }
}

export default ProductCard;
