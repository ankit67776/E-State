import { useState } from "react";


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

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log({
      employeeName,
      employeeCode,
      otDate,
      otHours,
      reason,
    });
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 w-full">
      <div className="bg-white p-8 rounded-md shadow-lg">
        <div className="text-center">
         
          <p className="text-2xl font-semibold mb-6 text-gray-700">OT Form</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-600 block mb-1">Employee Name:</label>
            <input
              type="text"
              placeholder="Enter your Name"
              onChange={(e) => setEmployeeName(e.target.value)}
              value={employeeName}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm font-medium text-gray-600 block mb-1">Employee Code:</label>
            <input
              type="text"
              placeholder="Enter your Employee Code"
              onChange={(e) => setEmployeeCode(e.target.value)}
              value={employeeCode}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm font-medium text-gray-600 block mb-1">OT Date:</label>
            <input
              type="date"
              onChange={(e) => setOtDate(e.target.value)}
              value={otDate}
              min={getMinimumDate()}
              max={getMaximumDate()}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm font-medium text-gray-600 block mb-1">OT Hours:</label>
            <input
              type="time"
              onChange={(e) => setOtHours(e.target.value)}
              value={otHours}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm font-medium text-gray-600 block mb-1">Reason:</label>
            <textarea
              placeholder="Enter the reason"
              onChange={(e) => setReason(e.target.value)}
              value={reason}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
