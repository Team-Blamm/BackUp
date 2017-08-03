import React, {Component} from 'react';
import CartCard from './CartCard';
import '../../styles/Cart.css';

const fakeCart = {
  "cart": [
    {
      "title": "Batman",
      "price": "800",
      "img_src": "https://static.comicvine.com/uploads/original/11111/111112793/3031477-nealadamsbatman.jpg",
      "hours": 2
    },
    {
      "title": "Megatron",
      "price": "50",
      "img_src": "https://vignette1.wikia.nocookie.net/xaviertv/images/7/7f/Megatron.jpg/revision/latest?cb=20110701190508",
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
      cartCardsMap: [],
      subtotal: 0,
      tax: 0,
      total: 0,
    }
  }

  componentDidMount(){
    const cartCardsMap = fakeCart.cart.map((item) => {
      return (
      <CartCard key={item.title} data={item}/>
      )
    });
    this.setState({
      cartCardsMap: cartCardsMap
    })

  };

  render() {

    return (
      <div style={cartStyle}>
        <div>
          <h2>My cart</h2>{this.props.children}
        </div>
        {/* left: wrapper for CartCards */}
        <div style={cartCardsStyle}>
          {this.state.cartCardsMap}
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
            <button>Checkout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartPage;
