import Link from "next/link"

export default function Footer() {
  
    return (
<footer className="main-footer">
<div className="auto-container">
  <div className="widget-section">
    <div className="row clearfix">
      <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
        <div className="footer-widget logo-widget">
          <figure className="footer-logo">
            <Link href="/">
              {/* <img src="assets/images/footer-logo.png" alt="" /> */}
              <div className="sec-title text-white">
                <span className="text-white">Sydney Sliding <br/>Door Repairs</span>
    
              </div>
            </Link>
          </figure>
          <div className="text">
            <p>
              Sunt culpa qui officia deslys mollit ipsum est dolor se
              laborum. Sed perspiciatis un iste natus error sit
              voluptatem.
            </p>
          </div>
          <ul className="social-links clearfix">
            <li>
              <a href="index.html">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="index.html">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="index.html">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a href="index.html">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
        <div className="footer-widget links-widget">
          <div className="widget-title">
            <h3>What We Offers</h3>
          </div>
          <div className="widget-content">
            <ul className="links-list clearfix">
              <li>
                <a href="index.html">Sliding Door Repairs</a>
              </li>
              <li>
                <a href="index.html">Fast and Friendly Service</a>
              </li>
              <li>
                <a href="index.html">Satisfaction Gauranteed</a>
              </li>
              <li>
                <a href="index.html">Personalised Service</a>
              </li>
              <li>
                <a href="index.html">Qualified Staff</a>
              </li>
              <li>
                <a href="index.html">Low price</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
        <div className="footer-widget links-widget">
          <div className="widget-title">
            <h3>About Us</h3>
          </div>
          <div className="widget-content">
            <ul className="links-list clearfix">
              <li>
                <a href="index.html">Service Locations</a>
              </li>
              <li>
                <a href="index.html">Career Opportunities</a>
              </li>
              <li>
                <a href="index.html">Training Center</a>
              </li>
              <li>
                <a href="index.html">Safety Commitment</a>
              </li>
              <li>
                <a href="index.html">Photo Gallery</a>
              </li>
              <li>
                <a href="index.html">Download Center</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
        <div className="footer-widget contact-widget">
          <div className="widget-title">
            <h3>Get In Touch</h3>
          </div>
          <div className="widget-content">
            <ul className="info clearfix">
              <li>Minogue Cres <br/>Forest Lodge  NSW  2037</li>
              <li>
                <a href="tel:0401349821">0401 349 821</a>
              </li>
              <li>
                <a href="mailto:support@example.com">
                sales@sydneyslidingdoorsrepair.com.au
                </a>
              </li>
              <li>
                <span>Working Hours</span>
              </li>
              <li>Mon - Sat : 9am to 7pm</li>
              <li>Sunday is Closed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
<div className="footer-bottom centred">
  <div className="auto-container">
    <div className="copyright">
      <p>
        Sydney Sliding Door Repairs (c) 2024&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="index.html">
          <span>Sitemap</span>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="index.html">
          <span>Terms &amp; Conditions</span>
        </a>
      </p>
    </div>
  </div>
</div>
</footer>
   )
}
