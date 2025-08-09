import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Shield, Award, Users, Clock, CheckCircle, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Elite Commercial Cleaning | Our Story & Team',
  description: 'Learn about Elite Commercial Cleaning - 15+ years of professional commercial cleaning services. Meet our experienced team and discover our commitment to excellence.',
  keywords: ['about commercial cleaning', 'cleaning company history', 'professional cleaning team', 'commercial cleaning experience'],
};

export default function About() {
  const teamMembers = [
    {
      name: 'John Smith',
      position: 'Founder & CEO',
      experience: '20+ years',
      description: 'John founded Elite Commercial Cleaning with a vision to provide unmatched cleaning services to businesses.'
    },
    {
      name: 'Sarah Johnson',
      position: 'Operations Manager',
      experience: '12+ years',
      description: 'Sarah ensures our operations run smoothly and our clients receive consistent, high-quality service.'
    },
    {
      name: 'Mike Rodriguez',
      position: 'Quality Control Supervisor',
      experience: '8+ years',
      description: 'Mike oversees quality control and training, ensuring every job meets our high standards.'
    }
  ];

  const certifications = [
    'ISSA (International Sanitary Supply Association) Certified',
    'OSHA Safety Training Certified',
    'Green Cleaning Certification',
    'Bloodborne Pathogen Training',
    'Commercial Insurance Licensed',
    'Bonded & Background Checked Staff'
  ];

  const values = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We show up when we say we will, every time. Your business can count on us.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every detail, ensuring your space always looks its best.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work closely with our clients to understand their unique needs and exceed expectations.'
    },
    {
      icon: CheckCircle,
      title: 'Integrity',
      description: 'Honest, transparent business practices and ethical treatment of employees and clients.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              About Elite Commercial Cleaning
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Building trust through exceptional service for over 15 years
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2009, Elite Commercial Cleaning started with a simple mission: 
                  to provide businesses with reliable, professional cleaning services they 
                  could trust. What began as a small local operation has grown into one of 
                  the area's most respected commercial cleaning companies.
                </p>
                <p>
                  Our founder, John Smith, recognized that many businesses were struggling 
                  with inconsistent cleaning services and unprofessional providers. He set 
                  out to change that by building a company focused on reliability, quality, 
                  and exceptional customer service.
                </p>
                <p>
                  Today, we serve over 500 businesses across the region, from small offices 
                  to large corporate facilities. Our success is built on the trust our 
                  clients place in us and our unwavering commitment to excellence.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="font-heading font-bold text-3xl text-primary-600">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="font-heading font-bold text-3xl text-primary-600">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Users className="h-24 w-24 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Company Story Image</p>
                <p className="text-sm">Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we serve our clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="bg-gray-300 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-gray-500" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">{member.position}</p>
                <p className="text-sm text-gray-600 mb-3">{member.experience} Experience</p>
                <p className="text-gray-700 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Certifications & Training
            </h2>
            <p className="text-xl text-blue-100">
              Our team maintains the highest industry standards through ongoing education
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-secondary-400 flex-shrink-0" />
                <span className="text-white font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Experience the Elite Commercial Cleaning difference. Contact us today 
            for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white hover:bg-gray-100 text-secondary-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Your Free Quote
            </Link>
            <Link
              href="/contact"
              className="bg-secondary-800 hover:bg-secondary-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}