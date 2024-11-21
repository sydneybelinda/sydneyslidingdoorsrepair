export default function SideBar() {
  
    return (
      <section className="main-sidebar">
        <div className="default-SideBar service-SideBar">
        <div className="SideBar-widget SideBar-category">
          <div className="widget-title">
            <h3>All Services</h3>
          </div>
          <div className="widget-content">
            <ul className="category-list clearfix">
              <li>
                <a href="service-details.html" className="current">
                  Roller Door Repair
                </a>
              </li>
              <li>
                <a href="service-details-2.html">Fast and Frinendly staff</a>
              </li>
              <li>
                <a href="service-details-3.html">Replacement Doora</a>
              </li>
              <li>
                <a href="service-details-4.html">Door closer repair and installation</a>
              </li>
              <li>
                <a href="service-details-5.html">Firedoors and Frammes</a>
              </li>
              <li>
                <a href="service-details-6.html">Client satidfaction <br/>Guaranteed</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="SideBar-widget support-box">
          <div
            className="inner-box centred"
            style={{
              backgroundImage: "url(/assets/images/headset.jpg)"
            }}
          >
            <div className="icon-box">
              <div className="icon">
                <i className="icon-logo" />
              </div>
            </div>
            <h3>Want Your sliding Door Fixed?<br/> <br/>We’re Ready To Help You!</h3>
            <a href="tel:12017193488" className="phone-box">
              <i className="icon-mob" />
              0401 349 821
            </a>
            <a href="service-2.html" className="theme-btn-one">
              <span className="btn-shape" />
              Get A quote
            </a>
            <a href="mailto:support@example.com" className="email">
              ssales@sydneyslidingdoorsrepair.com.au
            </a>
          </div>
        </div>
      </div>
      </section>
)
}
