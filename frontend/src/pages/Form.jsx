import { useState } from "react";
import logo from '../assets/logo.webp';

const Form = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeCode, setEmployeeCode] = useState('');
  const [otDate, setOtDate] = useState('');
  const [otHours, setOtHours] = useState('');
  const [reason, setReason] = useState('');

  const getMinimumDate = () => {
    const today = new Date();
    today.setDate(today.getDate() - 2);
    return today.toISOString().split('T')[0];
  };

  const getMaximumDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = {
      employeeName,
      employeeCode,
      otDate,
      reason,
    };
  
    try {
      const response = await fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Form submitted successfully!');  
        console.log('Employee:', employeeName);
        console.log('Code:', employeeCode);
        console.log('Date:', otDate);
        console.log('Hours:', otHours);
        console.log('Reason:', reason);
        setEmployeeName('');
        setEmployeeCode('');
        setOtDate('');
        setOtHours('');
        setReason('');
      } else {
        alert('Failed to submit the form.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form.');
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 w-full">
      <div className="">
        <div className="ml-4">
      <img src= {logo} alt="" className="w-20 h-20 ml-20 pl-3 py-2"/>
      </div>
        <p className="text-3xl font-semibold mb-10 items-center ml-20 pl-2">OT Form</p>
        <form onSubmit={handleSubmit}>
          <label className=" text-gray-700 text-base font-semibold">Employee Name:</label>
          <br />
          <input
            type="text"
            placeholder="Enter your Name"
            onChange={(e) => setEmployeeName(e.target.value)}
            value={employeeName}
            required
            className="w-[300px] p-2 border border-gray-300 rounded-md mt-1 mb-4"
          />
          <br />

          <label className=" text-gray-700 text-base font-semibold">Employee Code:</label>
          <br />
          <input
            type="text"
            placeholder="Enter your Employee Code"
            onChange={(e) => setEmployeeCode(e.target.value)}
            value={employeeCode}
            required
            className="w-[300px] p-2 border border-gray-300 rounded-md mt-1 mb-4"
          />
          <br />

          <label className="text-gray-700 text-base font-semibold">OT Date:</label>
          <br />
          <input
            type="date"
            onChange={(e) => setOtDate(e.target.value)}
            value={otDate}
            min={getMinimumDate()}
            max={getMaximumDate()}
            required
            className="w-[300px] p-2 border border-gray-300 rounded-md mt-1 mb-4"
          />
          <br />

          <label className="text-gray-700 text-base font-semibold">OT Hours:</label>
          <br />
          <input
            type="time"
            onChange={(e) => setOtHours(e.target.value)}
            value={otHours}
            required
            className="w-[300px] p-2 border border-gray-300 rounded-md mt-1 mb-4"
          />
          <br />

          <label className=" my-10 text-gray-700 font-semibold">Reason:</label>
          <br />
          <textarea
            placeholder="Enter the reason"
            onChange={(e) => setReason(e.target.value)}
            value={reason}
            required
            className="w-[300px] p-2 border border-gray-300 rounded-md mt-1 mb-4"
          />
          <br />

          <button
            type="submit"
            className="w-[300px] p-2 bg-blue-500 text-white rounded-md mt-4 hover:scale-110"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
