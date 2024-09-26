import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Tax = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Tax Information
            </h2>
            <form>
                <div className="mb-4 flex flex-col md:flex-row items-center">
                    <label
                        className="block text-gray-700 text-sm font-bold w-full md:w-1/3 mb-2 md:mb-0"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full md:w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                        id="name"
                        type="text"
                        placeholder="Enter Tax Name"
                        required
                    />
                </div>
                <div className="mb-4 flex flex-col md:flex-row items-center">
                    <label
                        className="block text-gray-700 text-sm font-bold w-full md:w-1/3 mb-2 md:mb-0"
                        htmlFor="cgst"
                    >
                        CGST Rate
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full md:w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="cgst"
                        type="text"
                        placeholder="Enter CGST Rate"
                        required
                    />
                </div>
                <div className="mb-4 flex flex-col md:flex-row items-center">
                    <label
                        className="block text-gray-700 text-sm font-bold w-full md:w-1/3 mb-2 md:mb-0"
                        htmlFor="sgst"
                    >
                        SGST Rate
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full md:w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="sgst"
                        type="text"
                        placeholder="Enter SGST Rate"
                        required
                    />
                </div>
                <div className="mb-4 flex flex-col md:flex-row items-center">
                    <label
                        className="block text-gray-700 text-sm font-bold w-full md:w-1/3 mb-2 md:mb-0"
                        htmlFor="igst"
                    >
                        IGST Rate
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full md:w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="igst"
                        type="text"
                        placeholder="Enter IGST Rate"
                        required
                    />
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
                        type="button"
                    >
                        <i className="fas fa-check"></i> SAVE
                    </button>
                    <button
                        className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
                        type="button"
                        onClick={() => navigate("/")} // Redirect to /
                    >
                        <i className="fas fa-times"></i> CANCEL
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Tax;
