import React from 'react';
import { motion } from 'framer-motion';
import { FacebookIcon } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Us',
      details: ['Rotoruwa, Kabillawela North', 'Bandarawela, Sri Lanka'],
      action: 'Get Directions'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['+94 71 811 8969', '+94 57 222 2336'],
      action: 'Make a Call'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: ['uvaarchery@gmail.com'],
      action: 'Send Email'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Ready to start your archery journey? Have questions about our programs? We'd love to hear from you!
        </p>
      </motion.div>

      {/* Contact Information - Single Column Layout */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Whether you're a beginner looking to learn archery or an experienced archer seeking to join our community, 
              we're here to help you hit your target.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{info.title}</h3>
                  <div className="space-y-2 mb-6">
                    {info.details.map((detail) => (
                      <p key={detail} className="text-gray-300">{detail}</p>
                    ))}
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200 bg-blue-400/10 hover:bg-blue-400/20 px-4 py-2 rounded-lg">
                    {info.action} →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 text-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Follow Our Journey</h3>
            <p className="text-gray-300 mb-8">
              Stay connected with our archery community and get the latest updates on competitions, training, and achievements.
            </p>
            <div className="flex justify-center space-x-6">
              {[
                { icon: <FacebookIcon />, name: 'Facebook', color: 'hover:text-blue-400' }
              ].map((social) => (
                <button
                  key={social.name}
                  className={`w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-white/20 hover:scale-110 ${social.color}`}
                  title={social.name}
                >
                  <span className="text-2xl">{social.icon}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Find Us Here</h2>
          <div className="relative bg-gray-800 rounded-2xl overflow-hidden" style={{ aspectRatio: '16/9', minHeight: '24rem' }}>
            <iframe
              title="ACU Club Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1055.3207996552533!2d81.00222321018184!3d6.838597331933239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1754066437875!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
            <div className="absolute z-10 bottom-6 left-1/2 -translate-x-1/2 text-center w-full flex flex-col items-center">
              <p className="text-gray-200 mb-4 bg-gray-900/70 px-4 py-2 rounded-xl inline-block max-w-xs">
                Rotoruwa, Kabillawela North, Bandarawela, Sri Lanka
              </p>
              <a
                href="https://maps.app.goo.gl/UWg88KDfDTmPPRXe7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition-colors duration-300 shadow-lg"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
