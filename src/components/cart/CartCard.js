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
  constructor() {
    super();
    this.state = {
      hours: 0,
      price: 0,
      total: 0,
    }
  };


  componentWillMount() {


    let priceValue = this.props.price

    // priceValue => {
    //   return this.props.price.replace(/^\D+|\D+$/g, "")
    // };
    //
    // let initialTotal = (priceValue * this.state.hours);
    //
    // this.setState({
    //   price: priceValue,
    //   total: initialTotal
    // });
  }

  render() {
    return(
      <div>
        Stuff
      {/* <div style={cartCardStyle}>
          <div style={cartImageStyle}>
            Image {data.img_src}
          </div>
          <div>
            Name {data.title}
          </div>
          <div>
            <div style={cartCardHoursStyle}>
              Hours {this.state.hours}
            </div>
            <div style={cartCardTotalStyle}>
              Total
            </div>
          </div>
      </div>
      <div>
        {cartCardsMap}
      </div> */}
      </div>
    );
  }
}

export default CartCard;
