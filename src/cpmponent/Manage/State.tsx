import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const State = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    State
                </h1>
                <form>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            required // Added required attribute for better form validation
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="code-name"
                        >
                            Code Name
                        </label>
                        <input
                            className="shadow appearance-none border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                            id="code-name"
                            type="text"
                            placeholder="Enter code name"
                            required // Added required attribute
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="code-no"
                        >
                            Code No.
                        </label>
                        <input
                            className="shadow appearance-none border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                            id="code-no"
                            type="text"
                            placeholder="Enter code number"
                            required // Added required attribute
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-200"
                            type="submit" // Change to submit if you want to handle the form submission
                        >
                            <i className="fas fa-check"></i> SAVE
                        </button>
                        <button
                            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-200"
                            type="button"
                            onClick={() => navigate("/")} // Redirect to '/' when clicked
                        >
                            <i className="fas fa-times"></i> CANCEL
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default State;
