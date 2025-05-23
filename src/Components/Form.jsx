import React, { useState } from 'react';
import Logo from "../assets/logo.png";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"

const Form = () => {

  const navigate = useNavigate();

  const initialFormState = {
    Name: "",
    Email: "",
    Phone: "",
    Message: ""
  };

  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const isValidPhone = (phone) => /^\d{10}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { Name, Email, Phone, Message } = formData;

    if (!Name || !Email || !Phone || !Message) {
      return toast.error("All fields are required");
    }

    if (!isValidEmail(Email)) {
      return toast.error("Please enter a valid email address");
    }

    if (!isValidPhone(Phone)) {
      return toast.error("Please enter a valid 10-digit phone number");
    }

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:4000/form", formData, {
        headers: { "Content-Type": "application/json" }
      });
      console.log(response)
      toast.success("Form submitted successfully! We'll connect with you shortly.");
      setFormData(initialFormState);

      setTimeout(() => {
        navigate("/thank-you");
      }, 1000);

    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }

  };

  return (
    <>
      <section className="max-w-3xl mx-auto mt-10 p-6 bg-white border-2 border-green-700 rounded-3xl shadow-lg">
        <div className="flex justify-center mb-4">
          <img src={Logo} alt="Logo" className="h-12" />
        </div>
        <h2 className="text-xl font-bold mb-4 text-center text-green-700">
          Send Us Your Query
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="10-digit number"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              rows="3"
              name="Message"
              value={formData.Message}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`${loading ? "bg-green-400 cursor-not-allowed" : "bg-green-700 hover:bg-green-800"
              } text-white font-semibold px-6 py-2 rounded-md transition duration-200`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </section>

      <ToastContainer />
    </>
  );
};

export default Form;
