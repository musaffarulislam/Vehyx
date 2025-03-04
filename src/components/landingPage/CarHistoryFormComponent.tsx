import React, { useState } from 'react';
import HistoryCardComponent from '../card/HistoryCardComponent';
import HistoryCardIcon2 from '@/assets/svg/HistoryCardIcon2';
import HistoryCardIcon1 from '@/assets/svg/HistoryCardIcon1';
import ApproveIconComponent from '@/assets/ApproveIconComponent';
import OwnerIconComponent from '@/assets/OwnerIconComponent';
import OilIconComponent from '@/assets/OilIconComponent';
import QuestionIconComponent from '@/assets/QuestionIconComponent';

const CarHistoryFormComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define all cards
  const cards = [
    { color: 'bg-blue-100', icon: <HistoryCardIcon1 />, status: 'No Accidents', carModel: "2012 Toyota Camry SE", historyValue: "2,40,583 Rs." },
    { color: 'bg-pink-100', icon: <HistoryCardIcon2 />, status: 'Accidents', carModel: "2017 Maruthi Shift", historyValue: "1,85,200 Rs." },
    { color: 'bg-blue-100', icon: <ApproveIconComponent />, status: "VEHYX 1 - Owner", carModel: "2015 Toyota Camry SE", historyValue: "2,75,900 Rs." },
    { color: 'bg-pink-100', icon: <OwnerIconComponent />, status: "3 Owners", carModel: "2021 KIA Seltos", historyValue: "2,10,450 Rs." },
    { color: 'bg-blue-100', icon: <OilIconComponent />, status: "Regular Oil Changes", carModel: "2012 Toyota Camry SE", historyValue: "2,62,800 Rs." },
    { color: 'bg-pink-100', icon: <QuestionIconComponent />, status: "No Reports Service Records", carModel: "2017 Maruthi Shift", historyValue: "1,95,320 Rs." }
  ];

  const totalCards = cards.length;
  const cardsPerPage = 2;

  const handleNext = () => {
    if (currentIndex < totalCards - cardsPerPage) {
      setCurrentIndex(currentIndex + cardsPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - cardsPerPage);
    }
  };

  // Get current visible cards
  const visibleCards = cards.slice(currentIndex, currentIndex + cardsPerPage);

  // Should show left arrow?
  const showLeftArrow = currentIndex > 0;
  // Should show right arrow?
  const showRightArrow = currentIndex < totalCards - cardsPerPage;

  return (
    <div className='w-full'>
      <div className='text-center py-4'>
        <h1>A car&apos;s history affects its value.</h1>
        <h3 className='font-light text-base'>See the price differences for yourself</h3>
      </div>
      <div className='relative pt-16'>
        <div className='flex gap-8 justify-center'>
          {visibleCards.map((card, index) => (
            <HistoryCardComponent 
              key={currentIndex + index} 
              icon={card.icon} 
              color={card.color} 
              status={card.status}
              carModel={card.carModel}
              historyValue={card.historyValue}
            />
          ))}
        </div>

        {/* Fixed Navigation arrows */}
        <div className='absolute inset-y-0 flex items-center justify-between w-full'>
          <div className='ml-2'>
            {showLeftArrow && (
              <button 
                onClick={handlePrevious} 
                className='p-2 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none' 
                aria-label="Previous cards"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
          </div>
          
          <div className='mr-2'>
            {showRightArrow && (
              <button 
                onClick={handleNext} 
                className='p-2 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none' 
                aria-label="Next cards"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarHistoryFormComponent;