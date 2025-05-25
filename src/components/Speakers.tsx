import React from 'react';
import { speakers } from '../data/webinarData';

const Speakers: React.FC = () => {
  return (
    <section id="speakers" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Your Speakers</h2>
          <p className="text-lg text-gray-700">
            Learn from industry experts with years of experience in corporate language training and cross-cultural communication.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="aspect-w-16 aspect-h-9 relative h-64">
                <img 
                  src={speaker.imageUrl} 
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
                <p className="text-blue-700 font-medium mb-4">{speaker.title}</p>
                <p className="text-gray-700">{speaker.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 italic mb-4">
            "Our speakers bring real-world experience from working with Fortune 500 companies on improving global team communication."
          </p>
          <a 
            href="#register" 
            className="inline-block bg-blue-800 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Reserve Your Spot
          </a>
        </div>
      </div>
    </section>
  );
};

export default Speakers;