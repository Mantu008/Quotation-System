import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PaymentReceived: React.FC = () => {
    const navigate = useNavigate(); // Corrected the typo here

    const handleCancle = () => {
        navigate("/"), window.scrollTo(0, 0); // Corrected the typo here as well
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <>
            <h1 className="text-2xl font-bold text-center text-gray-800 my-6">
                <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={handleBackClick}
                    aria-label="Back"
                >
                    <FaArrowLeft className="text-xl" />
                </button>
                {"  "}
                Payment Received
            </h1>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-lg mx-auto">
                <form>
                    {/* Date Field */}
                    <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
                        <label className="block text-gray-700 mb-2 sm:mb-0 sm:w-1/3 font-semibold">
                            Date
                        </label>
                        <div className="relative sm:w-2/3">
                            <input
                                type="date"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                                placeholder="Select Date"
                            />
                            <i className="fas fa-calendar-alt absolute right-3 top-3 text-gray-400"></i>
                        </div>
                    </div>

                    {/* No. Field */}
                    <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
                        <label className="block text-gray-700 mb-2 sm:mb-0 sm:w-1/3 font-semibold">
                            No.
                        </label>
                        <div className="sm:w-2/3">
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                            />
                        </div>
                    </div>

                    {/* Customer Field */}
                    <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
                        <label className="block text-gray-700 mb-2 sm:mb-0 sm:w-1/3 font-semibold">
                            Customer
                        </label>
                        <div className="sm:w-2/3">
                            <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200">
                                <option>Select Customer</option>
                            </select>
                        </div>
                    </div>

                    {/* Amount Field */}
                    <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
                        <label className="block text-gray-700 mb-2 sm:mb-0 sm:w-1/3 font-semibold">
                            Amount
                        </label>
                        <div className="sm:w-2/3">
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                            />
                        </div>
                    </div>

                    {/* Payment For Field */}
                    <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
                        <label className="block text-gray-700 mb-2 sm:mb-0 sm:w-1/3 font-semibold">
                            Payment For
                        </label>
                        <div className="sm:w-2/3">
                            <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200">
                                <option>Select Payment For</option>
                            </select>
                        </div>
                    </div>

                    {/* Number Field */}
                    <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
                        <label className="block text-gray-700 mb-2 sm:mb-0 sm:w-1/3 font-semibold">
                            Number
                        </label>
                        <div className="sm:w-2/3">
                            <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200">
                                <option>Select Number</option>
                            </select>
                        </div>
                    </div>

                    {/* Customer Bank Name Field */}
                    <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
                        <label className="block text-gray-700 mb-2 sm:mb-0 sm:w-1/3 font-semibold">
                            Customer Bank Name
                        </label>
                        <div className="sm:w-2/3">
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                            />
                        </div>
                    </div>

                    {/* Payment Method Field */}
                    <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
                        <label className="block text-gray-700 mb-2 sm:mb-0 sm:w-1/3 font-semibold">
                            Payment Method
                        </label>
                        <div className="sm:w-2/3">
                            <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200">
                                <option>Select Payment Method</option>
                            </select>
                        </div>
                    </div>

                    {/* Transaction No. Field */}
                    <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
                        <label className="block text-gray-700 mb-2 sm:mb-0 sm:w-1/3 font-semibold">
                            Transaction No.
                        </label>
                        <div className="sm:w-2/3">
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                            />
                        </div>
                    </div>

                    {/* Transaction Date Field */}
                    <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
                        <label className="block text-gray-700 mb-2 sm:mb-0 sm:w-1/3 font-semibold">
                            Transaction Date
                        </label>
                        <div className="relative sm:w-2/3">
                            <input
                                type="date"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                                placeholder="Select Transaction Date"
                            />
                            <i className="fas fa-calendar-alt absolute right-3 top-3 text-gray-400"></i>
                        </div>
                    </div>

                    {/* Bill No Field */}
                    <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
                        <label className="block text-gray-700 mb-2 sm:mb-0 sm:w-1/3 font-semibold">
                            Bill No
                        </label>
                        <div className="sm:w-2/3">
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                            />
                        </div>
                    </div>

                    {/* Our Bank Field */}
                    <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
                        <label className="block text-gray-700 mb-2 sm:mb-0 sm:w-1/3 font-semibold">
                            Our Bank
                        </label>
                        <div className="sm:w-2/3">
                            <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200">
                                <option>Select Our Bank</option>
                            </select>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between mt-6">
                        <button
                            type="submit"
                            className="bg-blue-600 font-bold text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            className="bg-gray-300 font-bold text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                            onClick={handleCancle} // The function is correctly invoked here
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default PaymentReceived;
