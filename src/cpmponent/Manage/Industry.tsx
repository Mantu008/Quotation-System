import React from "react";
import { useNavigate } from "react-router-dom"; // Make sure to import useNavigate

const Industry: React.FC = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Industry
            </h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-1">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    placeholder="Enter Industry Name"
                    required
                />
            </div>
            <div className="flex space-x-4 font-bold justify-center">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center shadow-md hover:bg-blue-700 transition duration-200">
                    <i className="fas fa-check"></i> SAVE
                </button>
                <button
                    className="bg-black text-white px-4 py-2 rounded-lg flex items-center justify-center shadow-md hover:bg-gray-800 transition duration-200"
                    onClick={() => navigate("/")} // Redirect to /
                >
                    <i className="fas fa-times"></i> CANCEL
                </button>
            </div>
        </div>
    );
};

export default Industry;
