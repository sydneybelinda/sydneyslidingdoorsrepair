"use client";

import { sendMail } from '@/lib/send-email';
import { toast } from 'sonner';
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { emailQuote } from '@/lib/actions';

const initialState = {
  message: "",
};

function SubmitButton() {
  // const { pending } = useFormStatus();
const pending=true;


  return (
                <button className="theme-btn-one" type="submit" name="submit-form" aria-disabled={pending}>
                <span className="btn-shape" />
                send message
  
              </button>
  );
}

export default function Quote() {

  const [state, formAction] = useActionState(emailQuote, initialState);



  // async function createQuote(formData: FormData) {
  //   'use server'
 
  //   const rawFormData = {
  //     name: formData.get('name'),
  //     email: formData.get('email'),
  //     phone: formData.get('phone'),
  //     message: formData.get('message')
  //   }

  // }


// }
  
 
  return (
  <section className="contact-section">
  <div className="auto-container">
    <div className="inner-content">
    <div className="title-inner">
      <div className="text">
        <h2>Request a FREE Quote</h2>
        <p>
          Fill out the form below.<br/>
          Please include 1 or 2 photos of the door to be repaired
        </p>
      </div>

    </div>
  <form 
      action={formAction}
        id="contact-form"
        className="default-form"
      >
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 form-group">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              required
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 form-group">
            <input
              type="email"
              name="email"
              placeholder="Email *"
              required
            />
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 form-group">
            <input type="text" name="phone" placeholder="Phone *" required />
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
            <input
              type="text"
              name="address"
              placeholder="Address"
              required
            />
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
            <textarea
              name="message"
              placeholder="Your Message ..."
              defaultValue={""}
            />
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">

            <SubmitButton />
            <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
          </div>
        </div>

      </form>
    </div>
  </div>
</section>)
}
