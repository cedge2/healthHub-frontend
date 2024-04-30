import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../Layout';


const BMICalc = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [btnText, setBtnText] = useState('Calculate');
  
  useEffect(() => {
    //console.log("Component rendered. Current BMI:", bmi);
  }, [bmi]);

  const clearInputs = () => {
    setWeight('');
    setHeight('');
    setBMI(null);
    setBtnText('Calculate');
  };
  
  const fetchBMI = async (e) => {
    e.preventDefault();
    setBtnText('Calculating...');
    const options = {
      method: 'GET',
      url: 'https://body-mass-index-bmi-calculator.p.rapidapi.com/metric',
      params: {
        weight: weight,
        height: height
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
	    //console.log("API Response:", response.data); 
      setBMI(response.data.bmi); 
    } catch (error) {
      console.error(error);
    }
    setBtnText('Calculate');
  };

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
          BMI <span className="text-danger">Calculator</span> 
        </h2>
        <h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-14 md:text-base md:px-4 md:text-center">
          Calculate your BMI using weight and height
        </h3>
        <div className="flex flex-col justify-between items-center w-full md:items-center">
          <form className="flex w-full justify-center flex-col md:w-5/6">
            <input
              autoFocus
              className="border-none outline-none bg-primary px-4 py-2 w-1/6 mx-2 rounded-sm font-raleway w-full md:mx-0 md:my-4"
              placeholder="Enter your weight (in kgs)..."
              value={weight}
              onChange={e => setWeight(e.target.value)}
            />
            <input
              className="border-none outline-none bg-primary px-4 py-2 w-1/6 mx-2 rounded-sm font-raleway w-full md:mx-0"
              placeholder="Enter your height (in meters)..."
              value={height}
              onChange={e => setHeight(e.target.value)}
            />
            <button
              className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-lightGrey transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4"
              onClick={fetchBMI} // Pass the event to fetchBMI
            >
              {btnText}
            </button>
            <button
            className="outline-none border border-primary font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-primary text-lightGrey transition duration-300 hover:bg-lightGrey hover:text-primary md:ml-0 md:mt-4"
            type="button" 
            onClick={clearInputs}
          >
            Clear
          </button>
          </form>
          {bmi !== null && (
            <div className="border border-secondary text-secondary mt-16 md:w-4/5">
              <p className="px-4 py-4 tracking-wide leading-8">{`Your Body Mass Index (BMI) is: ${bmi}`}</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BMICalc;
