import React, { Component } from 'react';

import '../styles/ProdDetails.css';

export default class ProdDetails extends Component {
  constructor() {
    super();


    {/* set props received from ProductList*/}

  }

  {/* map over props and match to title params */}

  {/* conditional statement to check if match */}


  return (
    <div className={person.type + "Body"}>
      <div className="mainContainer">
        <div className="imageContainer">
          <img className="personImage" src={person.img_src} alt={"portrait of " + person.title} />
        </div>
        <div className="textContainer"
          <header className="header">
            <h2>{person.title}</h2>
            <h4>{person.type}</h4>
            <h3>{person.tagline}</h3>
          </header>
          <select name="services" className="servicesSelect">
        {/* will this work, since services is an array? */}
            <option>{person.services}</option>
          </select>
          <form className="hoursCounter">
            <label for="hours" className="hoursLabel">Hours</label>
            <button type="submit" name="hours" className="hoursUp">
            <input type="text" name="hours" value="1" />
            <button type="submit" name=hours className="hoursDown">
            <label for="total" className="totalLabel">Total Price</label>
            <input type="text" name="total" className="totalInput" value="" />
            <button type="submit" name="add" className="cartButton">Add to Cart</button>
          </form>
          <div className="description">{person.description}</div>
        {/* Do I need to do a separate fetch to get review info? */}
          <div className="reviews">{reviews}<div>
        </div>
      </div>
    </div>
   )
}
