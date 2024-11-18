// import Image from "next/image";
// import styles from "./page.module.css";
import Header from "@/components/Hesader";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SideBar from "@/components/SideBar";
import Quote from "@/components/Quote";
import Link from "next/link";
import Slider from "@/components/Slider";

export default function Test() {
  return (
<>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
  />
  <title>Dormatic - HTML 5 Template Preview</title>
  {/* Fav Icon */}
  <link rel="icon" href="assets/images/favicon.ico" type="image/x-icon" />
  {/* Google Fonts */}
  <link
    href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />

  {/* page wrapper */}
  <div className="boxed_wrapper">

    {/* preloader */}
<Header/>

    {/* End Mobile Menu */}
    {/* Page Title */}
<Slider />
    {/* End Page Title */}
    {/* service-details */}
    <section className="service-details">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-8 col-md-12 col-sm-12 content-side">
            <div className="service-details-content">
              <div className="content-one">
                <figure className="image-box">
                  <img src="assets/images/door7.jpg" alt="" />
                </figure>
                <div className="text">
                  <h2>Sydney Sliding Door Repairs</h2>
                  <h3>
                  We are the foremost specialists in door repairs and all door technology systems in the Sydney area
                  </h3>
                  <p>
                  <a href="https://sydneyslidingdoorsrepair.com.au">Sydneyslidingdooorsrepair.com.au</a> has been established and working in the Sydney area since 1992. Our superior technology and highest quality products for all door repairs have been formulated by years of trials and experimentation. Our door technology systems are the best in our field, making us the market leader in all domestic and commercial contexts.
                  </p>
                  <p>
                  <a href="https://sydneyslidingdoorsrepair.com.au">Sydneyslidingdooorsrepair.com.au</a> carries the most comprehensive stocks of all the leading brands of doors and associated door equipment for the following contexts:
                  </p>
                </div>
              </div>
              <div className="two-column">
                <figure className="image-box">
                  <img src="assets/images/door8.jpg" alt=""
                  className="mh-300" />
                </figure>
                <div className="inner-box">
                  <div className="single-item">
                    <figure className="icon-box">
                      <img src="assets/images/icons/icon-1.png" alt="" />
                      <div className="icon-shape" />
                    </figure>
                    <h3>Home</h3>
                    <p>
                    Repairing all sliding door types around your home
                    </p>
                  </div>
                  <div className="single-item">
                    <figure className="icon-box">
                      <img src="assets/images/icons/icon-4.png" alt="" />
                      <div className="icon-shape" />
                    </figure>
                    <h3>Office</h3>
                    <p>
                    We can fix all door closer issues and sliding door repairs for your office.
                    </p>
                  </div>

                </div>
              </div>
              <div className="content-two">
                <div className="text">
                  <h3>Our commitment to Quality</h3>
                  <p>
                  We are completely dedicated to an ethic of the highest quality door control. We have an ongoing commitment to using the foremost products and most efficient service in the following situations:
                  </p>
                  <ul>
                  <li>Aluminium doors</li>
<li>Sliding windows</li>
<li>Locks</li>
<li>Fire Doors</li>
<li>Joinery Doors</li>
<li>Roller Doors (but not garage roller doors)</li>
<li>Security Doors</li>
<li>Sliding Doors</li>
<li>Timber Doors</li>
                  </ul>
                  <p className="mt-22">
                  We owe our continuing success to our ongoing development and production of systems and services.
                  </p>
                  <p>
                  We are constantly researching and developing new products and repair methodologies to suit changing technological needs.
                  </p>
                  <p>
                  We confer with architects and designers, timber and glass product specialists and also, the aluminium industry.
                  </p>
                  <p>
                  We are associated with local, national and of course, international trade associations and participate in regular seminars and conventions.
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 SideBar-side">
<SideBar/>
          </div>
        </div>
      </div>
    </section>

  <Quote />



    {/* service-form-section end */}
<Footer/>
<ScrollToTop/>

    {/*Scroll to top*/}

  </div>
  {/* jequery plugins */}
  {/* main-js */}
  {/* End of .page_wrapper */}
</>

  );
}
