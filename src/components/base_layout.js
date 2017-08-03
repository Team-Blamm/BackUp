import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class BaseLayout extends Component {
  render() {
    return (

      <div className="App base" style={{fontFamily: "Bangers" }}>

        {/* HEADER */}
        <header id="header" className="header-transparent" style={{fontSize: 36, display: 'flex', justifyContent: 'space-between', opacity: '100%', top:'0', width: '100%'}}>

        {/* Logo */}
        <div className="branding">
          <img src="https://gallery.mailchimp.com/8fe3233563a12b9c886595f8f/images/03d41d7e-d26a-4c53-b25b-4df580f8b8ae.png" width="125" height="125" style={{borderRadius: '50px', marginLeft: '20px', marginTop: '15px'}}/>
        </div>
        {/* end of logo */}


        {/* Nav Menu */}
        <nav className="top-nav" >
          <ul id="main-menu" className="menu-ul" style={{listStyleType: 'none', display: 'flex', justifyContent: 'center', padding: '20px'}}>
            <li className="menu-item"><NavLink to="/" style={{textDecoration: 'none', margin:'50px', color: "black"}}>Home</NavLink></li>
            <li className="menu-item"><NavLink to="/" style={{textDecoration: 'none', margin:'50px', color: "black"}}>Heroes</NavLink></li>
            <li className="menu-item"><NavLink to="/" style={{textDecoration: 'none', margin:'50px', color: "black"}}>Villains</NavLink></li>
          </ul>
        </nav>
        {/* end Nav Menu */}

        {/* User Options*/}
        <div className="user-menu">
          <ul id="user-main-menu" className="menu-ul"style={{listStyleType: 'none', display: 'flex', justifyContent: 'center', padding: '20px'}} >
            <li className="menu-item"><NavLink to="/"><i className="fa fa-user" aria-hidden="true" style={{marginRight:"30px", color: "black"}}></i></NavLink></li>
            <li className="menu-item"><NavLink to="/"><i className="fa fa-shopping-cart" aria-hidden="true" style={{marginRight:"2px", color: "black"}}></i></NavLink></li>
            <span class="amount" style={{fontFamily: "Roboto", fontSize: 18, padding: "8px", marginLeft: "0px"}}><span class="currencySymbol">$</span>0.00</span>
          </ul>
        </div>
        {/* end user options */}
      </header>
      {/* END OF HEADER */}


        {this.props.children}


      {/* FOOTER */}
      <footer id="footer" style={{width: '100%', fontFamily: 'Roboto'}}>

        {/* Customer Support */}
        <div className="footer-support" style={{height: '50px', width: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
          <span>Need help? </span><span> Call our award-winning support team 24/7 at (800) GO-BLAMM</span>
        </div>
          {/* end of customer support */}


          {/* Footer-About-Contact-Social Media */}
        <div className="footer-about-contact-socialmedia">
          <div className="about">
            <h3>About BLAMM!</h3>
            <p>Not everyone is Bruce Wayne. Saving and destroying humanity doesn't pay the bills! That's why we here at BLAMM! recruit and retain the best superheroes and villains to meet your specific needs above your level of satisfaction.</p>
          </div>

          <div className="footer-contact">
            <nav className="footer-nav" >
              <ul id="main-menu" className="menu-ul" style={{listStyleType: 'none', display: 'flex', justifyContent: 'center', padding: '20px'}}>
                <li className="menu-item"><NavLink to="/" style={{textDecoration: 'none', margin:'50px', color: "black"}}>Home</NavLink></li>
                <li className="menu-item"><NavLink to="/" style={{textDecoration: 'none', margin:'50px', color: "black"}}>Heroes</NavLink></li>
                <li className="menu-item"><NavLink to="/" style={{textDecoration: 'none', margin:'50px', color: "black"}}>Villains</NavLink></li>
              </ul>
            </nav>
            <p>&copy;Copyright 2017 / All Rights Reserved</p>
        </div>

        <div className="social-media">
            <ul id="social-links" className="menu-ul" style={{listStyleType: 'none', display: 'flex', justifyContent: 'center', padding: '20px'}}>
              <li className="menu-item"><NavLink to="/"><i className="fa fa-twitter fa-fw" aria-hidden="true" style={{marginRight:"30px", color: "black"}}></i></NavLink></li>
              <li className="menu-item"><NavLink to="/"><i className="fa fa-facebook fa-fw" aria-hidden="true" style={{marginRight:"30px", color: "black"}}></i></NavLink></li>
    					<li className="menu-item"><NavLink to="/"><i className="fa fa-linkedin fa-fw" aria-hidden="true" style={{marginRight:"30px", color: "black"}}></i></NavLink></li>
            </ul>
        </div>

      </div>
      {/* end of Footer-About-Contact-Social Media */}
      </footer>
      {/* END OF FOOTER */}
    </div>
    );
  }
}

export default BaseLayout;
