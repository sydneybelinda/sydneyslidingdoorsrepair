"use client"

declare global {
  interface Window { // ⚠️ notice that "Window" is capitalized here
    $: string;
    jQuery: string;
  }
}

import React from "react";

if (typeof window !== "undefined") {
  /* tslint:disable no-var-requires */ const $ = require('jquery');
  /* tslint:disable no-var-requires */ window.$ = window.jQuery = require("jquery");
 } 
 

import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

 export default function Slider() {
    return    <section className="banner-section">

    <OwlCarousel className="banner-carousel owl-theme owl-carousel owl-nav-none"
        items={1}
        autoplay={true}
    >
    <div className="item slide-item">
          <div
            className="image-layer"
            style={{
              backgroundImage: "url(/assets/images/hero-door.webp"
            }}
          />
          <div className="auto-container">
            <div className="content-box">
              <h5>
                <i className="icon-warehouse" />
                Welcome To  Sydney Sliding Door Repairs
              </h5>
              <h1>Quality Sliding Door Repairs in Sydney</h1>
              <p>
              Our qualiified professionals can fix all types of sliding doors <br/>
                Servicing clients in the Sydney metro area
              </p>
              <div className="btn-box clearfix">
                <div className="call-now">
                  <div className="inner">
                    <i className="icon-mob" />
                    <span>Book an Appointment Today!</span>
                    <h3>
                      <a href="tel:0401349821">0401 349 821</a>
                    </h3>
                  </div>
                </div>
                <a href="/about-us" className="theme-btn-one">
                  <span className="btn-shape" />
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="slide-item">
          <div
            className="image-layer"
            style={{
              backgroundImage: "url(/assets/images/hero-door2.jpg)"
            }}
          />
          <div className="auto-container">
            <div className="content-box">
              <h5>
                <i className="icon-warehouse" />
                Welcome To  Sydney Sliding Door Repairs
              </h5>
              <h1>Quality Sliding Door Repairs in Sydney</h1>
              <p>
              Our qualiified professionals can fix all types of sliding doors <br/>
              Servicing clients in the Sydney metro area
              </p>
              <div className="btn-box clearfix">
                <div className="call-now">
                  <div className="inner">
                    <i className="icon-mob" />
                    <span>Book an Appointment Today!</span>
                    <h3>
                      <a href="tel:0401 349 821">0401 349 821</a>
                    </h3>
                  </div>
                </div>
                <a href="/about-us" className="theme-btn-one">
                  <span className="btn-shape" />
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="slide-item">
          <div
            className="image-layer"
            style={{
               backgroundImage: "url(/assets/images/hero-door3.jpg)"
            }}
          />
          <div className="auto-container">
            <div className="content-box">
              <h5>
                <i className="icon-warehouse" />
                <i className="icon-warehouse" />
                Welcome To  Sydney Sliding Door Repairs
              </h5>
              <h1>Quality Sliding Door Repairs in Sydney</h1>
              <p>
              Our qualiified professionals can fix all types of sliding doors <br/>
              Servicing clients in the Sydney metro area
              </p>
              <div className="btn-box clearfix">
                <div className="call-now">
                  <div className="inner">
                    <i className="icon-mob" />
                    <span>Book an Appointment Today!</span>
                    <h3>
                      <a href="tel:0401349821">0401 349 821</a>
                    </h3>
                  </div>
                </div>
                <a href="/about-us" className="theme-btn-one">
                  <span className="btn-shape" />
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
    </OwlCarousel>
    {/* </div> */}
  </section>
 }  