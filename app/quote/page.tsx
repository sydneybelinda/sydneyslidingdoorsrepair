// import Image from "next/image";
// import styles from "./page.module.css";
import Header from "@/components/Hesader";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Quote from "@/components/Quote";

import Link from "next/link";


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
