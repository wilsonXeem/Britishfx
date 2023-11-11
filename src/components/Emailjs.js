import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Emailjs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8me649a",
        "template_51nsh27",
        e.target,
        "zMvHdoFTHUHChkykk"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShow(!show);
          setEmail("");
          setName("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div>
      {show ? (
        <div className="success">
          <p>Message sent Successfully!</p>
          <span onClick={() => setShow(!show)} style={{ cursor: "pointer" }}>
            x
          </span>
        </div>
      ) : (
        <form className="contact-form form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Username</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="from_name"
          />
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="from_email"
          />
          <label>Message</label>
          <textarea
            rows={5}
            cols={5}
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="form-but">
            <button type="submit">Send Message</button>
          </div>
        </form>
      )}
    </div>
  );
}
