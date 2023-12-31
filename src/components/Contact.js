import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import { FaLinkedin } from 'react-icons/fa';
import { RiGithubFill } from 'react-icons/ri';
import { FaXTwitter } from 'react-icons/fa6';
import { SiWellfound } from 'react-icons/si';
import '../styles/Contact.css';

const Contact = () => {
  const [state, handleSubmit] = useForm('moqgaeyy');

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);

    if (state.succeeded) {
      setSubmitted(true);

      setTimeout(() => {
        setFormData({ fullname: '', email: '', message: '' });
      }, 900);

      setTimeout(() => {
        setSubmitted(false);
      }, 9000);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact me</h2>
      <hr className="underline" />
      <p>
        I&apos;m always excited about new collaborations and love working on interesting projects.
        If you have a project in mind, need advice, or want to share your thoughts,
        feel free to get in touch.
        <br />
        I can&apos;t wait to hear from you!
      </p>
      <div className="social-media">
        <a className="contact-icon" href="https://www.linkedin.com/in/marie-gr%C3%A2ce-bahati/" target="_blank" rel="noreferrer" aria-label="linkedin"><FaLinkedin /></a>
        <a className="contact-icon" href="https://github.com/mariegrace31" target="_blank" rel="noreferrer" aria-label="github"><RiGithubFill /></a>
        <a className="contact-icon" href="https://twitter.com/mariegracebmg" target="_blank" rel="noreferrer" aria-label="twitter"><FaXTwitter /></a>
        <a className="contact-icon" href="https://wellfound.com/u/bahati-marie-grace" target="_blank" rel="noreferrer" aria-label="wellfound"><SiWellfound /></a>
      </div>
      <div className="form-container">
        <form onSubmit={onSubmit} className="contact-form">
          <div className="form-cont">
            <label htmlFor="fullname">
              Full name:
              <input
                id="fullname"
                type="text"
                name="fullname"
                placeholder="Enter your full name"
                value={formData.fullname}
                onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                required
              />
            </label>
          </div>
          <div className="form-cont">
            <label htmlFor="email">
              Email adress:
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email adress"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </label>
          </div>
          <div className="form-cont">
            <label htmlFor="message">
              Message:
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </label>
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="submit-btn"
          >
            {state.submitting ? 'Submitting...' : 'Get in touch'}
          </button>
          {submitted && (
            <div className="submission-message">
              <h4>Thank you for reaching out!</h4>
              <p>
                Your messagge has landed safely in my inbox. I&apos;ll be diving into it shortly
                and will get back to you as soon as possible.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
