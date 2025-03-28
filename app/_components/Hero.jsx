import React from 'react';

function Hero() {
  return (
    <div className="relative" id="home">

      {/* Content Section */}
      <div className="relative pt-36 ml-auto">
        <div className="lg:w-2/3 text-center mx-auto">
          <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
            Loop is where{' '}
            <span className="text-primary dark:text-white">work happens, in sync.</span>
          </h1>
          <p className="mt-8 text-gray-700 dark:text-gray-300">
            Microsoft Loop is a collaborative workspace that lets teams create, share, and work together on
            projects seamlessly. It combines flexible pages with reusable components that sync across
            different apps, making it easy to stay organized and up-to-date.
          </p>

          {/* Buttons */}
          <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
            <a
              href="/dashboard"
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-white">Get started</span>
            </a>
            <a
              href="#"
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
            >
              <span className="relative text-base font-semibold text-primary dark:text-white">Learn more</span>
            </a>
          </div>

          {/* Additional Information */}
          <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
            <div className="text-left">
              <h6 className="text-lg font-semibold text-gray-700 dark:text-white">The lowest price</h6>
              <p className="mt-2 text-gray-500">Experience the most affordable solutions.</p>
            </div>
            <div className="text-left">
              <h6 className="text-lg font-semibold text-gray-700 dark:text-white">The fastest on the market</h6>
              <p className="mt-2 text-gray-500">Get the fastest solutions for your needs.</p>
            </div>
            <div className="text-left">
              <h6 className="text-lg font-semibold text-gray-700 dark:text-white">The most loved</h6>
              <p className="mt-2 text-gray-500">Our platform is trusted by millions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="mt-16 flex justify-center items-center">
        <video className="w-[90%] h-auto" controls>
          <source src="/DEMO.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Hero;