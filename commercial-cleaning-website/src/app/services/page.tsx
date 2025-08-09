import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Building, Sparkles, Vacuum, Droplets, Trash2, Wrench, Clock, CheckCircle, Star, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Services | Office, Medical, Retail & More',
  description: 'Comprehensive commercial cleaning services including office cleaning, medical facility sanitization, retail maintenance, and specialized cleaning solutions. Get your free quote today!',
  keywords: ['office cleaning services', 'medical facility cleaning', 'retail cleaning', 'commercial janitorial services', 'floor care', 'window cleaning'],
};

export default function Services() {
  const mainServices = [
    {
      icon: Building,
      title: 'Office Cleaning',
      description: 'Complete office cleaning services including desks, floors, restrooms, break rooms, and common areas.',
      features: [
        'Daily, weekly, or monthly cleaning',
        'Desk and workstation sanitization',
        'Restroom deep cleaning',
        'Floor care and maintenance',
        'Trash removal and recycling'
      ],
      pricing: 'Starting at $0.05/sq ft'
    },
    {
      icon: Sparkles,
      title: 'Medical Facility Cleaning',
      description: 'Specialized cleaning for healthcare facilities with strict sanitization protocols and medical-grade disinfection.',
      features: [
        'Hospital-grade disinfectants',
        'Bloodborne pathogen protocols',
        'HIPAA compliant procedures',
        'Specialized waste disposal',
        'Infection control measures'
      ],
      pricing: 'Starting at $0.12/sq ft'
    },
    {
      icon: Vacuum,
      title: 'Retail Store Cleaning',
      description: 'Keep your retail space pristine to create the best shopping experience for your customers.',
      features: [
        'Floor cleaning and polishing',
        'Display case cleaning',
        'Fitting room maintenance',
        'Entrance and storefront care',
        'After-hours cleaning available'
      ],
      pricing: 'Starting at $0.08/sq ft'
    },
    {
      icon: Droplets,
      title: 'Restaurant Cleaning',
      description: 'Food service cleaning that meets health department standards and keeps your establishment spotless.',
      features: [
        'Kitchen deep cleaning',
        'Grease trap maintenance',
        'Dining area sanitization',
        'Floor degreasing',
        'Health code compliance'
      ],
      pricing: 'Starting at $0.15/sq ft'
    },
    {
      icon: Wrench,
      title: 'Post-Construction Cleanup',
      description: 'Thorough cleanup after construction or renovation projects to make your space move-in ready.',
      features: [
        'Dust and debris removal',
        'Window and fixture cleaning',
        'Floor polishing and sealing',
        'Paint and adhesive removal',
        'Final inspection cleanup'
      ],
      pricing: 'Custom quotes available'
    },
    {
      icon: Sparkles,
      title: 'Specialized Services',
      description: 'Additional services tailored to your specific needs and industry requirements.',
      features: [
        'Carpet and upholstery cleaning',
        'Window washing (interior/exterior)',
        'Pressure washing',
        'Emergency cleanup services',
        'Green cleaning options'
      ],
      pricing: 'Service-specific pricing'
    }
  ];

  const additionalServices = [
    'Carpet & Upholstery Cleaning',
    'Window Washing (Interior & Exterior)',
    'Floor Stripping & Waxing',
    'Pressure Washing',
    'Emergency Cleanup Services',
    'Green Cleaning Programs',
    'Supply Restocking',
    'Maintenance Services'
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: 'Customized Cleaning Plans',
      description: 'We create cleaning schedules and protocols tailored to your specific business needs and budget.'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Available for daily, weekly, monthly, or one-time cleaning services to fit your schedule.'
    },
    {
      icon: Star,
      title: 'Quality Guarantee',
      description: '100% satisfaction guaranteed. If you\'re not happy, we\'ll return to make it right at no charge.'
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
              Professional Commercial Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Comprehensive cleaning solutions for offices, medical facilities, retail stores, and more
            </p>
            <Link
              href="/quote"
              className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional cleaning services designed to meet the unique needs of your business
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                      <Icon className="h-8 w-8 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-2xl text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-secondary-500 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-primary-600">{service.pricing}</span>
                        <Link
                          href="/quote"
                          className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions to keep your facility in perfect condition
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-200">
                <CheckCircle className="h-8 w-8 text-secondary-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Why Choose Elite Commercial Cleaning?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Our Service Process
            </h2>
            <p className="text-xl text-blue-100">
              Simple, straightforward steps to get your cleaning service started
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Free Consultation', description: 'We assess your facility and discuss your cleaning needs' },
              { step: '2', title: 'Custom Quote', description: 'Receive a detailed, no-obligation quote tailored to your requirements' },
              { step: '3', title: 'Service Agreement', description: 'Sign your service agreement and schedule your cleaning times' },
              { step: '4', title: 'Quality Service', description: 'Experience consistent, professional cleaning service' }
            ].map((process, index) => (
              <div key={index} className="text-center text-white">
                <div className="bg-secondary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-2xl">{process.step}</span>
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">
                  {process.title}
                </h3>
                <p className="text-blue-100">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and customized quote for your facility
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white hover:bg-gray-100 text-secondary-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="bg-secondary-800 hover:bg-secondary-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-flex items-center justify-center"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}