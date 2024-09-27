import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import AirQualityImg from './../assets/airformimg.svg';
import { setResult } from './../redux/resultSlice';

const Page = () => {
  const [PM25, setPM25] = useState();
  const [PM10, setPM10] = useState();
  const [NO, setNO] = useState();
  const [NO2, setNO2] = useState();
  const [NOx, setNOx] = useState();
  const [NH3, setNH3] = useState();
  const [CO, setCO] = useState();
  const [SO2, setSO2] = useState();
  const [Toluene, setToluene] = useState();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      if (!(PM25 && PM10 && NO && NO2 && NOx && NH3 && CO && SO2 && Toluene)) {
        toast.error('Please fill all the input fields', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        setLoading(true);

        const { data } = await axios.post(process.env.REACT_APP_FASTAPI_BACKEND, {
          PM25: Number(PM25),
          PM10: Number(PM10),
          NO: Number(NO),
          NO2: Number(NO2),
          NOx: Number(NOx),
          NH3: Number(NH3),
          CO: Number(CO),
          SO2: Number(SO2),
          Toluene: Number(Toluene),
        });

        setLoading(false);

        toast.success('Prediction made successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        dispatch(setResult(Number(data?.pred_result).toFixed(1)));
        navigate('/resultpage');
      }
    } catch (error) {
      setLoading(false);
      toast.error('Something went wrong! Please try again later.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <section className="text-gray-400 body-font bg-gradient-to-r from-green-200 via-green-100 to-green-50 min-h-screen">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center w-10/12">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded shadow-lg transform transition-transform hover:scale-105 duration-500"
              alt="Air Quality Prediction Form"
              src={AirQualityImg}
            />
          </div>

          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-6 font-extrabold text-green-700 tracking-wide font-poppins">
              Air Quality Prediction Form
            </h1>
            <form className="flex flex-col gap-4 w-full lg:w-9/12" onSubmit={onSubmitForm}>
              <input
                type="number"
                className="border-2 border-green-500 py-2 px-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter PM2.5 value"
                onChange={(e) => setPM25(e.target.value)}
              />
              <input
                type="number"
                className="border-2 border-green-500 py-2 px-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter PM10 value"
                onChange={(e) => setPM10(e.target.value)}
              />
              <input
                type="number"
                className="border-2 border-green-500 py-2 px-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter NO value"
                onChange={(e) => setNO(e.target.value)}
              />
              <input
                type="number"
                className="border-2 border-green-500 py-2 px-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter NO2 value"
                onChange={(e) => setNO2(e.target.value)}
              />
              <input
                type="number"
                className="border-2 border-green-500 py-2 px-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter NOx value"
                onChange={(e) => setNOx(e.target.value)}
              />
              <input
                type="number"
                className="border-2 border-green-500 py-2 px-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter NH3 value"
                onChange={(e) => setNH3(e.target.value)}
              />
              <input
                type="number"
                className="border-2 border-green-500 py-2 px-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter CO value"
                onChange={(e) => setCO(e.target.value)}
              />
              <input
                type="number"
                className="border-2 border-green-500 py-2 px-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter SO2 value"
                onChange={(e) => setSO2(e.target.value)}
              />
              <input
                type="number"
                className="border-2 border-green-500 py-2 px-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter Toluene value"
                onChange={(e) => setToluene(e.target.value)}
              />

              {loading ? (
                <i className="fa-solid fa-rotate text-green-600 text-center text-4xl animate-spin mt-4"></i>
              ) : (
                <button className="w-full py-3 text-xl rounded-full font-semibold bg-green-700 text-white shadow-lg transition-transform transform hover:scale-105 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300">
                  Predict
                </button>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
