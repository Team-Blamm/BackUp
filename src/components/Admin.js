import React, { Component } from 'react';

class Admin extends Component {
  render() {
    return (
      <div className="adminPage">
      <div><h1>Admin Page</h1></div>
      <div>
        <form>
          <label>
            <input className="" type="text" name="name" placeholder="Title" />
          </label>
          <br />
          <label>
            <input className="" type="text" placeholder="Product Description" />
          </label>
          <br />
          <label>
            <input className="" type="text" placeholder="Price" />
          </label>
          <br />
          <div className="">
            <input className=""type="submit" value="Submit" />
          </div>
        </form>
      </div>

      </div>
    )
  }
}

export default Admin;
