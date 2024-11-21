
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
  title: 'Sliding Window Repairs FAQs  | Sydney Sliding Doors Repair - Cost Effective Sliding Door Repairs',
  description: 'Our team is experienced in repairing all sliding windows that are difficult to open or stuck. Give us a call today in Sydney on 0401 349 821',
}

import RepairsAccordion from "@/components/FAQRepairs";


export default function FAQGenral(){
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
                  <h2>Answers To All Your Sliding Window Repair Questions in Sydney</h2>
              
                  <div className="markdown prose w-full break-words dark:prose-invert light innex-box sd">
                  <p>Is your sliding window jamming or scraping? Is it hard to open? Does it grate and grind during opening? Our team of professional technicians can have your sliding window operating successfully in the shortest possible time. This is because we are equipped with all the correct tools and procedures for every sliding window repair. We&apos;ve been repairing sliding windows and doors since 1980 are are up-to-date on all the latest technology for the ever-changing types of sliding windows.
</p><p>
Take a look at our bank of questions and answers accumulated over many years of repairing sliding windows in the Sydney Metropolitan area.</p>
<p>
However, should you have any further queries or believe that your situation is unique – call one of our experience technicians on <strong>0401 349 821</strong>.</p>

<RepairsAccordion />

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
