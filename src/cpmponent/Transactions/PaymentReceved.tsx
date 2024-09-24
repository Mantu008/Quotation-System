import React from "react";

const PaymentReceived: React.FC = () => {
    return (
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-md mx-auto">
            <form>
                {/* Date Field */}
                <div className="mb-4 flex flex-col sm:flex-row sm:items-center">
                    <label className="block text-gray-700 mb-2 sm:mb-0 sm:w-1/3">
                        Date
                    </label>
                    <div className="relative sm:w-2/3">
                        <input
                            type="date"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Select Date"
                        />
                        <i className="fas fa-calendar-alt absolute right-3 top-3 text-gray-500"></i>
                    </div>
                </div>

                {/* No. Field */}
                <div className="mb-4 flex flex-col sm:flex-row sm:items-center">
                    <label className="block text-gray-700 mb-2 sm:mb-0 sm:w-1/3">
                        No.
                    </label>
                    <div className="sm:w-2/3">
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                </div>

                {/* Customer Field */}
                <div className="mb-4 flex flex-col sm:flex-row sm:items-center">
                    <label className="block text-gray-700 mb-2 sm:mb-0 sm:w-1/3">
                        Customer
                    </label>
                    <div className="sm:w-2/3">
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option>Select Customer</option>
                        </select>
                    </div>
                </div>

                {/* Amount Field */}
                <div className="mb-4 flex flex-col sm:flex-row sm:items-center">
                    <label className="block text-gray-700 mb-2 sm:mb-0 sm:w-1/3">
                        Amount
                    </label>
                    <div className="sm:w-2/3">
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                </div>

                {/* Payment For Field */}
                <div className="mb-4 flex flex-col sm:flex-row sm:items-center">
                    <label className="block text-gray-700 mb-2 sm:mb-0 sm:w-1/3">
                        Payment For
                    </label>
                    <div className="sm:w-2/3">
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option>Select Payment For</option>
                        </select>
                    </div>
                </div>

                {/* Number Field */}
                <div className="mb-4 flex flex-col sm:flex-row sm:items-center">
                    <label className="block text-gray-700 mb-2 sm:mb-0 sm:w-1/3">
                        Number
                    </label>
                    <div className="sm:w-2/3">
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option>Select Number</option>
                        </select>
                    </div>
                </div>

                {/* Customer Bank Name Field */}
                <div className="mb-4 flex flex-col sm:flex-row sm:items-center">
                    <label className="block text-gray-700 mb-2 sm:mb-0 sm:w-1/3">
                        Customer Bank Name
                    </label>
                    <div className="sm:w-2/3">
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                </div>

                {/* Payment Method Field */}
                <div className="mb-4 flex flex-col sm:flex-row sm:items-center">
                    <label className="block text-gray-700 mb-2 sm:mb-0 sm:w-1/3">
                        Payment Method
                    </label>
                    <div className="sm:w-2/3">
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option>Select Payment Method</option>
                        </select>
                    </div>
                </div>

                {/* Transaction No. Field */}
                <div className="mb-4 flex flex-col sm:flex-row sm:items-center">
                    <label className="block text-gray-700 mb-2 sm:mb-0 sm:w-1/3">
                        Transaction No.
                    </label>
                    <div className="sm:w-2/3">
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                </div>

                {/* Transaction Date Field */}
                <div className="mb-4 flex flex-col sm:flex-row sm:items-center">
                    <label className="block text-gray-700 mb-2 sm:mb-0 sm:w-1/3">
                        Transaction Date
                    </label>
                    <div className="relative sm:w-2/3">
                        <input
                            type="date"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Select Transaction Date"
                        />
                        <i className="fas fa-calendar-alt absolute right-3 top-3 text-gray-500"></i>
                    </div>
                </div>

                {/* Bill No Field */}
                <div className="mb-4 flex flex-col sm:flex-row sm:items-center">
                    <label className="block text-gray-700 mb-2 sm:mb-0 sm:w-1/3">
                        Bill No
                    </label>
                    <div className="sm:w-2/3">
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                </div>

                {/* Our Bank Field */}
                <div className="mb-4 flex flex-col sm:flex-row sm:items-center">
                    <label className="block text-gray-700 mb-2 sm:mb-0 sm:w-1/3">
                        Our Bank
                    </label>
                    <div className="sm:w-2/3">
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option>Select Our Bank</option>
                        </select>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-4">
                    <button
                        type="submit"
                        className="bg-green-600 font-bold text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-150 ease-in-out flex items-center"
                    >
                        <i className="fas fa-check"></i> SAVE
                    </button>
                    <button
                        type="button"
                        className="bg-red-600 font-bold text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-150 ease-in-out flex items-center"
                    >
                        <i className="fas fa-times"></i> CANCEL
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PaymentReceived;
