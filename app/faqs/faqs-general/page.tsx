
import Header from "@/components/Hesader";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Quote from "@/components/Quote";
import SideBar from "@/components/SideBar";
import Link from "next/link";
import type { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'FAQs General | Sliding Doors | Sydney Sliding Doors Repair - Cost Effective Sliding Door Repairs',
  description: 'Find out if you need a new door or save hundreds of dollars by getting it repaired. See our FAQs to find out how we can best help you save money today.',
}

import GeneralAccordion from "@/components/FAQGeneral";

export default function FAQGenral() {
  return (
    <>

      <div className="boxed_wrapper">
        <Header />
        <section
          className="page-title centred"
          style={{
            backgroundImage: "url(/assets/images/about-image.png)"
          }}
        >
          <div className="auto-container">
            <div className="content-box">
              <div className="title">
                <h1>Frequently Asked Questions - General</h1>
              </div>
              <ul className="bread-crumb clearfix">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>Guarantee</li>
              </ul>
            </div>
          </div>
        </section>

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
                        <h2>Answers To All Your General Questions on Sliding Door Repairs in Sydney</h2>

                        <div className="markdown prose w-full break-words dark:prose-invert light innex-box sd">
                          <p>Here are our comprehensive answers to your questions on all door repairs in and around the Sydney area. Should you have any further enquiries, please call one of our Sydney technicians on <strong>0401 349 821.</strong></p>

                          <GeneralAccordion />

                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </section>


            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 SideBar-side">
              <SideBar />
            </div>
          </div>
        </div>

        <Quote />


        <Footer />
        <ScrollToTop />
      </div>

    </>


  );
}
