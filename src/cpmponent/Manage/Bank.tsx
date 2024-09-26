import React from "react";
import { useNavigate } from "react-router-dom";

const Bank: React.FC = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    return (
        <div className="bg-gray-50 p-8 rounded-lg shadow-md max-w-md mx-auto mt-10">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                Bank Details
            </h2>
            <form>
                {/* Name Input */}
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-medium mb-1"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        className="shadow-sm border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                    />
                </div>

                {/* Account Number Input */}
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-medium mb-1"
                        htmlFor="account-number"
                    >
                        Account Number
                    </label>
                    <input
                        className="shadow-sm border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="account-number"
                        type="text"
                        placeholder="Enter account number"
                        required
                    />
                </div>

                {/* IFSC Input */}
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-medium mb-1"
                        htmlFor="ifsc"
                    >
                        IFSC
                    </label>
                    <input
                        className="shadow-sm border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="ifsc"
                        type="text"
                        placeholder="Enter IFSC code"
                        required
                    />
                </div>

                {/* Branch Input */}
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-medium mb-1"
                        htmlFor="branch"
                    >
                        Branch
                    </label>
                    <input
                        className="shadow-sm border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="branch"
                        type="text"
                        placeholder="Enter branch name"
                        required
                    />
                </div>

                {/* Address Input */}
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-medium mb-1"
                        htmlFor="address"
                    >
                        Address
                    </label>
                    <input
                        className="shadow-sm border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="address"
                        type="text"
                        placeholder="Enter address"
                        required
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row items-center justify-between mt-6">
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 w-full md:w-auto"
                        type="submit"
                    >
                        <i className="fas fa-check"></i> SAVE
                    </button>
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200 mt-4 md:mt-0 w-full md:w-auto"
                        type="button"
                        onClick={() => navigate("/")} // Redirect to the home route
                    >
                        <i className="fas fa-times"></i> CANCEL
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Bank;
