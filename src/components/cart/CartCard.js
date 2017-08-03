import React, {Component} from 'react';
import '../../styles/Cart.css';

const cartCardStyle = {
  height: '4rem',
  border: '1px solid #CCC'
}

const cartImageStyle = {
  width:'10vw',
  float:'left',
  height:'100%',
  border: '1px solid #CCC'
};

const cartCardHoursStyle = {
  float: 'left',
  display: 'inline'
}

const cartCardTotalStyle = {
  float: 'right',
  display: 'inline'
}

class CartCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.data.title,
      hours: this.props.data.hours,
      price: this.props.data.price,
      img_src: this.props.data.img_src,
      itemTotal: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  };


  handleChange(e) {
    if (e.target.value === "-") {
      this.setState({
        hours: this.state.hours - 1,
        itemTotal: this.state.price * (this.state.hours - 1)
      })
    } else if (e.target.value === "+") {
      this.setState({
        hours: this.state.hours + 1,
        itemTotal: this.state.price * (this.state.hours + 1)
      })
    };
  };

  componentWillMount(){
    this.setState({
      itemTotal: this.state.price * this.state.hours
    })
  }

  render() {
    return(
      <div>
      <div style={cartCardStyle}>
          <div style={cartImageStyle}>
            {/* <img src={this.state.img_src} /> */}
          </div>
          <div>
            {this.state.title}
          </div>
          <div>
            <div style={cartCardHoursStyle}>
              <button onClick={this.handleChange} value="-">-</button>
              {this.state.hours}
              <button onClick={this.handleChange} value="+">+</button>
            </div>
            <div style={cartCardTotalStyle}>
              {this.state.itemTotal}
            </div>
          </div>
      </div>
      <div>
      </div>
      </div>
    );
  }
}

export default CartCard;
