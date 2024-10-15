export default function Trainer() {
  return (
    <>
      <section className="contact" id="contact">
        {/* Contact section start */}
        <div className="contact-container">
          {/* Section heading for contact information */}
          <h2>CONTACT US</h2>
          {/* Decorative line under heading */}
          <div className="line" />
          {/* Description paragraph about the contact section */}
          <p>
            Lorem ipsum is not simply random text. It has roots in a piece of
            classical at <br />
            Hampden-Sydney College.
          </p>
          {/* Container for contact message and details */}
          <div className="message-container">
            {/* Phone and email information section */}
            <div className="phone-container">
              <h6>
                Mobile Number &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email
                Address
              </h6>
              <span>+135 773 321 4442&nbsp; &nbsp; &nbsp;demo@demo.com</span>
              {/* Appointment input fields */}
              <div className="input-container">
                <h3>Make An Appointment</h3>
                <input type="text" placeholder="Your Name" id="textname" />
                {/* Input for name */}
                <input type="email" placeholder="Your Email" id="ymail" />
                {/* Input for email */}
                <textarea
                  rows={5}
                  cols={50}
                  name="text"
                  placeholder="Your Message"
                  defaultValue={""}
                />
                {/* Textarea for message */}
              </div>
            </div>
            {/* Google Maps integration for location */}
            <div className="googleMap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6119.130744438523!2d32.822356193140685!3d39.9287416134493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f20f1e3c1e1%3A0x371e33cacc518318!2sBah%C3%A7elievler%2C%2006490%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1727780059591!5m2!1str!2str"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Embedded Google Map */}
            </div>
          </div>
        </div>
      </section>
      {/* Contact section end */}
    </>
  );
}
