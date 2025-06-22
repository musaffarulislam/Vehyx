"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Smile } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Can I use Vehyx-Info reports with vehicles listed outside Vehyx Marketplace?",
    answer: "Absolutely! Vehyx-Info reports can be used to verify any vehicle's history, regardless of where it's listed. ",
  },
  {
    question: "What is Vehyx Marketplace?",
    answer: "Absolutely! Vehyx-Info reports can be used to verify any vehicle's history, regardless of where it's listed.",
  },
  {
    question: "Is there a fee for using Vehyx-Info or Vehyx Marketplace?",
    answer: "Absolutely! Vehyx-Info reports can be used to verify any vehicle's history, regardless of where it's listed.",
  },
  {
    question: "How do I contact Vehyx for subscriptions or customized pricing?",
    answer: "Absolutely! Vehyx-Info reports can be used to verify any vehicle's history, regardless of where it's listed.",
  },
  {
    question: "How is Vehyx Marketplace different from other platforms?",
    answer: "Absolutely! Vehyx-Info reports can be used to verify any vehicle's history, regardless of where it's listed.",
  },
  {
    question: "Can I list my vehicle on Vehyx Marketplace?",
    answer: "Absolutely! Vehyx-Info reports can be used to verify any vehicle's history, regardless of where it's listed.",
  },
];

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto  py-8">
      <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
      <p className="text-center text-gray-500 mb-6">
        These are most commonly asked questions about Vehyx.
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-lg p-4 cursor-pointer transition-all"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between">
              <div className={cn(
                "flex gap-3",
                openIndex !== index && "items-center"
              )}>
                <div className="h-fit p-2 flex items-center justify-center border border-gray-300 rounded-lg">
                  <Smile className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                    <span className="font-medium font-bold">{faq.question}</span>
                {openIndex === index && faq.answer && (
                    <p className="mt-2 text-gray-500">{faq.answer}</p>
                )}
                </div>
              </div>
              
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
