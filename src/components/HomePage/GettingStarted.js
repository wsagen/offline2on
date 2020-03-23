import React from 'react';
import existingSite from '../../img/getting-started/ico-exsitingsite.svg';
import restaurant from '../../img/getting-started/ico-restaurant.svg';
import retail from '../../img/getting-started/ico-retail.svg';
import wholesale from '../../img/getting-started/ico-wholesale.svg';
import newSite from '../../img/getting-started/ico-newsite.svg';

export default function GettingStarted() {
  return (
    <>
      <section id="getting-started" className="bg-gray-100">
        <div className="max-w-screen-md px-4 py-20 mx-auto text-lg md:py-24">
          <div className="border-b-2 border-gray-200">
            <div className="relative text-center">
              <h2 className="inline-block text-5xl font-bold text-gray-900">
                Getting Started
            </h2>
              <div
                className="absolute bottom-0 w-12 h-1 bg-orange-500 left-1/2"
                style={{ transform: 'translate3D(-50%, 10px, 0)' }}
              />
            </div>
            <p className="max-w-md mx-auto my-8 text-base text-center text-gray-500 sm:text-lg md:text-xl md:max-w-2xl">
              Tell us a little bit about your business so we can redirect to the most relevant and helpful resources.
          </p>
          </div>
          <p className="mt-16 mb-10 text-4xl font-bold leading-10 tracking-tight text-center text-gray-900 sm:leading-none">
            What type of business are you?
          </p>
          <div className="flex flex-col justify-between md:flex-row">
            <button className="flex items-center flex-1 px-4 py-4 mb-4 transition-all duration-150 ease-in-out transform bg-white border rounded shadow md:mb-0 md:mr-4 hover:scale-105 hover:shadow-lg hover:bg-gray-50" type="button">
              <img className="w-12 mr-4" src={restaurant} alt="restaurant icon" />
              <p className="text-2xl font-bold">Restaurant</p>
            </button>
            <button className="flex items-center flex-1 px-4 py-4 mb-4 transition-all duration-150 ease-in-out transform bg-white border rounded shadow md:mb-0 md:mr-4 hover:scale-105 hover:shadow-lg hover:bg-gray-50" type="button">
              <img className="w-12 mr-4" src={retail} alt="retail icon" />
              <p className="text-2xl font-bold">Retailer</p>
            </button>
            <button className="flex items-center flex-1 px-4 py-4 transition-all duration-150 ease-in-out transform bg-white border rounded shadow md:mb-0 hover:scale-105 hover:shadow-lg hover:bg-gray-50" type="button">
              <img className="w-12 mr-4" src={wholesale} alt="wholesale icon" />
              <p className="text-2xl font-bold">Wholesaler</p>
            </button>
          </div>
          <p className="mt-24 mb-10 text-4xl font-bold leading-10 tracking-tight text-center text-gray-900 sm:leading-none">
            What kind of help do you need?
          </p>
          <div className="flex flex-col justify-between md:flex-row">
            <button className="flex items-center flex-1 px-4 py-4 mb-4 transition-all duration-150 ease-in-out transform bg-white border rounded shadow md:mb-0 md:mr-4 hover:scale-105 hover:shadow-lg hover:bg-gray-50" type="button">
              <img className="w-12 mr-4" src={newSite} alt="new site icon" />
              <p className="text-2xl font-bold">I Need a Website</p>
            </button>
            <button className="flex items-center flex-1 px-4 py-4 transition-all duration-150 ease-in-out transform bg-white border rounded shadow md:mb-0 hover:scale-105 hover:shadow-lg hover:bg-gray-50" type="button">
              <img className="w-12 mr-4" src={existingSite} alt="existing site icon" />
              <p className="text-2xl font-bold">I Have a Website</p>
            </button>
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="bg-white">
        <div className="max-w-screen-md px-4 py-20 mx-auto text-lg">
          <h2 className="max-w-2xl text-4xl font-bold leading-10 tracking-tight text-center text-gray-900 md:text-5xl sm:leading-none">
            Great! Here are some helpful options to get you started.
          </h2>
          <div className="mt-16">
            <div className="flex items-start py-8 border-b-2 border-gray-200">
              <span className="inline-block px-5 py-1 mr-8 text-3xl font-bold text-white rounded" style={{ backgroundColor: '#575a89' }}>1</span>
              <div className="leading-none">
                <p className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl md:text-4xl">Local Delivery or Pickup Services</p>
                <p className="mb-4 text-gray-600">Find services available for you to offer</p>
                <a className="text-orange-500 underline" href="#">Learn More</a>
              </div>
            </div>
            <div className="flex items-start py-8 border-b-2 border-gray-200">
              <span className="inline-block px-5 py-1 mr-8 text-3xl font-bold text-white rounded" style={{ backgroundColor: '#575a89' }}>2</span>
              <div className="leading-none">
                <p className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl md:text-4xl">Get Started With Your Own Website</p>
                <p className="mb-4 text-gray-600">Find eCommerce platforms for your business needs</p>
                <a className="text-orange-500 underline" href="#">Learn More</a>
              </div>
            </div>
            <div className="flex items-start py-8">
              <span className="inline-block px-5 py-1 mr-8 text-3xl font-bold text-white rounded" style={{ backgroundColor: '#575a89' }}>3</span>
              <div className="leading-none">
                <p className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl md:text-4xl">Get in Contact With Agencies Who Can Help</p>
                <p className="mb-4 text-gray-600">Find help from eCommerce professionals worldwide</p>
                <a className="text-orange-500 underline" href="#">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}