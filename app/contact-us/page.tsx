
import Header from "@/components/Hesader";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Quote from "@/components/Quote";
import SideBar from "@/components/SideBar";
import Link from "next/link";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Call 0401 349 821 | Sydney Sliding Doors Repair - Cost Effective Sliding Door Repairs',
  description: 'We look forward to hearing from you and discuss how we can help find a cost-effective solution to your sliding door issues. Don&#039;t hesitate to give us a call and let the professionals answer your questions.',
}


import { Accordion } from "react-bootstrap";

export default function Contact(){
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
            <h1>Contact </h1>
          </div>
          <ul className="bread-crumb clearfix">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Contact</li>
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
              
                  <div className="entry-content">
  <h2>Sydney Sliding Door Repairs</h2>
  <p>
    <strong>Phone:</strong> 0401 349 821
    <br />
    http://sydneyslidingdoorsrepair.com.au
  </p>
  <p>
    <strong>Email:</strong> sales@sydneyslidingdoorsrepair.com.au
  </p>
  <p>
    <span style={{ textDecoration: "underline" }}>
      <strong>NOTE:</strong>
    </span>{" "}
    We are professional tradespeople. This means we don’t sit behind the
    computer. What we are saying is the FASTEST and BEST way to get in touch
    with our team is via the mobile number. We live on this and answer calls
    quickly. If not, leave a message and we’ll get back. Talking to you helps us
    understand your exact issue and provide the best solution.
  </p>
  <p>
    We look forward to hearing from you. Don’t hesitate to give us a call and
    let the professionals answer your questions.
  </p>
  <p>
    We cover the whole of the Sydney Metropolitan area. Our carefully researched
    technological advances and innovative methods have made us the leading door
    repair technicians in the Sydney area.
  </p>
  <p>
    If you complete the form and click on the “submit” button, you can send us a
    request for a reply. One of our technicians will contact you promptly.
    However, for an immediate answer to your door repair queries, please phone
    us on <strong>0401 349 821</strong> and we can attend to your enquiries
    straight away.
  </p>
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
