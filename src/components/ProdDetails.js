import React from "react";

const Product = props => {

  console.log(props);
  let product = props;
  return (
    <div className="Body">
      <div className="mainContainer">
        <div className="imageContainer">
          <img
            className="productImage"
            src={product.img_src}
            alt={"portrait of " + product.title}
          />
        </div>
        <div className="textContainer">
          <header className="header">
            <h1>Matt is Here</h1>
            <h2>
              {product.title}
            </h2>
            <h4>
              {product.type}
            </h4>
            <h3>
              {product.tagline}
            </h3>
          </header>
          <select name="services" className="servicesSelect">
            {/* will this work, since services is an array? */}
            <option>
              {product.services}
            </option>
          </select>
          <form className="hoursCounter">
            <label htmlFor="hours" className="hoursLabel">
              Hours
            </label>
            <button type="submit" name="hours" className="hoursUp" />
            <input type="text" name="hours" value="1" />
            <button type="submit" className="hoursDown" />
            <label htmlFor="total" className="totalLabel">
              Total Price
            </label>
            <input type="text" name="total" className="totalInput" value="" />
            <button type="submit" name="add" className="cartButton">
              Add to Cart
            </button>
          </form>
          <div className="description">
            {product.description}
          </div>
          {/* Do I need to do a separate fetch to get review info? */}
          <div className="reviews" />
        </div>
      </div>
    </div>
  );
};

export default Product;
