/**
 * @license Apache-2.0
 */

import { useState, useRef } from "react";

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    if (!email || email.trim() === "") {
      return "Email is required";
    }
    if (!email.includes("@")) {
      return "Please enter a valid email address with @ symbol";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing (only clear, don't validate)
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    const emailError = validateEmail(formData.email);
    if (emailError) {
      newErrors.email = emailError;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("message", formData.message);
      data.append("_subject", "New Contact Form Submission - Portfolio");
      data.append("_replyto", formData.email);
      data.append("_captcha", "false");
      data.append("_template", "table");

      const response = await fetch(
        "https://formsubmit.co/ajax/abeihhamani24@gmail.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setErrors({ submit: "Failed to send message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" ref={sectionRef} className="py-8">
        <div className="container">
          <div className="text-center max-w-md mx-auto">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h2 className="headline-2 mb-4">Message Sent!</h2>
            <p className="text-zinc-400 mb-6">
              Thank you for reaching out! I'll get back to you as soon as
              possible.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: "", email: "", message: "" });
                setErrors({});
                setIsSubmitting(false);
                setTimeout(() => {
                  sectionRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }, 0);
              }}
              className="btn btn-primary"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="contact" ref={sectionRef} className="py-8">
      <div className="container lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
        <div className="mb-6 lg:mb-0">
          <h2 className="headline-2 lg:max-w-[12ch]">Contact Me</h2>

          <p className="text-zinc-400 mt-3 mb-6 max-w-[50ch] lg:max-w-[30ch]">
            I'm eager to apply my skills, gain real-world experience, and
            collaborate with teams who share my passion for building great tech
          </p>
        </div>

        <form onSubmit={handleSubmit} className="xl:pl-10 2xl:pl-20">
          <div className="md:grid md:items-center md:grid-cols-2 md:gap-4">
            <div className="mb-3">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className={`text-field ${
                  errors.name ? "ring-2 ring-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                className={`text-field ${
                  errors.email ? "ring-2 ring-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Hi! I'd love to connect..."
              value={formData.message}
              onChange={handleInputChange}
              className={`text-field resize-y min-h-80 max-h-96 ${
                errors.message ? "ring-2 ring-red-500" : ""
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {errors.submit && (
            <p className="text-red-400 text-sm mb-4">{errors.submit}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary [&]:max-w-full w-full justify-center disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

