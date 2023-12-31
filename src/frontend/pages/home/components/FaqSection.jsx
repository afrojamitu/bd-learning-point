import { useState } from 'react';
import faqImg from '../../../../assets/faq/FAQ.png'

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      question: 'What is BD LEARNING POINT E-learning platform?',
      answer: 'Answer 1.',
    },
    {
      question: 'Do we need to pay any admission fee to join this company?',
      answer: 'Answer 2.',
    },
    {
      question: 'Can we do this from the comfort of our home ( work from home )?',
      answer: 'Answer 3.',
    },
    {
      question: 'What kind of documents and gadgets do we need to do this work?',
      answer: 'Answer 4.',
    },
    {
      question: 'Is this a part-time or a full-time Work?',
      answer: 'Answer 5.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <>
      <section className="faq-section">
        <div className="container mx-auto px-4 py-16 lg:py-28">
          <h2 className="section-header text-center my-8 text-5xl text-black font-bold uppercase">
            Frequently Asked Questions <br /> (FAQ)
          </h2>
          <div className='grid lg:flex items-center gap-0'>

            <div className="px-4 lg:px-8 xl:px-16 space-y-4 lg:w-[60%]">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="border rounded-md overflow-hidden bg-white shadow-sm"
                >
                  <button
                    className="flex justify-between items-center w-full p-4 focus:outline-none bg-[#dddddd]"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className="text-xl font-medium">{faq.question}</h3>
                    <svg
                      className={`w-6 h-6 transition-transform duration-300 transform ${index === activeIndex ? 'rotate-180' : ''
                        }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {index === activeIndex && (
                    <div className="px-4 py-2">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className='hidden lg:flex lg:justify-end'>
              <img className='lg:w-[500px]' src={faqImg} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQSection;
