import React, { useState } from 'react';
import { faqs } from '../data/webinarData';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-700">
            Get answers to common questions about our webinar.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={faq.id} 
                className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200"
              >
                <button
                  className={`w-full flex items-center justify-between p-4 text-left font-medium ${
                    openIndex === index ? 'bg-blue-50 text-blue-800' : 'bg-white text-gray-900'
                  }`}
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 flex-shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 flex-shrink-0" />
                  )}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-4 pt-0 text-gray-700 bg-white">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-700 mb-4">
              Still have questions? Contact our team at <a href="mailto:webinars@lingualead.com" className="text-blue-700 hover:underline">webinars@lingualead.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;