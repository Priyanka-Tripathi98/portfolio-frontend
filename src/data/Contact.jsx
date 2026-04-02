import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // VERY IMPORTANT

    try {
      await axios.post("http://localhost:8000/submit", formData);
      alert("Message sent successfully !!");

      // clear form
      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again later.!!");
    }
  };

  return (
    <section id="Contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Get In <span className="text-teal-600">Touch</span>
        </h2>
        <p className="text-gray-600 mb-10">
          I'm currently looking for new opportunities. My inbox is always open!
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="p-4 rounded-lg border border-gray-300 focus:outline-teal-600"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-4 rounded-lg border border-gray-300 focus:outline-teal-600"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="5"
            className="p-4 rounded-lg border border-gray-300 focus:outline-teal-600"
          ></textarea>

          <button
            type="submit"
            className="bg-teal-600 text-white font-bold py-4 rounded-lg hover:bg-teal-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;