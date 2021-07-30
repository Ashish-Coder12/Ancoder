import emailjs from "emailjs-com";
import React from "react";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_bq1j08d",
        e.target,
        "user_4VlhdmYWQGuXr1VBgvAdF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div>
      <section class="page-section" id="contact">
        <div class="container">
          <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
            Contact Me
          </h2>

          <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon">
              <i class="fas fa-star"></i>
            </div>
            <div class="divider-custom-line"></div>
          </div>

          <div class="row">
            <div class="col-lg-8 mx-auto">
              <form
                onSubmit={sendEmail}
                id="contactForm"
                name="sentMessage"
                novalidate="novalidate"
              >
                <div class="control-group">
                  <div class="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Name</label>
                    <input
                      class="form-control"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Name"
                      required="required"
                      data-validation-required-message="Please enter your name."
                    />
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="control-group">
                  <div class="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Email Address</label>
                    <input
                      class="form-control"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      required="required"
                      data-validation-required-message="Please enter your email address."
                    />
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                {/* <div class="control-group">
                  <div class="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Phone Number</label>
                    <input
                      class="form-control"
                      id="phone"
                      type="tel"
                      placeholder="Phone Number"
                      required="required"
                      data-validation-required-message="Please enter your phone number."
                    />
                    <p class="help-block text-danger"></p>
                  </div>
                </div> */}
                <div class="control-group">
                  <div class="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Message</label>
                    <textarea
                      class="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      required="required"
                      data-validation-required-message="Please enter a message."
                    ></textarea>
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <br />
                <div id="success"></div>
                <div class="form-group">
                  <button
                    class="btn btn-primary btn-xl"
                    id="sendMessageButton"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
