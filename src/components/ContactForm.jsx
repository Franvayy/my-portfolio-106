import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [formError, setFormError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (fieldErrors.name) setFieldErrors((prev) => ({ ...prev, name: false }));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (fieldErrors.email) setFieldErrors((prev) => ({ ...prev, email: false }));
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    if (fieldErrors.message) setFieldErrors((prev) => ({ ...prev, message: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {
      name: !name.trim(),
      email: !email.trim() || !email.includes("@"),
      message: !message.trim(),
    };

    if (errors.name || errors.email || errors.message) {
      setFieldErrors(errors);

      if (errors.name || !email.trim() || errors.message) {
        setFormError("Please fill in all fields.");
      } else if (!email.includes("@")) {
        setFormError("Please enter a valid email address.");
      }
      return;
    }

    alert("Thank you! Your message has been sent.");

    // Reset Form
    setName("");
    setEmail("");
    setMessage("");
    setFormError("");
    setFieldErrors({ name: false, email: false, message: false });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <p className="section-label">CONTACT</p>

        <h2>LET'S MAKE SOMETHING WORTH REMEMBERING.</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>

            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className={fieldErrors.name ? "error-input" : ""}
              style={fieldErrors.name ? { borderColor: "red" } : {}}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>

            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className={fieldErrors.email ? "error-input" : ""}
              style={fieldErrors.email ? { borderColor: "red" } : {}}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>

            <textarea
              id="message"
              rows="5"
              value={message}
              onChange={handleMessageChange}
              className={fieldErrors.message ? "error-input" : ""}
              style={fieldErrors.message ? { borderColor: "red" } : {}}
            ></textarea>
          </div>

          {formError && (
            <p className="form-error" style={{ color: "red" }}>
              {formError}
            </p>
          )}

          <button type="submit" className="send-btn">
            Send
          </button>

          <p className="privacy-text">
            Your data will only be used to contact you.
            <br />
            We do not store or share your information.
          </p>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;