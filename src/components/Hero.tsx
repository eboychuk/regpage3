import React from 'react';
import { webinarDetails } from '../data/webinarData';
import { Calendar, Clock, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4 animate-fade-in">
              Free Webinar for Organizations
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {webinarDetails.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-lg">
              Unlock the potential of your global team with effective communication strategies that bridge language barriers and cultural differences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-blue-700 mr-2" />
                <span className="text-gray-700">{webinarDetails.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-700 mr-2" />
                <span className="text-gray-700">{webinarDetails.time}</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-blue-700 mr-2" />
                <span className="text-gray-700">{webinarDetails.language}</span>
              </div>
            </div>
            
            <a 
              href="#register" 
              className="inline-block bg-blue-800 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors transform hover:scale-105 duration-200"
            >
              Reserve Your Spot
            </a>
          </div>
          
          <div className="md:w-1/2 md:pl-10">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200 rounded-lg transform rotate-3"></div>
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Global team meeting" 
                className="relative rounded-lg shadow-lg w-full transform -rotate-3 transition-transform hover:rotate-0 duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;