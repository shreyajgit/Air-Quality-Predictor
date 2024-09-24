/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from "react-router-dom";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Navbar = () => {
  return (
    <>
      <header className="text-black bg-green-100 body-font shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <i className="fa-solid fa-seedling text-green-600 text-2xl lg:text-4xl"></i>
            <span className="ml-3 text-lg lg:text-2xl text-green-900 tracking-wide font-poppins font-semibold">
              Air Quality Predictor
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-sm lg:text-base justify-center font-poppins">
            <Tippy content='Home'>
              <NavLink to="/">
                <span className="mr-5 text-green-800 hover:text-white hover:bg-green-700 px-3 py-2 rounded-lg transition duration-200 ease-in-out">
                  Home
                </span>
              </NavLink>
            </Tippy>
            <Tippy content='About Us Page'>
              <NavLink to="/aboutus">
                <span className="mr-5 text-green-800 hover:text-white hover:bg-green-700 px-3 py-2 rounded-lg transition duration-200 ease-in-out">
                  About Us
                </span>
              </NavLink>
            </Tippy>
            <Tippy content='Form for Air Quality Prediction'>
              <NavLink to='/airqualityform'>
                <span className="mr-5 text-green-800 hover:text-white hover:bg-green-700 px-3 py-2 rounded-lg transition duration-200 ease-in-out">
                  AirQualityForm
                </span>
              </NavLink>
            </Tippy>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
