import React, { Component } from "react";

class SideBar extends Component {
  render() {
      return (
        <div>
          <div>
            <h6>Type</h6>
            <ul>
              <li>SuperHero</li>
              <li>Villain</li>
              <li></li>
            </ul>
          </div>
          <div>
            <h6>Price</h6>
            <ul>
              <li>Highest</li>
              <li>Lowest</li>
            </ul>
          </div>
          <div>
            <h6>Review</h6>
              <ul>
                <li>4 Star +</li>
                <li>3 Star +</li>
                <li>2 Star +</li>
                <li>1 Star +</li>
              </ul>
          </div>
        </div>
      );
  }
}

export default SideBar;

// let sideBar = this.props.productList.results.map(product => {
