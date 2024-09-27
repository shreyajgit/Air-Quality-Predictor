import { NavLink } from "react-router-dom";

const Page = () => {
  return (
    <>
      <section className="text-gray-400 body-font bg-gradient-to-r from-green-200 via-green-100 to-green-50 min-h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 font-poppins tracking-wide text-green-700">
              About the Project
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed mt-3 text-base lg:text-lg font-poppins text-green-700">
              The Air Quality Predictor is an ML-powered project that predicts the quality of air based on four parameters: 'PM2.5', 'PM10', 'NO', 'NO2', 'NOx', 'NH3', 'CO', 'SO2', 'Toluene' 
              The project uses a supervised machine learning algorithm called Random Forest Regressor to train a model on historical air quality data. 
              The model was trained on a dataset of historical air quality data. The accuracy of the model on the training data is above 90%, and on testing data, 
               With the help of this project, one can predict the PM2.5 (particles with a diameter of 2.5 micrometers or smaller) level in the air.
            </p>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
            <NavLink to='/airqualityform' className="block m-auto">
              <button className="text-white bg-green-700 border-0 py-3 px-8 rounded-full shadow-lg text-sm lg:text-lg tracking-wide font-semibold transition-transform transform hover:scale-105 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300">
                Back to Air Quality Form Page
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
