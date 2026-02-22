'use client';

import { ArrowRight, Minus, Plus } from 'lucide-react';
import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const winviewGradient = 'from-[#10B981] to-[#34D399]';

  const faqs = [
    {
      question: 'How long does it take to open an account?',
      answer:
        "Opening a Winview Microfinance account takes less than 5 minutes. Simply fill out our online form with your personal information, and you'll receive instant confirmation once approved.",
    },
    {
      question: 'What documents do I need?',
      answer:
        "You'll need a valid government-issued ID (driver's license, passport, or national ID card) and proof of address (utility bill or bank statement from the last 3 months).",
    },
    {
      question: 'Is my money safe with Winview Microfinance?',
      answer:
        'Absolutely. Winview Microfinance uses bank-grade encryption and security measures. All deposits are insured, and we comply with all regulatory requirements to protect your funds.',
    },
    {
      question: 'What are your interest rates?',
      answer:
        'Our interest rates vary based on account type and loan products. Savings accounts offer competitive rates starting from 3.5% APY.',
    },
    {
      question: 'How can I contact support?',
      answer:
        "Our customer support team is available 24/7. You can call us directly using the 'Call Us' button or submit a ticket through our complaints form.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#10B981]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Now On Top */}
        <div className="text-center mb-12">

          <h2 className="text-[48px] font-semibold text-[#1D1D1F] mb-6 leading-[1.05] tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-[#86868b] mb-8 text-lg font-medium">
            Can't find what you're looking for?
          </p>

        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => setOpenIndex(index === openIndex ? null : index)}
              className={`bg-white/80 backdrop-blur-md rounded-[24px] cursor-pointer transition-all duration-300 border border-transparent ${
                openIndex === index
                  ? 'shadow-lg scale-[1.01] border-emerald-100'
                  : 'shadow-sm hover:shadow-md hover:border-white/50'
              }`}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-2">
                  <h3
                    className={`text-xl font-semibold transition-colors duration-300 ${
                      openIndex === index ? 'text-[#10B981]' : 'text-[#1D1D1F]'
                    }`}
                  >
                    {faq.question}
                  </h3>

                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === index
                        ? `bg-gradient-to-r ${winviewGradient} text-white rotate-180`
                        : 'bg-[#FAF7F2] text-[#1D1D1F]'
                    }`}
                  >
                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? 'max-h-40 opacity-100 mt-4'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-[#86868b] text-[17px] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
            <a
          href="/complaints"
          className="group flex items-center justify-center gap-2 text-[#10B981] font-medium hover:gap-3 transition-all mx-auto mt-6"
        >
          <span className="border-b border-transparent group-hover:border-[#10B981]">
            Contact Support
          </span>
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
