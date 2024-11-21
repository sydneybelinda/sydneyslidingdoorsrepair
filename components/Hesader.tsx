"use client"

import Link from "next/link"


export default function Header() {

  
    return (
        <>
        <header className="main-header style-one">
      {/* header-top */}
      <div className="header-top">
        <div className="auto-container">
          <div className="top-inner clearfix">
            <ul className="info pull-left clearfix">
              <li>
                <i className="fal fa-phone" />
                0401 349 821
              </li>
              <li>
                <i className="far fa-clock" />
                Mon - Sat : 9am to 7pm Sunday is CLOSED
              </li>
            </ul>
            <div className="right-column pull-right clearfix">
              <ul className="social-links clearfix">
                <li>
                  <a href="index.html">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="index.html">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="index.html">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="index.html">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="index.html">
                    <i className="fab fa-google-plus-g" />
                  </a>
                </li>
              </ul>
              <div className="dropdown-box clearfix">
                {/* <div className="language">
                  <a href="index.html" className="link">
                    Eng
                  </a>
                  <ul>
                    <li>
                      <a href="index.html">Eng</a>
                    </li>
                    <li>
                      <a href="index.html">Chi</a>
                    </li>
                    <li>
                      <a href="index.html">Spa</a>
                    </li>
                    <li>
                      <a href="index.html">Tur</a>
                    </li>
                  </ul>
                </div> */}
                {/* <div className="money-box">
                  <a href="index.html" className="link">
                    <span>$</span>&nbsp;USD
                  </a>
                  <ul>
                    <li>
                      <a href="index.html">1000</a>
                    </li>
                    <li>
                      <a href="index.html">2000</a>
                    </li>
                    <li>
                      <a href="index.html">3000</a>
                    </li>
                    <li>
                      <a href="index.html">4000</a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header-lower */}
      <div className="auto-container">
        <div className="header-lower">
          <div className="outer-box clearfix">
            <div className="logo-box pull-left">
              <figure className="logo">
                <Link href="/">
                  <img src="/assets/images/logo.png" alt=""
                  className="logo" />
                </Link>
              </figure>
            </div>
            <div className="menu-area pull-right clearfix">
              {/*Mobile Navigation Toggler*/}
              <div className="mobile-nav-toggler">
                <i className="icon-bar" />
                <i className="icon-bar" />
                <i className="icon-bar" />
              </div>
              <nav className="main-menu navbar-expand-md navbar-light">
                <div
                  className="collapse navbar-collapse show clearfix"
                  id="navbarSupportedContent"
                >
                  <ul className="navigation clearfix">

                                        <li>
                      <Link href="/" >Home</Link >
                    </li>
                    <li>
                      <a href="/about-us">About Us</a>
                    </li>
                    <li>
                      <a href="/services-2">Services</a>
                    </li>
                    <li>
                      <a href="/testimonials">Testimonials</a>
                    </li>
                    <li>
                      <a href="/guarantee">Guarantee</a>
                    </li>
                    {/* <li>
                      <a href="contact.html">FAQ</a>
                    </li> */}
                    <li className="current dropdown">
                      <a>FAQ</a>
                      <ul>
                        <li>
                          <a href="/faqs/faqs-general">General FAQs</a>
                        </li>
                        <li>
                          <a href="/faqs/sliding-window-repairs-faqs">Sliding Window Repairs FAQ</a>
                        </li>



                      </ul>
                    </li>
                    <li>
                      <a href="/contact-us">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="menu-right-content clearfix">
                {/* <div className="search-box-outer">
                  <div className="dropdown">
                    <button
                      className="search-box-btn"
                      type="button"
                      id="dropdownMenu3"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="icon-search" />
                    </button>
                    <div
                      className="dropdown-menu search-panel"
                      aria-labelledby="dropdownMenu3"
                    >
                      <div className="form-container">
                        <form method="post" action="blog.html">
                          <div className="form-group">
                            <input
                              type="search"
                              name="search-field"
                              defaultValue=""
                              placeholder="Search...."
                              required=""
                            />
                            <button type="submit" className="search-btn">
                              <span className="fas fa-search" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="btn-box">
                  <a href="/quote" className="theme-btn-one">
                    <span className="btn-shape" />
                    Free quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*sticky Header*/}
      <div className="sticky-header">
        <div className="auto-container">
          <div className="outer-box clearfix">
            <div className="logo-box pull-left">
              <figure className="logo">
                <Link href="/">
                  <img src="/assets/images/small-logo.png" alt="" 
                  className="logo"
                  />
                </Link>
              </figure>
            </div>
            <div className="menu-area pull-right">
              <nav className="main-menu clearfix">
                {/*Keep This Empty / Menu will come through Javascript*/}
              </nav>
              <div className="menu-right-content clearfix">
                {/* <div className="search-box-outer">
                  <div className="dropdown">
                    <button
                      className="search-box-btn"
                      type="button"
                      id="dropdownMenu4"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="icon-search" />
                    </button>
                    <div
                      className="dropdown-menu search-panel"
                      aria-labelledby="dropdownMenu4"
                    >
                      <div className="form-container">
                        <form method="post" action="blog.html">
                          <div className="form-group">
                            <input
                              type="search"
                              name="search-field"
                              defaultValue=""
                              placeholder="Search...."
                              required=""
                            />
                            <button type="submit" className="search-btn">
                              <span className="fas fa-search" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="btn-box">
                  <a href="/quote" className="theme-btn-one">
                    <span className="btn-shape" />
                    Freee quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* main-header end */}
    {/* Mobile Menu  */}
    <div className="mobile-menu">
      <div className="menu-backdrop" />
      <div className="close-btn">
        <i className="fas fa-times" />
      </div>
      <nav className="menu-box">
        <div className="nav-logo">
          <a href="index.html">
            <img src="assets/images/logo-2.png" alt="" title="" />
          </a>
        </div>
        <div className="menu-outer">
          {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
        </div>
        <div className="contact-info">
          <h4>Contact Info</h4>
          <ul>
            <li>Minogue Cres <br/>Forest Lodge  NSW  2037</li>
            <li>
            <a href="tel:0401349821">0401 349 821</a>
            </li>
            <li>
            <a href="mailto:sales@sydneyslidingdoorsrepair.com.au">
                sales@sydneyslidingdoorsrepair.com.au
                </a>
            </li>
          </ul>
        </div>
        <div className="social-links">
          <ul className="clearfix">
            <li>
              <a href="index.html">
                <span className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="index.html">
                <span className="fab fa-facebook-square" />
              </a>
            </li>
            <li>
              <a href="index.html">
                <span className="fab fa-pinterest-p" />
              </a>
            </li>
            <li>
              <a href="index.html">
                <span className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a href="index.html">
                <span className="fab fa-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    {/* End Mobile Menu */}
    </>
    )
  }
  