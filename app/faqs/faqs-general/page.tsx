"use client"
// import Image from "next/image";
// import styles from "./page.module.css";
import Header from "@/components/Hesader";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Quote from "@/components/Quote";
import SideBar from "@/components/SideBar";
import Link from "next/link";
//import Acc from "@/components/Accordian";

import { Accordion } from "react-bootstrap";

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
                  <h2>Answers To All Your General Questions on Sliding Door Repairs in Sydney</h2>
              
                  <div className="markdown prose w-full break-words dark:prose-invert light innex-box sd">
                  <p>Here are our comprehensive answers to your questions on all door repairs in and around the Sydney area. Should you have any further enquiries, please call one of our Sydney technicians on <strong>0401 349 821.</strong></p>

<div className="faq">
    <Accordion alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>My door is jamming constantly now. I’ve had a tradesman tell me that there is no other option but replacement. Is this true?</Accordion.Header>
        <Accordion.Body>
        You’ve been given faulty advice. Most doors can be repaired to a highly acceptable standard. Only in the extraordinary circumstances where rot or corrosion is irreversible is replacement necessary.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Our front door seems to be unable to align correctly with the lock which seems loose and the door will not open or close securely. Can you help us with this type of repair or do we need a new door?</Accordion.Header>
        <Accordion.Body>
       <p> Certainly, this should be no problem for one of our tradesmen. If it is a wooden door, he will remove the door and then carefully trim the door which has probably expanded. The trim will be carried out on the hinge side, not the lock side. Then he will refit the door.</p>
       <p>
        However, if the door is aluminium he can also remove it and trim the door on the top or bottom or both to fit the door securely.
        </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Are there door repairs that are more common than others?</Accordion.Header>
        <Accordion.Body>
       <p> Yes, the most common types of door repairs carried out by sydneyslidingdoorsrepair.com.au are: glass sliding doors, especially aluminium sliding doors. However, we also specialist in wooden and glass sliding doors – as well as cavity and wardrobe sliding doors.</p>
        <p>sydneyslidingdoorsrepair.com.au can carry out repairs in all domestic and commercial situations.
        </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Does sydneyslidingdoorsrepair.com.au do anything other than door repairs?</Accordion.Header>
        <Accordion.Body>
       <p> Yes, we also carry out repairs to sliding windows, especially aluminium ones. There is usually no need to replace these windows.</p>
      <p> In the case of door closers – most are for home units where the door closer is not working and the door is slamming. In these cases, we replace the door closers and they work perfectly again.
        </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Do I need to take the whole day off for a repair to my door?</Accordion.Header>
        <Accordion.Body>
       <p> Usually, no. sydneyslidingdoorsrepair.com.au can effect a sliding door repair in as little as two hours. In the case of door closer repairs – it can range from half an hour for a home unit to somewhere around 6 hours on a commercial door closer.
        </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Is it possible for me, as a home handyman, to do my own door repair?</Accordion.Header>
        <Accordion.Body>
       <p> I would say, emphatically, no! We often find that the home handyman and even most tradesmen who do not specialise in door repairs, can do much more damage than good and possibly damage the door beyond repair.</p>
       <p>xOur technicians at sydneyslidingdoorsrepair.com.au are specifically trained in all types of  door and window repairs, including hinged doors. We are constantly devising new and more ingenious repair methods because this is our specialist area.
        </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Our aluminium sliding door needs urgent attention. It doesn&apos;t open and close properly and we are alarmed because the lock doesn&apos;t line up properly. Our security is compromised, can you help?</Accordion.Header>
        <Accordion.Body>
       <p> Yes of course, this is one of the most common problems associated with sliding door repairs. One of our technicians will remove the door, carry out the repair and refit the door so that it aligns correctly and your security problem is solved.</p>
      <p> It is only in unusual circumstances that the door must be taken to the factory for repair.
        </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7">
        <Accordion.Header>We have a door in one of our offices which is presenting us with a serious occupational safety issue. The door appears to be coming away from the hinge at the top which is causing it to tear. It is actually falling off the metal frame. We are alarmed that one of our staff could be seriously injured. Can you help us in this emergency situation?</Accordion.Header>
        <Accordion.Body>
       <p>The answer is definitely, yes! And this is a most common type of problem, especially with heavy commercial doors. What happens is that the top hinge becomes loose with prolonged daily use and tears the frame around the hinge leaf. You&apos;re right, this is serious because the door could easily collapse. However, the door could simply hit the frame or the floor during opening or closing.</p>
       <p>In these circumstances sydneyslidingdoorsrepair.com.au can attend to your repair promptly and effectively.
        </p>
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="8">
        <Accordion.Header>We&apos;re having problems with our front door especially when the weather changes. It is constantly jamming or sticking when we open or close it. We&apos;ve tried a tradesman who spend a lot of time trying to rectify the problem – this was very expensive and the problem still persists. Can you help?</Accordion.Header>
        <Accordion.Body>
       <p>Look, any movement in the foundations of a home or other building can cause the walls to move. Naturally, in this situation, the door frame will be similarly affected and will also move. The door tends to get jammed inside the frame and cannot be opened or closed properly.
As you know, the Sydney basin is situated on clay and changes in the weather will cause the clay to expand or contract. During wet weather, the foundations will often be pushed up. During dry weather, the clay naturally shrinks and the foundations then, sink. </p>
<p>
This problem is easily rectified by one of our technicians removing the door, making any necessary adjustments, then rehanging the door and refitting the lock securely so that the door opens and closes as it should.
        </p>
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
  </div>

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
