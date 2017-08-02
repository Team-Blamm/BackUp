import React, {Component} from 'react';
import CartCard from './CartCard';
import '../../styles/Cart.css';

const fakeCart = {
  "cart": [
    {
      "title": "Batman",
      "price": "$800/hr",
      "img_src": "",
      "hours": 2
    },
    {
      "title": "Megatron",
      "price": "$50/hr",
      "img_src": "",
      "hours": 4
    }
  ]
}

const cartStyle = {
  width: '80vw',
  margin: '5vw'
};

const cartCardsStyle = {
  width: '40vw',
  float: 'left'
};

const checkoutStyle = {
  width: '30vw',
  float: 'right',
  border: '1px solid #CCC'
};

class CartPage extends Component {
  constructor() {
    super();
    this.state = {
      cartCardsMap: []
    }
  }


  componentDidMount(){

    console.log(fakeCart);


    const cartCardsMap = fakeCart.map((item) => {
      <CartCard key={item.id} data={item}/>
    });

    this.setState({
      cartCardsMap: cartCardsMap
    })

  };


  render() {
    console.log(this.state.cartCardsMap)
    return (
      <div style={cartStyle}>

        <div>
          <h2>My cart</h2>
        </div>

        {/* left: wrapper for CartCards */}
        <div style={cartCardsStyle}>

        </div>

        {/* right: wrapper for Checkout */}
        <div style={checkoutStyle}>
          <div>
            Individual subtotals [passed from CartCards]
          </div>
          <div>
            Subtotal [sum]
          </div>
          <div>
            Plus tax [whatever]
          </div>
          <div>
            Total [sum of sums]
          </div>
          <div>
            Checkout button
          </div>
        </div>

      </div>
    );
  }

}

export default CartPage;
