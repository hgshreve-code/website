import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Office Cleaning',
    'Medical Facility Cleaning',
    'Retail Store Cleaning',
    'Restaurant Cleaning',
    'Post-Construction Cleanup',
    'Floor Care & Maintenance'
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Industries We Serve', href: '/industries' },
    { name: 'Get a Quote', href: '/quote' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-600 text-white p-2 rounded-lg">
                <span className="font-bold text-xl">EC</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">Elite Commercial</h3>
                <p className="text-sm text-gray-400">Cleaning Services</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional commercial cleaning services with over 15 years of experience. 
              We provide reliable, eco-friendly cleaning solutions for businesses of all sizes.
            </p>
            
            {/* Trust Indicators */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-secondary-400">✓</span>
                <span>Bonded & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-secondary-400">✓</span>
                <span>Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-secondary-400">✓</span>
                <span>Eco-Friendly Products</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Business Avenue</p>
                  <p className="text-gray-300">Your City, State 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-white transition-colors">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:info@elitecommercialcleaning.com" className="text-gray-300 hover:text-white transition-colors">
                  info@elitecommercialcleaning.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">24/7 Emergency Service</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    href="/services" 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="font-heading font-semibold text-lg mb-4">Find Us</h3>
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1647887432123!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elite Commercial Cleaning Location"
            ></iframe>
          </div>
        </div>

        {/* Social Links & Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-gray-800 hover:bg-primary-600 p-2 rounded-lg transition-colors duration-200"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
          <div className="text-center md:text-right text-gray-400 text-sm">
            <p>&copy; {currentYear} Elite Commercial Cleaning Services. All rights reserved.</p>
            <p className="mt-1">Licensed, Bonded & Insured</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;