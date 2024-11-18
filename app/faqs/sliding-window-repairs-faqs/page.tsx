// import Image from "next/image";
// import styles from "./page.module.css";
import Header from "@/components/Hesader";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SideBar from "@/components/SideBar";
import Quote from "@/components/Quote";
import Link from "next/link";

export default function Home() {
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
    <section
      className="page-title centred"
      style={{
        backgroundImage: "url(/assets/images/about-image.png)"
      }}
    >
      <div className="auto-container">
        <div className="content-box">
          <div className="title">
            <h1>Sliding Window Repairs FAQs</h1>
          </div>
          <ul className="bread-crumb clearfix">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Sliding Window Repairs FAQs</li>
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
                  <img src="/assets/images/door7.jpg" alt="" />
                </figure>
                <div className="text">
                  <h2>We Can Help You Get Your Sliding Door Fixed Fast</h2>
                  <h3>
                  We are the foremost specialists in sliding door repairs and allsliding door technology systems in the Sydney area
                  </h3>
                  <p>
                  Did you know that there is no need to undergo an expensive replacement of your jammed or hard-to-open door? sydneyslidingdoorsrepair.com.au can save you thousands of dollars by carrying out a repair on your problem door, today.
                  </p>
                </div>
              </div>
              <div className="two-column">
                <figure className="image-box">
                  <img src="/assets/images/door8.jpg" alt=""
                  className="mh-300" />
                </figure>
                <div className="inner-box sd">

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

                </div>
              </div>
              <div className="content-two">
                <div className="text">
                  <h3>Our Specialties:</h3>

                  <ul>
                  <li>Replacement doors</li>
<li>Sliding door repairs</li>
<li>Door closer repair and installation</li>
<li>Fire doors and frames</li>

                  </ul>
                  <p className="mt-22">
                  Our innovative and technologically superior door repair systems, together with 30 years of experience is the answer to all your door repairs.
                  </p>
                  <p>
                  You cannot afford to take chances with the safety of your loved ones, especially when the primary entrances to your home are vulnerable because of faults and repair needs.
                  </p>
                  <p>
                  If you’ve ever known someone who’s experienced a burglary – you’ll appreciate the trauma and fear associated with the fact that an intruder has violated the sanctity of your privacy and potentially, threatened your security and safety.
                  </p>
                  <p>
                  sydneyslidingdoorsrepair.com.au have been attending to all forms of door repairs for the last thirty years. Our technology is designed to address every issue associated with door repairs.
                  </p>
                  <p>
                  Our friendly and experienced tradesmen specialise in door repairs and replacements. However, wherever possible, we will save you thousands of dollars by restoring your door rather than replacing it.
                  </p>
                  <p>
                  We have thirty years of comprehensive experience in commercial, industrial and domestic door repairs. Listed below is our full range of door repair services.
                  </p>

                  <ul>
                  <li>Sliding door repairs – both wooden and aluminium</li>
<li>Door closers</li>
<li>Door closer installation and replacement</li>
<li>Fire doors</li>
<li>Wooden entrance doors</li>
<li>Sliding window repairs</li>

                  </ul>
                </div>
              </div>

              <div className="content-two">
                <div className="text">
                  <h3 className="jamhead">Is your door jamming, or sticking? Is it unable to slide properly?</h3>

                  
                  <p className="mt-22">
                  No matter what the problem with your door, sydneyslidingdoorsrepair.com.au can assist you and carry out the full range of door repair services in the Sydney area.
                  </p>
                  <p>
                  Why not call 0401 349 821 and talk to one of our friendly staff who will assist you with all your enquiries today. Our servicemen cover the whole of the Sydney metropolitan area so don’t hesitate to contact us today.
                  </p>
                  <p>
                  sydneyslidingdoorsrepair.com.au has been operating in the Sydney metropolitan area since 1980. Over the years, we have accumulated a wealth of knowledge and experience in all door repairs and replacement. We deal with homes, shops, offices, factories and all commercial premises. Our advice on door repairs is second to none.
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
