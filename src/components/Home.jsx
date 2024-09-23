import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaUsers,
  FaTools,
  FaChartLine,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-6 sm:pt-12 lg:pt-40">
      <div className="flex flex-col items-center justify-center text-center space-y-6 py-36">
        <p className="text-xl font-semibold text-gray-700 -mb-4">Hi There, </p>
        <h1 className="text-2xl sm:text-5xl font-bold text-gray-800">
          We Build Software Solutions
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          At XYZ Solutions, we craft software that drives businesses forward.
          From web applications to AI-powered systems, we bring your ideas to
          life.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out">
          Get Started
        </button>
      </div>

      <div className="mt-16">
        <h2 className="text-4xl font-semibold text-center text-gray-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300 ease-in-out">
            <FaCode className="text-5xl text-blue-500 mx-auto animate-pulse" />
            <h3 className="text-2xl font-bold mt-4">Custom Development</h3>
            <p className="text-gray-600 mt-2">
              Tailor-made software solutions designed to fit your business
              needs.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300 ease-in-out">
            <FaLaptopCode className="text-5xl text-blue-500 mx-auto animate-pulse" />
            <h3 className="text-2xl font-bold mt-4">Web & Mobile Apps</h3>
            <p className="text-gray-600 mt-2">
              Scalable web and mobile applications for all platforms.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300 ease-in-out">
            <FaRocket className="text-5xl text-blue-500 mx-auto animate-pulse" />
            <h3 className="text-2xl font-bold mt-4">Cloud Solutions</h3>
            <p className="text-gray-600 mt-2">
              Launch your business into the cloud with our modern cloud
              computing services.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300 ease-in-out">
            <FaUsers className="text-5xl text-blue-500 mx-auto animate-pulse" />
            <h3 className="text-2xl font-bold mt-4">Consulting Services</h3>
            <p className="text-gray-600 mt-2">
              Professional guidance to help you navigate your tech challenges.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300 ease-in-out">
            <FaTools className="text-5xl text-blue-500 mx-auto animate-pulse" />
            <h3 className="text-2xl font-bold mt-4">Maintenance & Support</h3>
            <p className="text-gray-600 mt-2">
              Continuous maintenance and support to keep your systems running
              smoothly.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300 ease-in-out">
            <FaChartLine className="text-5xl text-blue-500 mx-auto animate-pulse" />
            <h3 className="text-2xl font-bold mt-4">Analytics & Reporting</h3>
            <p className="text-gray-600 mt-2">
              Gain insights into your business performance with our data
              analytics and reporting services.
            </p>
          </div>
        </div>

        <div className="mt-36">
          <h2 className="text-4xl font-semibold text-center text-gray-800">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md mx-auto text-center max-w-md hover:shadow-xl transition duration-300 ease-in-out">
              <p className="text-gray-600 italic">
                "XYZ Solutions transformed our online presence. Their attention
                to detail and innovative approach were exactly what we needed!"
              </p>
              <h4 className="mt-4 font-bold text-gray-800">
                - Alice Johnson, CEO of TechCorp
              </h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mx-auto text-center max-w-md hover:shadow-xl transition duration-300 ease-in-out">
              <p className="text-gray-600 italic">
                "The team at XYZ Solutions is fantastic! They guided us through
                every step of the development process. Perfect Work"
              </p>
              <h4 className="mt-4 font-bold text-gray-800">
                - Mark Smith, Founder of InnovateX
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
