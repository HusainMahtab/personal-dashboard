// src/components/ContactSection.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ContactInfo } from '@/types/type';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, LinkIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';

const ContactSection = ({ contact }: { contact: ContactInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to connect? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <EnvelopeIcon className="h-5 w-5 text-blue-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">Email</h4>
                    <a 
                      href={`mailto:${contact.email}`} 
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon className="h-5 w-5 text-blue-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">Phone</h4>
                    <a 
                      href={`tel:${contact.phone.replace(/\D/g, '')}`} 
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPinIcon className="h-5 w-5 text-blue-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">{contact.location}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <LinkIcon className="h-5 w-5 text-blue-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">Online</h4>
                    <div className="flex space-x-4">
                      <a 
                        onClick={()=>window.open(contact.github)}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                      >
                        GitHub
                      </a>
                      <a 
                        onClick={()=>window.open(contact.linkedin)} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Availability
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I'm currently available for freelance work and full-time positions. 
                If you have a project that needs my expertise, don't hesitate to contact me.
              </p>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                <span className="text-gray-700 dark:text-gray-300">Available for opportunities</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium flex items-center hover:shadow-lg transition-all"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <PaperAirplaneIcon className="h-5 w-5 ml-2" />
                    </>
                  )}
                </motion.button>
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 dark:text-green-400"
                  >
                    Message sent successfully!
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 dark:text-red-400"
                  >
                    Error sending message. Please try again.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;