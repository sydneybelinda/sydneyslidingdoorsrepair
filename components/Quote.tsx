export default function Quote() {
  
    return (

<section className="service-form-section alternat-2">
<div className="icon-layer">
  <img src="assets/images/icons/icon-14.png" alt="" />
</div>
<div className="auto-container">
  <div className="service-form">
    <div className="title-inner">
      <div className="text">
        <h2>Request a FREE Quote</h2>
        <p>
          Fill out the form below.<br/>
          Please include 1 or 2 photos of the door to be repaired
        </p>
      </div>

    </div>
    <div className="form-inner">
      <form
        action="index.html"
        method="post"
        className="request-form clearfix"
      >
        <div className="form-group w-33">
          <input
            type="text"
            className="mw-100"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group w-33">
          <input
           className="mw-100"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group w-33">
          <input
           className="mw-100"
            type="text"
            name="phone"
            placeholder="Phone"
            required
          />
        </div>

        <div className="form-group full-width">
          <input
           className="mw-100"
            type="text"
            name="address"
            placeholder="Address"
            required
          />
        </div>
        {/* <div className="form-group full-width">
          <textarea
           className="mw-100"
            type="text"
            name="description"
            placeholder="Please provide a description of the work"
            required
          />
        </div> */}

        <div className="message-btn">
          <button type="submit" className="theme-btn-one">
            <span className="btn-shape" />
            send
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
</section>
    )}