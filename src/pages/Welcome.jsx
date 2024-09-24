import { Typewriter } from 'react-simple-typewriter';
import { NavLink } from 'react-router-dom';

import WelcomePageImg from './../assets/welcomepageimg.svg';

const Page = () => {
  return (
    <>
      <section className="text-gray-400 body-font bg-gradient-to-r from-green-200 via-green-100 to-green-50 min-h-screen">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center w-10/12">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-green-700 tracking-wide font-poppins leading-tight">
              Welcome to
              <br className="hidden lg:inline-block" />{' '}
              <span className="text-green-900">Air Quality Predictor</span>
            </h1>
            <p className="mb-8 leading-relaxed text-xl text-green-600 font-poppins max-w-lg">
              <Typewriter
                words={[
                  'Predict the Quality of the air to know how much particle it contains.',
                  'Poor air quality is linked to a range of adverse health effects, including respiratory diseases.',
                  'Accurate air quality predictions help raise public awareness about the severity of air pollution and its potential health consequences.',
                  'Poor air quality not only affects human health but it also has negative impacts on the environment.',
                ]}
                loop={false}
                cursor={true}
              />
            </p>
            <div className="flex justify-center">
              <NavLink to='/airqualityform'>
                <button className="ml-4 inline-flex text-white bg-green-700 py-4 px-10 rounded-full shadow-lg text-xl tracking-wide font-semibold transition-transform transform hover:scale-105 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300">
                  Get Started
                </button>
              </NavLink>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded shadow-xl transform transition-transform hover:scale-105 duration-500 animate animate-bounce"
              alt="Air Quality Predictor"
              src={WelcomePageImg}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
