import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const GenerateModelNo: React.FC = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    // Function to handle cancel button click
    const handleCancel = () => {
        navigate("/"); // Navigate to the home route
        window.scrollTo(0, 0); // Ensure it scrolls after navigation
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-6">
                <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={handleBackClick}
                    aria-label="Back"
                >
                    <FaArrowLeft className="text-xl" />
                </button>
                {"  "}
                Generate Model Number
            </h1>
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <div className="mb-4">
                    <label
                        htmlFor="category"
                        className="block text-gray-700 font-medium mb-1"
                    >
                        Category
                    </label>
                    <select
                        id="category"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="">Select Category</option>
                        {/* Add category options here */}
                    </select>
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-gray-700 font-medium mb-1"
                    >
                        Name
                    </label>
                    <select
                        id="name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="">[SELECT]</option>
                        {/* Add name options here */}
                    </select>
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="model-number"
                        className="block text-gray-700 font-medium mb-1"
                    >
                        Model Number
                    </label>
                    <input
                        type="text"
                        id="model-number"
                        placeholder="Enter Model Number"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-between gap-2">
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200 w-full sm:w-auto">
                        Generate Model Number
                    </button>
                    <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-md transition duration-200 w-full sm:w-auto"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GenerateModelNo;
