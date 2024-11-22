
import Header from "@/components/Hesader";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
// import Slider from "@/components/Slider";
import type { Metadata } from 'next'
// import { Carousel } from "@/components/Carousel";
import { EmblaOptionsType } from 'embla-carousel'
// import EmblaCarousel from "@/components/EmblaCarousel";
import { Carousel } from "@/components/Carousel";



export const metadata: Metadata = {
  title: 'Affordable Sliding Door Repairs',
  description: 'The Sydney Sliding Doors Repairs team can service the whole Sydney metro area so give us a call today on 0401 349 821 for all your sliding door repairs.',
}

const OPTIONS: EmblaOptionsType = { axis: 'y', loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Test() {
  return (
<>


  <div className="boxed_wrapper">


    <Header/>

    {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
    <Carousel />


    <section className="service-section bg-color-1">
      <div
        className="pattern-layer"
        style={{ backgroundImage: "url(/assets/images/shape/shape-1.png)" }}
      />
      <div className="auto-container">
        <div className="title-inner clearfix">
          <div className="sec-title light text-right">
            <span>Sydney Sliding Door Repaits</span>
            <h2>Fast &amp; Professional Service Guaranteed</h2>
          </div>
          <div className="text">
            <p>
             Call Us today and our experienced professionals can 
             make your sliding door new again
            </p>
          </div>
        </div>
        <div className="three-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
          <div className="service-block-one">
            <div className="inner-box">
              <figure className="image-box">
                <a href="/seervices-2">
                  <img src="assets/images/door1.jpg" alt="" 
                   className="serv-im-height"/>
                </a>
              </figure>
              <div className="lower-content">
                <div className="icon-box">
                  <div className="icon">
                    <i className="icon-icon6" />
                  </div>
                </div>
                <div className="text">
                  <h3>
                    <a href="/services-2">Sliding Door Repairs</a>
                  </h3>
                  <p>
                  Are you frustrated with your sliding door that is stuck and no longer slides easily? The good news is you dont need to get a new sliding door but instead you can let our experienced Sydney team look after your sliding door repairs and save considerably amounts of money at the same time. Dedicated Professionals With Over 25 Years Experience In Fixing Doors
                  </p>
                </div>
                <div className="link">
                  <a href="/services-2">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="service-block-one">
            <div className="inner-box">
              <figure className="image-box">
                <a href="service-details-3.html">
                  <img src="assets/images/door2.jpg" alt="" 
                   className="serv-im-height"/>
                </a>
              </figure>
              <div className="lower-content">
                <div className="icon-box">
                  <div className="icon">
                    <i className="icon-icon6" />
                  </div>
                </div>
                <div className="text">
                  <h3>
                    <a href="/guarantee">Guarantee</a>
                  </h3>
                  <p>
                  Our technicians at are aware that: Our customers do not want a temporary solution – they want one which should reasonably last for up to ten years depending on daily treatment of the door. We can replace faulty sliding door tracks on the spot. These are some the many benefits that we can guarantee our customers!
                  </p>
                </div>
                <div className="link">
                  <a href="/guarantee">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="service-block-one">
            <div className="inner-box">
              <figure className="image-box">
                <a href="service-details-3.html">
                  <img src="/assets/images/door3.jpg" alt="" 
                  className="serv-im-height"/>
                </a>
              </figure>
              <div className="lower-content">
                <div className="icon-box">
                  <div className="icon">
                    <i className="icon-icon6" />
                  </div>
                </div>
                <div className="text">
                  <h3>
                    <a href="/services-2">Services</a>
                  </h3>
                  <p>
                  Discover How We Can Best Help You Get Your Sliding Door Fixed Fast. Did you know that there is no need to undergo an expensive replacement of your jammed or hard-to-open door? sydneyslidingdoorsrepair.com.au can save you thousands of dollars by carrying out a repair on your problem door, today.
                  </p>
                </div>
                <div className="link">
                  <a href="service-details-3.html">Read More</a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="cta-text centred">
          <p>
            Want your sliding door repaired properly? We&apos;re Ready To Start!
          </p>
          <h3>
            Call Us Today <i className="icon-mob" />{" "}
            <a href="tel:0401349821">0401 349 821</a> or{" "}
            <a href="/quote">
              <span>Request a FREE Quote</span>
            </a>
          </h3>
        </div>
      </div>
    </section>
    {/* banner-section end */}


    <section className="chooseus-section">
      <figure className="icon-layer">
        <img src="/assets/images/icons/icon-10.png" alt="" />
      </figure>
      <div className="auto-container">
        <div className="sec-title">
          <span>Sydney Sliding Door Repairs</span>
          <h2>
            Why People Trust And <br />
            Choose Us
          </h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-4 col-md-12 col-sm-12 content-column">
            <div className="content_block_2">
              <div className="content-box">
                <div
                  className="inner-box"
                  style={{
                    backgroundImage:
                      "url(/assets/images/resource/chooseus-1.jpg)"
                  }}
                >
                  <div className="text">
                    <h2>25</h2>
                    <h5>
                      years of <br />
                      Smart Working experience
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12 inner-column">
            <div className="inner-content">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                  <div
                    className="chooseus-block-one wow fadeInDown animated animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="icon-box">
                        <img src="/assets/images/icons/icon-1.png" alt="" />
                        <div className="icon-shape" />
                      </figure>
                      <h3>Our Staff</h3>
                      <p>
                      Fast, Friendly and experiencesd technicians
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                  <div
                    className="chooseus-block-one wow fadeInDown animated animated"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="icon-box">
                        <img src="/assets/images/icons/icon-2.png" alt="" />
                        <div className="icon-shape" />
                      </figure>
                      <h3>Our Honesty</h3>
                      <p>
                      We do what we say we will
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                  <div
                    className="chooseus-block-one wow fadeInDown animated animated"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="icon-box">
                        <img src="assets/images/icons/icon-3.png" alt="" />
                        <div className="icon-shape" />
                      </figure>
                      <h3>FUlly Equipped</h3>
                      <p>
                      Our van is fully equipped for any job
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                  <div
                    className="chooseus-block-one wow fadeInUp animated animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="icon-box">
                        <img src="/assets/images/icons/icon-4.png" alt="" />
                        <div className="icon-shape" />
                      </figure>
                      <h3>TImekeeping</h3>
                      <p>
                      We will start and Finish jobs on time, everytikme
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                  <div
                    className="chooseus-block-one wow fadeInUp animated animated"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="icon-box">
                        <img src="/assets/images/icons/icon-5.png" alt="" />
                        <div className="icon-shape" />
                      </figure>
                      <h3>Covering All Areas</h3>
                      <p>
                        We cover every suburb in the Sydney Metro Area
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                  <div
                    className="chooseus-block-one wow fadeInUp animated animated"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="icon-box">
                        <img src="/assets/images/icons/icon-6.png" alt="" />
                        <div className="icon-shape" />
                      </figure>
                      <h3>100% Guranteed</h3>
                      <p>
                      We personally guarantee that the cusomer will be completely satisified
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="about-section bg-color-2">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image_block_1">
              <div className="image-box">
                <figure className="image image-1">
                  <img src="/assets/images/door4.jpg" alt="" />
                </figure>
                <figure className="image image-2">
                  <img src="/assets/images/door5.jpg" alt="" />
                </figure>

              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 content-column pt-40">
            <div className="content_block_1">
              <div className="content-box">
                <div className="sec-title">
                  <span>Sydney Sliding Door Repaits</span>
                  <h2>A fast and professional Sliding Door Repair Company</h2>
                </div>
                <div className="text">
                  <div
                    className="quote"
                    style={{
                      backgroundImage: "url(/assets/images/icons/quote-1.png)"
                    }}
                  />
                  <h3>
                    We fix the sliding doors of many residential and commercial
                    customers each year.
                  </h3>
                  <p>
                  We are the foremost specialists in door repairs and all door technology systems in the Sydney area
                  </p>
                </div>
                <div className="author-box clearfix">
                  {/* <figure className="signature">
                    <img src="assets/images/icons/signature-1.png" alt="" />
                  </figure> */}
                  <h3>Alex Bransgrove</h3>
                  <span className="designation">Company Owner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="testimonial-section">
      <div className="large-container">
        <div className="row clearfix">
          <div className="col-lg-4 col-md-12 col-sm-12 title-column">
            <div className="title-inner">
              <div className="sec-title">
                <span>Sydney Sliding Door Repairs</span>
                <h2>Fully Satisfied And Happy Customers</h2>
              </div>
              <div className="text">
                <p>
                  You dont need to take our word for it - Read the testimonials form  our customers.
                </p>
                <a href="/trestimonials">View All Customer Reviews</a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12 testimonial-column">
            <div className="testimonial-inner">
              <div className="two-column-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="text">
                      <figure className="icon-1">
                        <img src="/assets/images/icons/icon-7.png" alt="" />
                      </figure>
                      <figure className="icon-2">
                        <img src="/assets/images/icons/icon-8.png" alt="" />
                      </figure>
                      <p>
                      “I&apos;ve had problems with a sliding door ever since my wife and I moved into our home three years ago. But it grew worse until I had great difficulty opening the door itself. In desperation, I phoned Adsafe Doors and to my pleasant surprise they came out the very next day!...


                      </p>
                    </div>
                    <div className="author-box">
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
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="text">
                      <figure className="icon-1">
                        <img src="/assets/images/icons/icon-7.png" alt="" />
                      </figure>
                      <figure className="icon-2">
                        <img src="/assets/images/icons/icon-8.png" alt="" />
                      </figure>
                      <p>
                      I have a fairly new house in Parramatta. It&apos;only around 8 years old. Unfortunately, for some reason the sliding door onto the patio has been causing a lot of trouble for some time now. I&apos;ve put off calling in a repairman because I believed that he would tell me...
                      </p>
                    </div>
                    <div className="author-box">
                      <figure className="image-box">
                        <img
                          src="/assets/images/resource/testimonial-2.png"
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
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="contact-info-section">
      <div className="contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d37481.30756597857!2d151.20039577830434!3d-33.866188512692524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1731795707403!5m2!1sen!2sau"  />
        
      </div>
      <div className="auto-container">
        <div className="info-inner">
          <div className="row clearfix">
            <div className="col-lg-7 col-md-12 col-sm-12 content-column">
              <div className="content_block_3">
                <div className="content-box">
                  <figure className="icon-layer">
                    <img src="/assets/images/icons/icon-9.png" alt="" />
                  </figure>
                  <div className="sec-title">
                    <span>Sydney Sliding Door Repairs</span>
                    <h2>Areas We Cover</h2>
                  </div>
                  <div className="text">
                    <p>
                     We cover all suburbs in the Sydney Metropolitan Area
                    </p>
                    <ul className="location-list clearfix">
                      <li><a href="/locations/woolahra">Woolahra</a></li>
                      <li><a href="/locations/leichardt">Leichardt</a></li>
                      <li><a href="/locations/bondi">Bondi</a></li>
                      <li><a href="/locations/randwick">Randwick</a></li>
                      <li><a href="/locations/newtown">Newtown</a></li>
                      <li><a href="/locations/strathfield">Strathfield</a></li>
                      <li><a href="/locations/parramatta">Parramatta</a></li>
                      <li><a href="/locations/sutherland">Sutherland</a></li>
                      <li><a href="/locations/glebe">Glebe</a></li>
                      <li><a href="/locations/st-george">St George</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 content-column">
              <div className="content_block_4">
                <div
                  className="content-box"
                  style={{
                    backgroundImage: "url(/assets/images/door6.jpg)"
                  }}
                >
                  <div className="text">
                    <p>Installation &amp; Repair Starts From $70</p>
                    <div className="support-box">
                      <div className="icon-box">
                        <i className="icon-mob" />
                      </div>
                      <span>Book an Appointment Today!</span>
                      <h3>
                        <a href="tel:0401349821">0401 349 821</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="cta-section">
      <div
        className="pattern-layer"
        style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}
      />
      <div className="auto-container">
        <div className="inner-box clearfix">
          <div className="text pull-left">
            <h2>
              Urgent 24/7 Sliding Door Repairs
        
            </h2>
          </div>
          <div className="btn-box pull-right clearfix">
            <a href="tel:12017193488" className="call">
              <i className="icon-mob" />
              0401 349 821
            </a>
            <a href="/quote" className="theme-btn-one">
              <span className="btn-shape" />
              Free quote
            </a>
          </div>
        </div>
      </div>
    </section>

<Footer />
<ScrollToTop/>
  </div>

</>


  );
}
