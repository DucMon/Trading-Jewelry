import React from "react";
import { Link } from "react-router-dom";
import Banner from "./images/banner.jpg";
import "./style.scss";

class Header extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="navbar">
        <div className="container">
          <div className="row">
            <div class="navbar-header col-md-3 col-sm-12">
              <h1 class="logo logo-image">
                <a href="">
                  <img
                    src="https://mpng.pngfly.com/20180515/xce/kisspng-logo-jewellery-mobius-jewelry-design-llc-silver-5afaa7d0709be8.1149532715263764004613.jpg"
                    alt="iBid"
                  />
                </a>
              </h1>
            </div>
            <div class="first-part col-md-9 col-sm-12">
              <div class="col-md-8 search-form-product">
                <form
                  name="myform"
                  method="GET"
                  class="woocommerce-product-search menu-search"
                  action=""
                >
                  <select
                    name="product_cat"
                    id="product_cat"
                    class="form-control1"
                  >
                    <option value="">Category</option>

                    <option class="level-0" value="jewelry">
                      Jewelry
                    </option>
                  </select>
                  <input type="hidden" value="product" name="post_type" />
                  <input
                    type="text"
                    name="s"
                    class="search-field"
                    maxlength="128"
                    placeholder="Search products..."
                  />
                  <button type="submit" class="btn btn-primary">
                    <i class="material-icons">search</i>
                  </button>
                  <input type="hidden" name="post_type" value="product" />
                </form>
              </div>
              <div class="col-md-4 menu-products">
                <a class="shop_cart" href="">
                  My Cart <i class="material-icons">shopping_basket</i>
                </a>
                <a
                  class="cart-contents"
                  href=""
                  title="View your shopping cart"
                >
                  0 items -{" "}
                  <span class="woocommerce-Price-amount amount">
                    <span class="woocommerce-Price-currencySymbol">$</span>0.00
                  </span>
                </a>

                <div class="header_mini_cart">
                  <div class="widget woocommerce widget_shopping_cart">
                    <h2 class="widgettitle">Cart</h2>
                    <div class="widget_shopping_cart_content">
                      <p class="woocommerce-mini-cart__empty-message">
                        No products in the cart.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar bottom-navbar-default">
          <div className="container">
            <div className="row">
              <div id="navbar" className="navbar-collapse collapse col-md-10">
                <div className="bot_nav_cat_inner">
                  <div className="bot_nav_cat">
                    <button class="bot_cat_button">
                      <span class="cat_ico_block">Categories</span>
                    </button>
                  </div>
                </div>
                <div className="bot_nav_wrap">
                  <ul className="menu nav navbar-nav pull-left nav-effect nav-menu">
                    <li
                      id="menu-item-24"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-has-children menu-item-24"
                    >
                      <a href="">Home</a>
                      <ul class="sub-menu">
                        <li
                          id="menu-item-5828"
                          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5828"
                        >
                          <a href="">Jewelry</a>
                        </li>
                      </ul>
                    </li>
                    <li
                      id="menu-item-24"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-has-children menu-item-24"
                    >
                      <a href="">Vendor</a>
                    </li>
                    <li
                      id="menu-item-24"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-has-children menu-item-24"
                    >
                      <a href="">Anction</a>
                    </li>
                    <li
                      id="menu-item-24"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-has-children menu-item-24"
                    >
                      <a href="">About</a>
                    </li>
                    <li
                      id="menu-item-24"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-has-children menu-item-24"
                    >
                      <a href="">Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
