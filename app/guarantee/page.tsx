// import Image from "next/image";
// import styles from "./page.module.css";
import Header from "@/components/Hesader";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Quote from "@/components/Quote";
import SideBar from "@/components/SideBar";
import Link from "next/link";

export default function Woolahra(){
  return (
<>

  {/* page wrapper */}
  <div className="boxed_wrapper">

    {/* preloader */}
    {/* main header */}
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
            <h1>Guarantee</h1>
          </div>
          <ul className="bread-crumb clearfix">
            <li>
              <Link href="/">Guarantee</Link>
            </li>
            <li>Guarantee</li>
          </ul>
        </div>
      </div>
    </section>
    {/* End Page Title */} 
    {/* service-details */}
    <div className="auto-container">
    <div className="row clearfix">
  <div className="col-lg-8 col-md-12 col-sm-12 content-side">
  <section className="service-details">
      <div className="auto-container">
            <div className="service-details-content">
              <div className="content-one">
                <figure className="image-box">
                  <img src="/assets/images/door7.jpg" alt="" />
                </figure>
                <div className="text">
                  <h2> Sydney Sliding Doors Repair – Guarantee & Benefits</h2>
                  <h3>Eight Great Benefits We Guarantee Our Clients</h3>
                  <div className="markdown prose w-full break-words dark:prose-invert light innex-box sd">
  <h4>
   1. Answer your enquiries, courteously and comprehensively
  </h4>

<h4>
2. Free quotes
</h4>
<h4>
3. Schedule a prompt appointment
</h4>
<h4>
4. Attend your property at the agreed time
</h4>
<h4>
  5. Carry all the appropriate tools to undertake your job effectively and efficiently
</h4>
<h4>
  6. Furnish on the spot
</h4>
<p>all the required parts to carry out a repair on your sliding door – including 220 different rollers and carriages as well as 10 assorted replacement sliding door tracks</p>
<h4>
 7.  Qualitied Techniticads
</h4>
<p>Send qualified technicians with the appropriate licences and expertise to repair your sliding door to full working order. You will be able to open and close your sliding door with one finger.</p>
<h4>
  8. Warranty
</h4>
<p>You will get a warranty on all completed work.</p>

<p>sydneyslidingdoorsrepair.com.au has been carrying out repairs to timber and <a href="http://sydneyslidingdoorsrepair.com.au/aluminium-sliding-door-repairs/%20‎">aluminium doors</a> and <a href="http://sydneyslidingdoorsrepair.com.au/faqs/sliding-window-repairs-faqs/">windows</a> in the Sydney area since 1980.&nbsp; We are well equipped to answer any enquiry about <a href="http://sydneyslidingdoorsrepair.com.au/faqs/faqs-general/">faulty sliding doors</a> and windows either wooden or aluminium.</p>

</div>

                </div>
              </div>

        </div>
      </div>
    </section>
    

    </div>
    <div className="col-lg-4 col-md-12 col-sm-12 SideBar-side">
      <SideBar/>
          </div>
          </div>
</div>

  <Quote />


  <Footer />
<ScrollToTop/>
  </div>
  {/* jequery plugins */}
  {/* main-js */}
  {/* End of .page_wrapper */}
</>


  );
}
