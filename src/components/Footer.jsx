import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Target,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "About Us", href: "#About" },
        { name: "Our Achievements", href: "#Achievements" },
        { name: "Gallery", href: "#Gallery" },
        { name: "Contact Us", href: "#Contact" },
      ],
    },
    {
      title: "Resources",
      links: [{ name: "Membership", href: "/membership" }],
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "hover:text-blue-400",
    },
  ];
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-800 border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <img
                    src={"logo.png"}
                    alt="Archery Club of Uva logo"
                    className="w-10 h-10 p-1 rounded-full"
                    loading="eager"
                    fetchpriority="high"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Archery Club</h3>
                  <p className="text-sm text-gray-400">of Uva</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Empowering archers through precision, dedication, and
                excellence. Join our community and discover the noble art of
                archery.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm">
                  Rotoruwa, Kabillawela North, Bandarawela
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm">uvaarchery@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm">+94 71 811 8969</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-white/10 hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">
                {section.title}
              </h4>{" "}
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © 2025 Archery Club of Uva. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Designed with precision and passion for archery excellence.
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <span className="text-sm">Back to Top</span>
            <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </motion.div>
      </div>{" "}
    </footer>
  );
};

export default Footer;
