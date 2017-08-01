import React, { Component } from 'react';

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <div>HEADER</div>
        {this.props.children}
        <div>FOOTER</div>
      </div>
    );
  }
}

export default BaseLayout;
