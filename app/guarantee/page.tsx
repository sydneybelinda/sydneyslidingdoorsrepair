// import Image from "next/image";
// import styles from "./page.module.css";
import Header from "@/components/Hesader";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Quote from "@/components/Quote";
import SideBar from "@/components/SideBar";
import Link from "next/link";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sliding door Guarantee | Sydney Sliding Doors Repair - Cost Effective Sliding Door Repairs',
  description: 'We&#039;ve got your covered with our unique 8 point Guarantee. Find out how we can offer you the best possible sliding door repair and back it up with our Guarantee.',
}


export default function Guarantee(){
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

<p>Many of our customers have been misled about the simplicity of replacing sliding door rollers by tradesmen and handymen who are not experienced in this area. What can look like a simple problem is not necessarily an easy fix, without the appropriate tools, parts and expertise.</p>

<h3>
Sliding doors deteriorate over time due to wear and tear
</h3>

<p>It is not generally recognised in the industry, that doors and windows can deteriorate over the years because of many factors: how they are treated, how they are originally designed, where they are positioned, how they were first installed.
</p>
<p>
sydneyslidingdoorsrepair.com.au was originally operating simply as installers of sliding doors and windows. However, because of the massive volume of enquiries about sliding doors and windows that were not operating satisfactorily even though many were not particularly old, we began to specialise in these types of repairs.
</p>
<p>
Over the years, we have accumulated a vast store of knowledge and expertise in this area. We have devised innovative and ingenious techniques to repair sliding doors and windows, as the result of years of experience for a multitude of designs and styles in the Sydney area.
</p>
<p>
During the course of our work, we have encountered many situations where the door or window repair has resulted in more damage, rather than a quick fix.
</p>
<p>
Obviously, timber and aluminium can rot due to exposure to the weather and this can prevent an effective repair unless the tradesman knows exactly what he is doing. We secure the door by applying a belt around the frame of the door so that the sides do not detach from the glass – averting a potential catastrophe of broken glass.
</p>
<p>
In our experience, we have found that the fasteners that attach the sides of the aluminium door to the top and bottom plates may be compromised by previous tradesmen who have inadvertently damaged them. We are fully cognisant of this problem and are equipped to avert any associated problems.</p>

<p><strong>Our technicians at sydneyslidingdoorsrepair.com.au are aware that:</strong></p>

<ul>
<li>Our customers do not want a temporary solution – they want one which should reasonably last for up to ten years depending on daily treatment of the door</li>
<li>Many of our customers realise that the tracks on their sliding door are faulty</li>
<li>We can replace faulty sliding door tracks on the spot</li>
<li>Our customers want their doors to glide silently and smoothly – adding years to the life of the door and the rollers and tracks</li>
</ul>

<p>These are some the many benefits sydneyslidingdoorsrepair.com.au can guarantee our customers!

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
