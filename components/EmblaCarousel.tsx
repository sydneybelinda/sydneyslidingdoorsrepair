"use client"

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className="embla">
        
      <div className="embla__viewport banner-carousel" ref={emblaRef}> 
        <div className="embla__container">
          {/* {slides.map((index) => ( */}
            <div className="embla__slide" >
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
            </div>
          {/* ))} */}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
