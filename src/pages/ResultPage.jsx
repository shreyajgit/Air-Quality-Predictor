import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ResultImg from './../assets/resultimg.svg';

const Page = () => {
  const { resultData } = useSelector((state) => state.resultData);
  const [resultText, setResultText] = useState('');

  useEffect(() => {
    if (resultData > 0.0 && resultData < 12.0) {
      setResultText('The air quality is GOOD.');
    } else if (resultData > 12.1 && resultData < 35.4) {
      setResultText('The air quality is MODERATE.');
    } else if (resultData > 35.5 && resultData < 55.4) {
      setResultText('The air quality is UNHEALTHY FOR SENSITIVE GROUPS.');
    } else if (resultData > 55.5 && resultData < 150.4) {
      setResultText('The air quality is UNHEALTHY.');
    } else if (resultData > 150.5 && resultData < 250.4) {
      setResultText('The air quality is VERY UNHEALTHY.');
    } else if (resultData > 250.5 && resultData < 500.4) {
      setResultText('The air quality is HAZARDOUS.');
    }
  }, [resultData]);

  return (
    <>
      <section className="text-gray-600 body-font bg-white">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="mb-10 object-cover object-center rounded-full w-24 h-24 lg:w-32 lg:h-32"
            alt="result"
            src={ResultImg}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font text-2xl lg:text-4xl mb-4 font-bold text-green-800 tracking-wider uppercase">
              Air Quality Prediction Result
            </h1>
            <p className="mb-8 leading-relaxed text-gray-700 text-lg lg:text-xl font-light">
              PM2.5 (particles with a diameter of 2.5 micrometers or smaller) level in the air:{' '}
              <span className="font-semibold text-green-700">
                {resultData ? `${resultData} µg/m³` : 'No data available'}
              </span>
            </p>
            <p className="italic text-green-600 text-lg lg:text-2xl font-medium">
              {resultText && resultText}
            </p>
            <div className="flex justify-center mt-8">
              <NavLink to='/airqualityform'>
                <button className="inline-flex items-center justify-center tracking-wider text-white bg-green-500 hover:bg-green-600 py-3 px-6 rounded shadow-md text-lg transition duration-300 ease-in-out transform hover:scale-105">
                  Return to Air Quality Form
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
