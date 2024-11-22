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
                <a href="/services-2/roller-door-repairs" className="current">
                  Roller Door Repair
                </a>
              </li>
              <li>
                <a href="/services-2/aluminum-doors">Aluminium doors</a>
              </li>
              <li>
                <a href="/services-2">Sliding windows</a>
              </li>
              <li>
                <a href="/services-2">Locks</a>
              </li>
              <li>
                <a href="/services-2">Fire Doors</a>
              </li>
              <li>
                <a href="/services-2">Joinery Doors</a>
              </li>
              <li>
                <a href="/services-2">Roller Doors (but not garage roller doors)</a>
              </li>
              <li>
                <a href="/services-2">Security Doors</a>
              </li>
              <li>
                <a href="/services-2">Sliding Doors</a>
              </li>           <li>
                <a href="s/services-2">Timber Doors</a>
              </li>

              <li>
                <a href="/guarabtee">Client satidfaction <br/>Guaranteed</a>
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
            <h3>Want Your sliding Door Fixed?<br/> <br/>We&apos;re Ready To Help You!</h3>
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
