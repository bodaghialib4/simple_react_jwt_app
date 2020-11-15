import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {isAuthenticated} from "../repository";

class Header extends Component {

  logOut() {
    localStorage.removeItem('x-access-token');
  }

  _renderLogInOut() {
    if (isAuthenticated())
      return (<li className="btn" onClick={this.logOut}><a href="/">Log out</a></li>)
    else
      return (<li className="btn"><Link to="/login">Log in</Link></li>)
  }

  _renderMenuItem(label, linkTo, hide) {
    if (hide) return null;
    return (<Link to={linkTo} className="p-2">{label}</Link>);
  }

  render() {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom shadow-sm">
        <h3 className="my-0 nav-item"><Link to="/" className="nav-link">DevTip</Link></h3>
        <nav className="my-2 my-md-0 mr-md-auto">
          {this._renderMenuItem("Home", "/", false)}
          {this._renderMenuItem("Regular Tips", "/tip/regular", false)}
          {this._renderMenuItem("Special Tips", "/tip/special", !isAuthenticated())}
        </nav>
        {this._renderLogInOut()}
      </div>
    );
  }
}

export default Header;
