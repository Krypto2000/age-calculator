import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState({ day: '', month: '', year: '' });
  const [age, setAge] = useState(null);

  const handleChange = (e) => {
    setBirthDate({ ...birthDate, [e.target.name]: e.target.value });
  };

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate.year, birthDate.month - 1, birthDate.day);
    let ageYears = today.getFullYear() - birthDateObj.getFullYear();
    let ageMonths = today.getMonth() - birthDateObj.getMonth();
    let ageDays = today.getDate() - birthDateObj.getDate();

    if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    setAge({ years: ageYears, months: ageMonths, days: ageDays });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200 p-4 sm:p-8">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Age Calculator</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="day">Date</label>
          <input
            type="number"
            id="day"
            name="day"
            value={birthDate.day}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="month">Month</label>
          <input
            type="number"
            id="month"
            name="month"
            value={birthDate.month}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">Year</label>
          <input
            type="number"
            id="year"
            name="year"
            value={birthDate.year}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          onClick={calculateAge}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto"
        >
          Submit
        </button>
        {age && (
          <div className="mt-4">
            <p className="text-center text-gray-700">
              Your Age is {age.years} Years {age.months} Months {age.days} Days
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgeCalculator;
