import React, { useState } from 'react';
import { send } from 'emailjs-com';
import { motion } from "framer-motion"; // Optional for animations

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await send(
        'service_nsgbi36',
        'template_jmrlohe',
        formData,
        'LSHBDTbjWnPjd4OXA'
      );
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    } catch (err) {
      console.error('Failed to send message:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full relative">
        <h2 className="text-xl font-bold mb-4">Contact Me</h2>
        
        {loading && (
          <div className="flex items-center justify-center">
            <div className="loader"></div> {/* CSS spinner for loading */}
          </div>
        )}

        {success && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex items-center justify-center text-green-500 mb-4"
          >
            ✅ Message Sent Successfully!
          </motion.div>
        )}

        {error && (
          <div className="text-red-500 text-center mb-4">
            ❌ Failed to send message. Please try again later.
          </div>
        )}

        {!loading && !success && (
          <form onSubmit={handleSubmit} className='text-black'>
            <h1 className='text-lg font-semibold'>Send me a Message 🕵️</h1>
            <br />
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-lime-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-lime-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-lime-500"
                rows="4"
              />
            </div>
            <button type="submit" className="primary-btn w-full">
              Send Message
            </button>
            <button
              type="button"
              onClick={onClose}
              className="mt-2 text-gray-500 hover:underline"
            >
              Cancel
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
