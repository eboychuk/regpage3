import React from 'react';
import { webinarDetails, benefits } from '../data/webinarData';
import { Clock, Calendar, BarChart, Tag, CheckCircle } from 'lucide-react';

const WebinarDetails: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About This Webinar</h2>
          <p className="text-lg text-gray-700">
            Join industry experts as they share proven strategies for effective communication in multilingual corporate environments. Discover practical tools and techniques that can be implemented immediately.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Webinar Details</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Calendar className="h-5 w-5 text-blue-700 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-700">Date:</span>
                  <p className="text-gray-600">{webinarDetails.date}</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-blue-700 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-700">Time:</span>
                  <p className="text-gray-600">{webinarDetails.time}</p>
                </div>
              </li>
              <li className="flex items-start">
                <BarChart className="h-5 w-5 text-blue-700 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-700">Duration:</span>
                  <p className="text-gray-600">{webinarDetails.duration}</p>
                </div>
              </li>
              <li className="flex items-start">
                <Tag className="h-5 w-5 text-blue-700 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-700">Level:</span>
                  <p className="text-gray-600">{webinarDetails.level}</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What You'll Learn</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="bg-yellow-50 rounded-lg p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/4 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Perfect For Your Organization If:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">You manage teams across multiple countries or languages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Your company is expanding into new international markets</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">You're experiencing communication challenges in virtual meetings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">You want to improve collaboration between diverse team members</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/4 flex justify-center">
              <a 
                href="#register" 
                className="inline-block bg-blue-800 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarDetails;