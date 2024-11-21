// import Image from "next/image";
// import styles from "./page.module.css";
import Header from "@/components/Hesader";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Quote from "@/components/Quote";
import SideBar from "@/components/SideBar";
import Link from "next/link";

export default function Testimonials(){
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
            <h1>Testimonials</h1>
          </div>
          <ul className="bread-crumb clearfix">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Testimonials</li>
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

            <div className="service-details-content">
              <div className="content-one">
                <div className="text">
                  <h2>Read rour client reviews</h2>
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

              <div className="testimonial-inner">
              {/* <div className="two-column-carousel owl-carousel owl-theme owl-dots-none owl-nav-none"> */}
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="text">
                      <figure className="icon-1">
                        <img src="assets/images/icons/icon-7.png" alt="" />
                      </figure>
                      <figure className="icon-2">
                        <img src="assets/images/icons/icon-8.png" alt="" />
                      </figure>
                      <p className="mb-20">
                      I&aposve had problems with a sliding door ever since my wife and I moved into our home three years ago. But it grew worse until I had great difficulty opening the door itself. In desperation, I phoned Adsafe Doors and to my pleasant surprise they came out the very next day!</p>
                      <p className="mb-20">
They diligently and thoroughly disassembled the door and replaced all the broken and worn parts. An hour or so later the door was working perfectly. Yes, it was expensive, but it was worth it. Adsafe Door&aposs has given me a sliding door that will work beautifully for years and because I don&apost have to replace it with a new door, they saved me thousands of dollars in the process. Congratulations.

                      </p>

                      <div className="author-box mt-50">
                      <figure className="image-box">
                        <img
                          src="/assets/images/resource/testimonial-1.png"
                          alt=""
                        />
                      </figure>
                      <h4>Stuart Pearson</h4>
                      <span className="designation">Sydney</span>
                      <ul className="rating clearfix">
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                    </div>
                    </div>

                  </div>
                </div>


                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="text">
                      <figure className="icon-1">
                        <img src="assets/images/icons/icon-7.png" alt="" />
                      </figure>
                      <figure className="icon-2">
                        <img src="assets/images/icons/icon-8.png" alt="" />
                      </figure>
                      <p className="mb-20">
                      My house is around 15 years old and the sliding door at the side of the house was not operating as it should. It is quite a heavy door and it was coming off the tracks when we tried to open and close it. We actually got to the stage that because of this problem, and having to lift the door back onto the track all the time, we avoided using it at all. This was a problem in summer when we need more ventilation.</p>
                      <p className="mb-20">
                      The fact is, we didn%apos;t think we could afford a new door – especially one of the same quality as the existing door.

                      </p>

                      <p className="mb-20">
                      However, I called sydneyslidingdoorsrepair.com.au and got some very valuable advice over the phone. They were happy to give me a free quote. When the technician arrived, I peeped into his van and realised that he had a huge range of different rollers and tracks etc.

                        </p>

                        <p className="mb-20">
                        He made me feel very confident that he could fix the door for what I thought was a reasonable price under the circumstances. He dismantled the door and replaced the worn-out parts. In a few hours, the door was working again as it had when I first bought the house.
                          </p>

                          <p className="mb-20">
                          I was very impressed and my door is working perfectly.
                            </p>

                      <div className="author-box mt-50">
                      <figure className="image-box">
                        <img
                          src="assets/images/resource/testimonial-1.png"
                          alt=""
                        />
                      </figure>
                      <h4>Alexis Brandon</h4>
                      <span className="designation">Waterloo</span>
                      <ul className="rating clearfix">
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                    </div>
                    </div>

                  </div>
                </div>
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="text">
                      <figure className="icon-1">
                        <img src="assets/images/icons/icon-7.png" alt="" />
                      </figure>
                      <figure className="icon-2">
                        <img src="assets/images/icons/icon-8.png" alt="" />
                      </figure>
                      <p className="mb-20">
                      5 stars &quot;I&aposve had problems with a sliding door ever since my wife and I moved into our home three years ago. But it grew worse until I had great difficulty opening the door itself. In desperation, I phoned Adsafe Doors and to my pleasant surprise they came out the very next day!</p>
                      <p className="mb-20">
They diligently and thoroughly disassembled the door and replaced all the broken and worn parts. An hour or so later the door was working perfectly. Yes, it was expensive, but it was worth it. Adsafe Door&aposs has given me a sliding door that will work beautifully for years and because I don&apost have to replace it with a new door, they saved me thousands of dollars in the process. Congratulations.

                      </p>

                      <div className="author-box mt-50">
                      <figure className="image-box">
                        <img
                          src="assets/images/resource/testimonial-1.png"
                          alt=""
                        />
                      </figure>
                      <h4>Stuart Pearson</h4>
                      <span className="designation">Sydney</span>
                      <ul className="rating clearfix">
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                    </div>
                    </div>

                  </div>
                </div>
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="text">
                      <figure className="icon-1">
                        <img src="assets/images/icons/icon-7.png" alt="" />
                      </figure>
                      <figure className="icon-2">
                        <img src="assets/images/icons/icon-8.png" alt="" />
                      </figure>
                      <p className="mb-20">
                      5 stars &quot;I&aposve had problems with a sliding door ever since my wife and I moved into our home three years ago. But it grew worse until I had great difficulty opening the door itself. In desperation, I phoned Adsafe Doors and to my pleasant surprise they came out the very next day!</p>
                      <p className="mb-20">
They diligently and thoroughly disassembled the door and replaced all the broken and worn parts. An hour or so later the door was working perfectly. Yes, it was expensive, but it was worth it. Adsafe Door&aposs has given me a sliding door that will work beautifully for years and because I don&apost have to replace it with a new door, they saved me thousands of dollars in the process. Congratulations.

                      </p>

                      <div className="author-box mt-50">
                      <figure className="image-box">
                        <img
                          src="assets/images/resource/testimonial-1.png"
                          alt=""
                        />
                      </figure>
                      <h4>Stuart Pearson</h4>
                      <span className="designation">Sydney</span>
                      <ul className="rating clearfix">
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                    </div>
                    </div>

                  </div>
                </div>
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="text">
                      <figure className="icon-1">
                        <img src="assets/images/icons/icon-7.png" alt="" />
                      </figure>
                      <figure className="icon-2">
                        <img src="assets/images/icons/icon-8.png" alt="" />
                      </figure>
                      <p className="mb-20">
                      5 stars &quot;I&aposve had problems with a sliding door ever since my wife and I moved into our home three years ago. But it grew worse until I had great difficulty opening the door itself. In desperation, I phoned Adsafe Doors and to my pleasant surprise they came out the very next day!</p>
                      <p className="mb-20">
They diligently and thoroughly disassembled the door and replaced all the broken and worn parts. An hour or so later the door was working perfectly. Yes, it was expensive, but it was worth it. Adsafe Door&aposs has given me a sliding door that will work beautifully for years and because I don&apost have to replace it with a new door, they saved me thousands of dollars in the process. Congratulations.

                      </p>

                      <div className="author-box mt-50">
                      <figure className="image-box">
                        <img
                          src="assets/images/resource/testimonial-1.png"
                          alt=""
                        />
                      </figure>
                      <h4>Stuart Pearson</h4>
                      <span className="designation">Sydney</span>
                      <ul className="rating clearfix">
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                    </div>
                    </div>

                  </div>
                </div>
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="text">
                      <figure className="icon-1">
                        <img src="assets/images/icons/icon-7.png" alt="" />
                      </figure>
                      <figure className="icon-2">
                        <img src="assets/images/icons/icon-8.png" alt="" />
                      </figure>
                      <p className="mb-20">
                      5 stars &quot;I&aposve had problems with a sliding door ever since my wife and I moved into our home three years ago. But it grew worse until I had great difficulty opening the door itself. In desperation, I phoned Adsafe Doors and to my pleasant surprise they came out the very next day!</p>
                      <p className="mb-20">
They diligently and thoroughly disassembled the door and replaced all the broken and worn parts. An hour or so later the door was working perfectly. Yes, it was expensive, but it was worth it. Adsafe Door&aposs has given me a sliding door that will work beautifully for years and because I don&apost have to replace it with a new door, they saved me thousands of dollars in the process. Congratulations.

                      </p>

                      <div className="author-box mt-50">
                      <figure className="image-box">
                        <img
                          src="assets/images/resource/testimonial-1.png"
                          alt=""
                        />
                      </figure>
                      <h4>Stuart Pearson</h4>
                      <span className="designation">Sydney</span>
                      <ul className="rating clearfix">
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                    </div>
                    </div>

                  </div>
                </div>
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="text">
                      <figure className="icon-1">
                        <img src="assets/images/icons/icon-7.png" alt="" />
                      </figure>
                      <figure className="icon-2">
                        <img src="assets/images/icons/icon-8.png" alt="" />
                      </figure>
                      <p className="mb-20">
                      5 stars &quot;I&aposve had problems with a sliding door ever since my wife and I moved into our home three years ago. But it grew worse until I had great difficulty opening the door itself. In desperation, I phoned Adsafe Doors and to my pleasant surprise they came out the very next day!</p>
                      <p className="mb-20">
They diligently and thoroughly disassembled the door and replaced all the broken and worn parts. An hour or so later the door was working perfectly. Yes, it was expensive, but it was worth it. Adsafe Door&aposs has given me a sliding door that will work beautifully for years and because I don&apost have to replace it with a new door, they saved me thousands of dollars in the process. Congratulations.

                      </p>

                      <div className="author-box mt-50">
                      <figure className="image-box">
                        <img
                          src="assets/images/resource/testimonial-1.png"
                          alt=""
                        />
                      </figure>
                      <h4>Stuart Pearson</h4>
                      <span className="designation">Sydney</span>
                      <ul className="rating clearfix">
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                    </div>
                    </div>

                  </div>
                </div>






              {/* </div> */}
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
