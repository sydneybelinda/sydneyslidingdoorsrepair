// import Image from "next/image";
// import styles from "./page.module.css";
import Header from "@/components/Hesader";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Quote from "@/components/Quote";

import Link from "next/link";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sliding door Quote | Sydney Sliding Doors Repair - Cost Effective Sliding Door Repairs',
  description: 'Need a quote? ve got your covered with our online Quoting form.  Complete the form and we will cend you a customised quote',
}


export default function QuotePage(){
  return (
<>


  <div className="boxed_wrapper">

    <Header/>

    <section
      className="page-title centred"
      style={{
        backgroundImage: "url(/assets/images/about-image.png)"
      }}
    >
      <div className="auto-container">
        <div className="content-box">
          <div className="title">
            <h1>Quote</h1>
          </div>
          <ul className="bread-crumb clearfix">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Quote</li>
          </ul>
        </div>
      </div>
    </section>

    <Quote />

  


  <Footer />
<ScrollToTop/>
  </div>

</>


  );
}
