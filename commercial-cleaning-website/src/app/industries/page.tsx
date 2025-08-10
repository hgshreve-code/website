import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Building, Heart, ShoppingBag, Utensils, GraduationCap, Factory, Home, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Industries We Serve | Commercial Cleaning for All Business Types',
  description: 'Elite Commercial Cleaning serves offices, healthcare facilities, retail stores, restaurants, schools, manufacturing, and more. Specialized cleaning solutions for every industry.',
  keywords: ['office cleaning', 'healthcare cleaning', 'retail cleaning', 'restaurant cleaning', 'school cleaning', 'manufacturing cleaning', 'commercial cleaning industries'],
};

export default function Industries() {
  const industries = [
    {
      icon: Building,
      title: 'Corporate Offices',
      description: 'Professional office cleaning services for corporate environments, co-working spaces, and business centers.',
      services: [
        'Daily office maintenance',
        'Executive suite cleaning',
        'Conference room sanitization',
        'Break room and kitchen cleaning',
        'Lobby and reception area care'
      ],
      challenges: 'Maintaining a professional appearance while minimizing disruption to business operations.',
      solution: 'Flexible scheduling and quiet cleaning protocols designed around your business hours.'
    },
    {
      icon: Heart,
      title: 'Healthcare Facilities',
      description: 'Specialized cleaning for medical offices, clinics, dental practices, and healthcare facilities.',
      services: [
        'Hospital-grade disinfection',
        'Patient room sanitization',
        'Waiting area maintenance',
        'Medical waste disposal',
        'HIPAA compliant procedures'
      ],
      challenges: 'Strict infection control requirements and specialized waste handling protocols.',
      solution: 'Certified staff trained in healthcare cleaning with medical-grade disinfectants and protocols.'
    },
    {
      icon: ShoppingBag,
      title: 'Retail Stores',
      description: 'Comprehensive cleaning services for retail environments, showrooms, and shopping centers.',
      services: [
        'Sales floor maintenance',
        'Fitting room cleaning',
        'Display case care',
        'Storefront cleaning',
        'Customer restroom maintenance'
      ],
      challenges: 'Maintaining cleanliness during business hours without disrupting customers.',
      solution: 'Discreet cleaning services scheduled around peak shopping times and store operations.'
    },
    {
      icon: Utensils,
      title: 'Restaurants & Food Service',
      description: 'Food service cleaning that meets health department standards and regulations.',
      services: [
        'Kitchen deep cleaning',
        'Dining area sanitization',
        'Grease trap maintenance',
        'Floor degreasing',
        'Equipment cleaning'
      ],
      challenges: 'Meeting strict health department requirements and managing grease and food residue.',
      solution: 'Food service certified staff with specialized equipment and health code compliant procedures.'
    },
    {
      icon: GraduationCap,
      title: 'Educational Institutions',
      description: 'School and university cleaning services focused on creating healthy learning environments.',
      services: [
        'Classroom cleaning',
        'Cafeteria sanitization',
        'Gymnasium maintenance',
        'Library care',
        'Administrative office cleaning'
      ],
      challenges: 'Large facilities with high traffic and the need for child-safe cleaning products.',
      solution: 'Eco-friendly, non-toxic cleaning products and efficient large-scale cleaning protocols.'
    },
    {
      icon: Factory,
      title: 'Manufacturing & Industrial',
      description: 'Industrial cleaning services for manufacturing facilities, warehouses, and production areas.',
      services: [
        'Production floor cleaning',
        'Warehouse maintenance',
        'Equipment cleaning',
        'Safety compliance',
        'Waste management'
      ],
      challenges: 'Heavy-duty cleaning requirements and safety compliance in industrial environments.',
      solution: 'Industrial-grade equipment and safety-trained staff familiar with manufacturing environments.'
    },
    {
      icon: Home,
      title: 'Property Management',
      description: 'Comprehensive cleaning services for property management companies and commercial buildings.',
      services: [
        'Common area maintenance',
        'Lobby and entrance cleaning',
        'Elevator maintenance',
        'Parking garage cleaning',
        'Tenant space preparation'
      ],
      challenges: 'Managing multiple properties with varying needs and tenant requirements.',
      solution: 'Dedicated account management and customized cleaning schedules for each property.'
    },
    {
      icon: Briefcase,
      title: 'Professional Services',
      description: 'Specialized cleaning for law firms, accounting offices, consulting firms, and professional practices.',
      services: [
        'Reception area maintenance',
        'Conference room cleaning',
        'Private office care',
        'Document security protocols',
        'Client area presentation'
      ],
      challenges: 'Maintaining confidentiality while ensuring professional presentation for clients.',
      solution: 'Background-checked staff with confidentiality agreements and professional appearance standards.'
    }
  ];

  const whySpecialized = [
    {
      title: 'Industry Expertise',
      description: 'Our team understands the unique requirements and challenges of each industry we serve.'
    },
    {
      title: 'Compliance Knowledge',
      description: 'We stay current with industry regulations and standards to ensure your facility meets all requirements.'
    },
    {
      title: 'Customized Solutions',
      description: 'Every industry has different needs. We create tailored cleaning programs for optimal results.'
    },
    {
      title: 'Specialized Equipment',
      description: 'We use industry-appropriate equipment and products designed for specific environments.'
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
              Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Specialized commercial cleaning solutions tailored to your industry's unique needs and requirements
            </p>
            <Link
              href="/quote"
              className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center"
            >
              Get Industry-Specific Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Specialized Cleaning for Every Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that different industries have unique cleaning requirements. 
              Our specialized approach ensures your facility meets industry standards.
            </p>
          </div>

          <div className="space-y-12">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={!isEven ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-primary-100 p-3 rounded-lg">
                        <Icon className="h-8 w-8 text-primary-600" />
                      </div>
                      <h3 className="font-heading font-bold text-2xl md:text-3xl text-gray-900">
                        {industry.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                      {industry.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-lg text-gray-900 mb-3">Our Services Include:</h4>
                      <ul className="space-y-2">
                        {industry.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-secondary-500 flex-shrink-0" />
                            <span className="text-gray-600">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Industry Challenge:</h4>
                      <p className="text-gray-700 mb-3">{industry.challenges}</p>
                      <h4 className="font-semibold text-gray-900 mb-2">Our Solution:</h4>
                      <p className="text-gray-700">{industry.solution}</p>
                    </div>

                    <Link
                      href="/quote"
                      className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
                    >
                      Get Quote for {industry.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>

                  {/* Image Placeholder */}
                  <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <Icon className="h-24 w-24 mx-auto mb-4 opacity-50" />
                        <p className="text-lg">{industry.title}</p>
                        <p className="text-sm">Industry Image Placeholder</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Specialized Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Why Choose Industry-Specialized Cleaning?
            </h2>
            <p className="text-xl text-gray-600">
              Generic cleaning services don't address the unique needs of your industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whySpecialized.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Industry Standards & Certifications
            </h2>
            <p className="text-xl text-blue-100">
              We maintain certifications and follow standards required by each industry we serve
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'OSHA Safety Compliance',
              'HIPAA Privacy Standards',
              'Food Service Sanitation',
              'Green Cleaning Certification',
              'Bloodborne Pathogen Training',
              'Industrial Safety Protocols',
              'Educational Facility Standards',
              'Commercial Property Requirements',
              'Healthcare Disinfection Protocols'
            ].map((cert, index) => (
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
            Ready for Industry-Specific Cleaning?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get a customized quote based on your industry's unique requirements and challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white hover:bg-gray-100 text-secondary-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
            >
              Get Industry-Specific Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="bg-secondary-800 hover:bg-secondary-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-flex items-center justify-center"
            >
              Discuss Your Needs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}