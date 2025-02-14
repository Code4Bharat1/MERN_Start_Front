"use client";

import React, { useState } from "react";
import axios from "axios";

const Card = () => {
  const [id, setid] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  

  const [message , SetMesage] = useState("Not submitted")


  async function submitFunction() {
    try {
      const response = await axios.post(
        "http://localhost:5500/api/student/register",
        { id, password }
      );

      console.log(response);

      SetMesage(response.data.message)


    } catch (error) {

      console.error("can't do this no more")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="id"
          value={id}
          onChange={(e) => setid(e.target.value)}
          className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={submitFunction}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
        <div>{message}</div>
      </div>
    </div>
  );
};

export default Card;
