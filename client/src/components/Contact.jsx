import { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact", formData);

      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      alert("Error Sending Message");
      console.log(error);
    }
  };

  return (
    <section>
      <h2>Contact Me</h2>

      <section id="contact"></section>

      <form className="contact-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          rows="5"
          name="message"
          placeholder="Enter Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>
    </section>
  );
}

export default Contact;