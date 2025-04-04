"use client";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    // e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-lg bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Contact LuxeCars
      </h2>
      <p className="text-gray-600 text-center mb-6">
        We'd love to hear from you! Fill out the form below.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
        action="https://formsubmit.co/emil.hakanzon@gmail.com"
        method="POST"
        target="_blank"
      >
        <div>
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mt-2 px-4 py-2 border rounded-lg text-lg focus:ring-2 focus:ring-gray-500 focus:outline-none transition duration-300"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mt-2 px-4 py-2 border rounded-lg text-lg focus:ring-2 focus:ring-gray-500 focus:outline-none transition duration-300"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Message</label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full mt-2 px-4 py-2 border rounded-lg text-lg focus:ring-2 focus:ring-gray-500 focus:outline-none transition duration-300"
          />
        </div>

        <button
          type="submit"
          className={`w-full py-3 text-white text-lg font-semibold rounded-lg transition duration-300 ${
            submitted
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gray-800 hover:bg-gray-900"
          }`}
          disabled={submitted}
        >
          {submitted ? "Message Sent! ✅" : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
