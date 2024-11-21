// import Image from "next/image";
// import styles from "./page.module.css";
import Header from "@/components/Hesader";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SideBar from "@/components/SideBar";
import Quote from "@/components/Quote";
import Link from "next/link";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Call 0401 349 821 | Sydney Sliding Doors Repair - Cost Effective Sliding Door Repairs',
  description: 'We have been established and working in the Sydney area for the last thirty years. You will be guaranteed to open and close your door with one-finger once we have completed your sliding door repair.',
}

export default function AboutUs() {
  return (
<>


  {/* page wrapper */}
  <div className="boxed_wrapper">

    {/* preloader */}
<Header/>

    {/* End Mobile Menu */}
    {/* Page Title */}
    <section
      className="page-title centred"
      style={{
        backgroundImage: "url(assets/images/about-image.png)"
      }}
    >
      <div className="auto-container">
        <div className="content-box">
          <div className="title">
            <h1>About Us</h1>
          </div>
          <ul className="bread-crumb clearfix">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </section>
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
