import React, { useState } from 'react';
import Logo from "../assets/logo.png";

const Form = () => {
    const [formData, setFormData] = useState({
        Name:"",
        Email:"",
        Phone:"",
        Message:""
    })
    console.log(formData)

const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
}
console.log(handleChange)

const handleSubmit=(e)=>{
    e.preventDefault()
}

  return (
    <section className="max-w-3xl mx-auto mt-10 p-6 bg-white border-2 border-green-700 rounded-3xl shadow-lg">
      <div className="flex justify-center mb-4">
        <img src={Logo} alt="Logo" className="h-12" />
      </div>
      <h2 className="text-xl font-bold mb-4 text-center text-green-700">Send Us Your Query</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name='Name'
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
            name='Phone'
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
            name='Message'
            value={formData.Message}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            placeholder="Your message here..."
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-md transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
