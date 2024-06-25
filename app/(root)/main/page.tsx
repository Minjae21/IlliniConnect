import React from 'react';
import Image from 'next/image';

const Main = () => {
  return (
    <div className="main text-white h-full">
      <div className="flex items-center mx-6 md:mx-24">
        <div className="flex-1">
          <div className="welcome text-4xl font-medium mb-6">
            <h2>Welcome to<br />Illini Connect</h2>
          </div>
          <p className="text-2xl text-gray-300 mb-6">Instantly connect with tutors from University of Illinois at Urbana-Champaign</p>
          <button id="btn1" className="button mt-4 bg-transparent border-2 text-lg py-4 px-8 rounded transition-all duration-500 hover:pr-8">
            <span>Get Started</span>
          </button>
        </div>
        <div className="main-img hidden md:block ml-12">
          <Image src="/img/tutoring.jpg" alt="Tutoring" width={680} height={350} className="rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Main;
