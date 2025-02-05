import React from "react";
import { Link } from "gatsby";
import comsoc from "../img/ieee-comsoc.svg";
import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="IEEE ComSoc Tokyo Joint Chapter" style={{ width: "120px" }} />
            </Link>
            {/* Hamburger menu */}
            <button className={`navbar-burger burger ${this.state.navBarActiveClass}`} aria-label="Nav button" data-target="navMenu" onClick={() => this.toggleHamburger()} tabIndex={0}>
              <span />
              <span />
              <span />
            </button>
          </div>
          <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/officers/">
                Officers
              </Link>
              <Link className="navbar-item" to="/blog/">
                Events
              </Link>
              <a className="navbar-item" href="https://www.ieee-jp.org/section/tokyo/chapter/COM-19/com-19.html" target="_blank" rel="noopener noreferrer">
                Past events (to the previous site)
              </a>
            </div>
            <div className="navbar-end has-text-centered">
              <a className="navbar-item" href="https://www.comsoc.org/" target="_blank" rel="noopener noreferrer">
                <span className="icon">
                  <img src={comsoc} alt="IEEE ComSoc" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
