import React from 'react';
import './App.css';

function InnerForm() {
  return (
    <div className="inner-form bg-white p-8 rounded-lg shadow-lg flex flex-col items-center w-80">
      <h1 className="text-2xl font-bold mb-4 text-left">LOGIN</h1>
      <div className="flex flex-col space-y-2 w-full mb-4">
        <label className="text-sm font-medium text-gray-700"></label>
        <input
          type="text"
          placeholder="Username"
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="flex flex-col space-y-2 w-full mb-4">
        <label className="text-sm font-medium text-gray-700"></label>
        <input
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <button className="p-2 bg-blue-500 text-white rounded mb-4 w-full">Login</button>
      <div className="flex justify-between text-sm w-full">
        <a href="/forgot-password" className="text-blue-500">ForgotPassword</a>
        <a href="/register" className="text-blue-500">Register</a>
      </div>
    </div>
  );
}


function App() {
  return (
    <div className="outer-wrapper flex items-center justify-center min-h-screen">
      <div className="outer-form bg-white rounded-lg shadow-lg flex items-center p-4">
        <div className="inner-wrapper flex items-center">
          <img src="/image 1.svg" alt="Illustration" className="w-48 h-48 object-cover mr-4" /> {/* Burada */}
          <InnerForm /> 
        </div>
      </div>
    </div>
  );
}
export default App;
