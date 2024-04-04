import { useRef, useEffect } from "react";

import "./ContactUs.css";

export default function ContactUs() {
  const FeedbackFormRef = useRef(null);

  useEffect(() => {
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(
        "Due to the static nature of FA 1, no logic has been added to this element yet."
      );
    };

    const element = FeedbackFormRef.current;
    element.addEventListener("submit", handleSubmit);

    return () => {
      element.removeEventListener("submit", handleSubmit);
    };
  }, []); // Empty dependency array ensures the listener is added only once

  return (
    <div className="default-box content" id="contact-us-container">
      <h3>Feedback Form</h3>
      <form ref={FeedbackFormRef} className="default-box" id="feedback-form">
        <div className="form-field">
          <label htmlFor="username">
            <i className="fa-solid fa-user">&nbsp;</i>
          </label>
          <input
            type="text"
            id="fb-username"
            name="username"
            className="textbox"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">
            <i className="fa-solid fa-envelope">&nbsp;</i>
          </label>
          <input
            type="email"
            id="fb-email"
            name="email"
            className="textbox"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="phone">
            <i className="fa-solid fa-phone">&nbsp;</i>
          </label>
          <input
            type="tel"
            id="fb-phone"
            name="phone"
            className="textbox"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="form-field">
          <label>
            <i className="fa-solid fa-face-smile"></i>
            &nbsp;Are you satisfied with our service?
          </label>
          <div id="fb-rating">
            <span className="radio-button">
              <input
                type="radio"
                id="fb-rating-good"
                name="satisfied"
                value="yes"
              />
              &nbsp;Yes
            </span>
            <span className="radio-button">
              <input
                type="radio"
                id="fb-rating-avg"
                name="satisfied"
                value="somewhat"
                defaultChecked
              />
              &nbsp;Somewhat
            </span>
            <span className="radio-button">
              <input
                type="radio"
                id="fb-rating-bad"
                name="satisfied"
                value="no"
              />
              &nbsp;No
            </span>
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="suggest">
            <i className="fa-solid fa-comments"></i>
            &nbsp;Write your Suggestions:
          </label>
          <textarea
            id="fb-suggest"
            className="default-textarea"
            name="suggest"
            rows="4"
            placeholder="What can we improve?"
          ></textarea>
        </div>
        <button type="submit" className="default-button" id="fb-submit">
          <i className="fa-solid fa-check"></i>
          &nbsp;Submit
        </button>
      </form>
    </div>
  );
}
